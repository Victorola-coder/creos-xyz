import { Address, LinkedInConnection, Member, Subscriber, Transaction, Waiter } from "../mongodb/models/index.js";
import sendEmail from "../services/email.js";
import mainClient from "../utils/client.js";
import { verifyTransaction } from "../utils/common.js";
import { config } from '../utils/constants.js';
import Joi from 'joi';

const contact = async (req, res) => {

    try {
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            enquiry: Joi.string().required(),
            message: Joi.string().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        const { name, email, enquiry, message } = req.body;

        const text = `
        Name: ${name} <br/>
        Email: ${email} <br/>
        Enquiry: ${enquiry} <br/>
        Message: <br/> ${message} <br/>
        `
        // const data = { ...req.body, slug, id: post._id }
        sendEmail(config.CONTACT_EMAIL, config.STRINGS.NewContactSubmission, text);
        res.json({ message: 'Contact successfully sent' });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
}


const waitlist = async (req, res) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        product: Joi.string().valid(...config.PRODUCT_OPTIONS).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const { name, email, product } = req.body;
    try {

        const existing = await Waiter.findOne({ email });

        if (existing) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.AlreadyInWaitlist });
        }
        const waiter = new Waiter({ name, email, product });
        await waiter.save();
        return res.json({ message: config.STRINGS.JoinedWaitlistSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log("e", error)
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
}

const membership = async (req, res) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        gender: Joi.string().valid(...config.GENDERS).required(),
        profession: Joi.string().required(),
        distinction: Joi.string().required(),
        linkedInUrl: Joi.string().uri().required(),
        headshot: Joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const { name, email, gender, profession, distinction, linkedInUrl, headshot } = req.body;
    try {

        const existing = await Member.findOne({ email });

        if (existing) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.AlreadySubmitted });
        }
        const member = new Member({ name, email, gender, profession, distinction, linkedInUrl, headshot });
        await member.save();
        const amount = config.MEMBERSHIP_FEE
        const payment = await mainClient.post('https://api.paystack.co/transaction/initialize',
            { email, currency: 'NGN', amount, metadata: { entity: 'MEMBERSHIP', entityId: member._id } },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                }
            })
        if (payment.status === 200) {
            const details = payment.data.data
            const txn = new Transaction({
                status: 'initiated',
                amount,
                reference: details.reference,
                description: 'MEMBERSHIP_FEE',
                entity: 'MEMBER',
                entityId: member._id,
            });
            await txn.save();
            return res.json({ message: config.STRINGS.SubmittedSuccessfully, data: { ...req.body, checkoutURL: details.authorization_url } });
        }
        throw new Error();
    } catch (error) {
        console.log("e", error)
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
}

const webhook = async (req, res) => {
    const eventData = req.body;
    const signature = req.headers['x-paystack-signature'];

    if (!verifyTransaction(eventData, signature)) {
        return res.sendStatus(400);
    }

    if (eventData.event === 'charge.success') {
        const transactionId = eventData.data.id;
        // Process the successful transaction to maybe fund wallet and update your WalletModel
        console.log(`Transaction ${transactionId} was successful`);
    }

    return res.sendStatus(200);
}

const subscribe = async (req, res, next) => {

    const schema = Joi.object({
        firstName: Joi.string().required(),
        email: Joi.string().email().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { firstName, email } = req.body;
    try {

        const existing = await Subscriber.findOne({ email });

        if (existing) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.AlreadySubscribed });
        }
        const subscriber = new Subscriber({ firstName, email });
        await subscriber.save();
        return res.json({ message: config.STRINGS.SubscribedSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
};

const submitLinkedIn = async (req, res, next) => {

    const schema = Joi.object({
        url: Joi.string().uri({ scheme: ['http', 'https'] })
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { url } = req.body;
    try {

        const existing = await LinkedInConnection.findOne({ url });

        if (existing) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.AlreadyLinked });
        }
        const linkedInConnection = new LinkedInConnection({ url });
        await linkedInConnection.save();
        return res.json({ message: config.STRINGS.LinkedInSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
};


const sendTokenAddress = async (req, res, next) => {

    const schema = Joi.object({
        address: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { address } = req.body;
    try {

        const existing = await Address.findOne({ address });

        if (existing) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.AlreadySubmitted });
        }
        const linkedInConnection = new Address({ url });
        await linkedInConnection.save();
        return res.json({ message: config.STRINGS.SubmittedSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
};


export default {
    contact,
    waitlist,
    subscribe,
    submitLinkedIn,
    sendTokenAddress,
    membership,
    webhook
};
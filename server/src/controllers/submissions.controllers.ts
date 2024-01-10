import { RequestHandler } from 'express';
import Joi from 'joi';
import { Address, LinkedInConnection, Member, Subscriber, Transaction, Waiter } from '../mongodb/models';
import { sendEmail } from '../services';
import mainClient from '../utils/client';
import { verifyTransaction } from '../utils/common';
import { appConfig } from '../utils/constants';

export const contactController: RequestHandler = async (req, res) => {

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
        sendEmail(appConfig.CONTACT_EMAIL, appConfig.STRINGS.NewContactSubmission, text);
        res.json({ message: 'Contact successfully sent' });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError });
    }
}

export const waitlistController: RequestHandler = async (req, res) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        product: Joi.string().valid(...appConfig.PRODUCT_OPTIONS).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const { name, email, product } = req.body;
    try {

        const existing = await Waiter.findOne({ email });

        if (existing) {
            return res.status(404).json({ message: appConfig.ERROR_MESSAGES.AlreadyInWaitlist });
        }
        const waiter = new Waiter({ name, email, product });
        await waiter.save();
        return res.json({ message: appConfig.STRINGS.JoinedWaitlistSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log('e', error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError });
    }
}

export const membershipController: RequestHandler = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        gender: Joi.string().valid(...appConfig.GENDERS).required(),
        profession: Joi.string().required(),
        distinction: Joi.string().required(),
        linkedInUrl: Joi.string().uri().required(),
        headshot: Joi.string(),
        txnId: Joi.string()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const { name, email, gender, profession, distinction, linkedInUrl, headshot, txnId } = req.body;
    try {
        const existing = await Member.findOne({ email });
        if (existing) {
            return res.status(404).json({ message: appConfig.ERROR_MESSAGES.AlreadySubmitted });
        }
        const member = new Member({ name, email, gender, profession, distinction, linkedInUrl, headshot, txn:txnId });
        await member.save();

        // const txn = await Transaction.findById(txnId)

        return res.json({ message: appConfig.STRINGS.SubmittedSuccessfully });
    } catch (error) {
        console.log('error', error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError });
    }
}

export const subscribeController: RequestHandler = async (req, res, next) => {

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
            return res.status(404).json({ message: appConfig.ERROR_MESSAGES.AlreadySubscribed });
        }
        const subscriber = new Subscriber({ firstName, email });
        await subscriber.save();
        return res.json({ message: appConfig.STRINGS.SubscribedSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError });
    }
};

export const submitLinkedInController: RequestHandler = async (req, res, next) => {

    const schema = Joi.object({
        url: Joi.string().uri({ scheme: ['http', 'https'] })
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { url } = req.body;
    try {

        const existing = await LinkedInConnection.findOne({ url });

        if (existing) {
            return res.status(404).json({ message: appConfig.ERROR_MESSAGES.AlreadyLinked });
        }
        const linkedInConnection = new LinkedInConnection({ url });
        await linkedInConnection.save();
        return res.json({ message: appConfig.STRINGS.LinkedInSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError });
    }
};

export const sendTokenAddressController: RequestHandler = async (req, res, next) => {

    const schema = Joi.object({
        address: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { address } = req.body;
    try {

        const existing = await Address.findOne({ address });

        if (existing) {
            return res.status(404).json({ message: appConfig.ERROR_MESSAGES.AlreadySubmitted });
        }
        const linkedInConnection = new Address({ address });
        await linkedInConnection.save();
        return res.json({ message: appConfig.STRINGS.SubmittedSuccessfully, data: { ...req.body } });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError });
    }
};

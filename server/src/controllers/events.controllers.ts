import { RequestHandler } from "express";
import Joi from "joi";
import { Event, Guest, Transaction } from "../mongodb/models";
import { sendEmail } from "../services";
import { appConfig } from "../utils/constants";

export const allEventsController: RequestHandler = async (req, res) => {
    try {
        const { search } = req.query
        const filter = search ? { name: { $regex: search, $options: 'i' }, } : {}
        const events = await Event.find(filter)
        const data = { events }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
}

export const usersEventsController: RequestHandler = async (req: any, res) => {
    try {
        const { search } = req.query
        const filter = search ? { name: { $regex: search, $options: 'i' }, } : {}
        const events = await Event.find({ ...filter, createdBy: req.user.id })
        const data = { events }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
    // TODO: attendants
}

export const singleEventController: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id
        const event = await Event.findById(id).populate('createdBy', 'name');
        if (!event) {
            return res.status(400).json({ message: appConfig.ERROR_MESSAGES.NotFoundError, });
        }
        return res.json({ message: appConfig.STRINGS.Success, data: event })
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError })

    }
}

export const updateEventController: RequestHandler = async (req: any, res) => {
    const { 
        name,
        image,
        slug,
        price,
        description,
        location,
        locationType,
        shortDescription,
        eventDate,
        eventTime,
    } = req.body;
    const { id } = req.params
    try {
        // const post = await Post.findByIdAndUpdate(id, { name, slug, body, image, author }, )
        const event = await Event.findById(id)
        if (event.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not the author' })
        }

        event.name = name || event.name;
        event.slug = slug || event.slug;
        event.price = price || event.price
        event.description = description || event.description
        event.location = location || event.location
        event.locationType = locationType || event.locationType
        event.shortDescription = shortDescription || event.shortDescription
        event.image = image || event.image
        event.eventDate = eventDate || event.eventDate
        event.eventTime = eventTime || event.eventTime

        const data = await event.save();
        res.json({ message: 'Event successfully updated', data });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
};


export const deleteEventController: RequestHandler = async (req: any, res) => {
    const { id } = req.params

    try {
        const post = await Event.findById(id)
        if (post.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not the author' })
        }
        const deleted = post.deleteOne()
        if (deleted) {
            res.json({ message: "Post was deleted successfully!" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
};

export const createEventController: RequestHandler = async (req: any, res) => {
    try {
        const schema = Joi.object({
            name: Joi.string().required(),
            location: Joi.string().required(),
            image: Joi.string(),
            description: Joi.string().required(),
            shortDescription: Joi.string().required(),
            timezone: Joi.string().required(),
            eventTime: Joi.string().required(),
            eventDate: Joi.date().required(),
            price: Joi.number().required(),
            locationType: Joi.string().required().valid(...appConfig.LOCATION_TYPES),
        });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        const {
            name,
            location,
            image = "",
            description,
            shortDescription,
            timezone,
            eventTime,
            eventDate,
            locationType,
            price
        } = req.body

        const event = await Event.create({
            name,
            slug: name.split(' ').join('-'),
            location,
            image,
            description,
            shortDescription,
            timezone,
            eventTime,
            eventDate,
            locationType,
            price,
            createdBy: req.user.id
        })

        const data = { ...req.body, id: event._id }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
}

export const buyTicketController: RequestHandler = async (req, res) => {
    try {
        const schema = Joi.object({
            eventId: Joi.string().required(),
            txnId: Joi.string().required(),
            name: Joi.string().required(),
            profession: Joi.string().required(),
            linkedInUrl: Joi.string().required(),
            email: Joi.string().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const {
            eventId,
            txnId,
            name,
            profession,
            linkedInUrl,
            email,
        } = req.body

        const event = await Event.findOne({ id: eventId })
        const txn = await Transaction.findOne({ id: txnId })
        if (event && txn) {
            const attendant = await Guest.create({
                event: eventId,
                txn: txnId,
                name,
                profession,
                linkedInUrl,
                email,
                owner: event.createdBy
            })


            const data = { ...req.body, id: attendant._id }
            sendEmail(email,
                `Ticket bought for ${event.name}`,
                `Your ticket reference TKT-${txn.reference}, location at ${event.location}`
            )
            return res.status(201).json({ message: appConfig.STRINGS.TicketBoughtSuccessfully, data });
        }
        return res.status(400).json({
            message: appConfig.ERROR_MESSAGES.BadRequestError,
            data: {
                message: 'Event or transaction not found'
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }

}

export const verifyTicketController: RequestHandler = async (req, res) => {
    try {

        const schema = Joi.object({
            ticket: Joi.string().required(),
        });
        const { error } = schema.validate(req.params);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const { ticket } = req.params

        const txnId = ticket.replace("TKT-", "")

        const attendant = await Guest.findOne({ txn: txnId }).populate('txn')

        if (!attendant) {
            return res.status(400).json({ message: appConfig.ERROR_MESSAGES.NotFoundError, });
        }
        return res.status(200).json({ message: appConfig.STRINGS.Success, data: attendant });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
}


export const eventGuestsController: RequestHandler = async (req, res) => {
    try {
        const { search, eventId } = req.query
        const filter = search ? { name: { $regex: search, $options: 'i' }, } : {}
        // const events = await Guest.find({ ...filter, createdBy: req.user.id })
        const events = await Guest.find({ ...filter, eventId })
        const data = { events }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
}

// export const getQuotesFromDB = async (queryMap: QuotesQueryMap) => {
//     const { name = "", name = "", page = 1, pageSize = AppConfig.DEFAULT_PAGE_SIZE } = queryMap
//     let result: any
//     const skip = (page - 1) * pageSize;

//     if (name) {
//         result = await QuoteModel.find({
//             anime: { $regex: name, $options: 'i' },
//         }).skip(skip).limit(pageSize);

//     } else if (name) {
//         result = await QuoteModel.find({
//             character: { $regex: name, $options: 'i' }
//         }).skip(skip).limit(pageSize);

//     } else {
//         result = await QuoteModel.find({}).skip(skip).limit(pageSize);
//     }
//     const total = await QuoteModel.countDocuments()
//     // const total = result?.length
//     return { quotes: result, total, page, pageSize }
// }

// TODO: webhook && auth cookies
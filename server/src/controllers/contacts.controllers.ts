import { RequestHandler } from "express";
import { Attendant, Event, Transaction } from "../mongodb/models";
import { appConfig } from "../utils/constants";
import Joi from "joi";
import { sendEmail } from "../services";
import { Types } from "mongoose";

export const allEventsController: RequestHandler = async (req, res) => {
    try {
        const { search } = req.query
        const filter = search ? { name: { $regex: search, $options: 'i' }, } : {}
        // const events = await Event.find({ ...filter, createdBy: req.user.id })
        const events = await Event.find(filter)
        const data = { events }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
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
    const { name, body, image } = req.body;
    const { id } = req.params
    try {
        // const post = await Post.findByIdAndUpdate(id, { name, slug, body, image, author }, )
        const event = await Event.findById(id)
        if (event.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not the author' })
        }

        event.name = req.body.name || event.name;
        event.slug = req.body.slug || event.slug;
        event.price = req.body.price || event.price
        event.description = req.body.description || event.description
        event.location = req.body.location || event.location
        event.locationType = req.body.locationType || event.locationType
        event.shortDescription = req.body.shortDescription || event.shortDescription
        event.image = req.body.image || event.image
        event.eventDate = req.body.eventDate || event.eventDate
        event.eventTime = req.body.eventTime || event.eventTime

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
            locationType
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
            createdBy: req.user.id
        })

        const data = { ...req.body, id: event._id }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
}

import { RequestHandler } from "express";
import Joi from "joi";
import { Guest } from "../mongodb/models";
import { appConfig } from "../utils/constants";

export const allGuestsController: RequestHandler = async (req, res) => {
    try {
        const { search } = req.query
        const filter = search ? { name: { $regex: search, $options: 'i' }, } : {}
        // const guests = await Guest.find({ ...filter, createdBy: req.user.id })
        const guests = await Guest.find(filter)
        const data = { guests }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
}

export const singleGuestController: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id
        const attendant = await Guest.findById(id);
        if (!attendant) {
            return res.status(400).json({ message: appConfig.ERROR_MESSAGES.NotFoundError, });
        }
        return res.json({ message: appConfig.STRINGS.Success, data: attendant })
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError })

    }
}

export const updateGuestController: RequestHandler = async (req: any, res) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        profession: Joi.string().required(),
        linkedInUrl: Joi.string(),
        email: Joi.string().required(),
        eventId: Joi.string()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const {
        name,
        profession,
        linkedInUrl,
        email,
        eventId } = req.body;
    const { id } = req.params
    try {
        // const post = await Post.findByIdAndUpdate(id, { name, slug, body, image, author }, )
        const guest = await Guest.findById(id)
        if (guest.owner.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not the owner of this guest.' })
        }

        guest.name = name || guest.name
        guest.profession = profession || guest.profession
        guest.linkedInUrl = linkedInUrl || guest.linkedInUrl
        guest.email = email || guest.email
        guest.eventId = eventId || guest.eventId

        const data = await guest.save();
        res.json({ message: 'Guest successfully updated', data });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
};

export const deleteGuestController: RequestHandler = async (req: any, res) => {
    const { id } = req.params

    try {
        const guest = await Guest.findById(id)
        if (guest.owner.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not the owner of this guest' })
        }
        const deleted = guest.deleteOne()
        if (deleted) {
            res.json({ message: "Guest was deleted successfully!" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
};

export const createGuestController: RequestHandler = async (req: any, res) => {
    try {
        const schema = Joi.object({
            name: Joi.string().required(),
            profession: Joi.string().required(),
            linkedInUrl: Joi.string(),
            email: Joi.string().required(),
            eventId: Joi.string(),
        });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        const {
            name,
            profession,
            linkedInUrl,
            email,
            eventId
        } = req.body

        const event = await Guest.create({
            name,
            profession,
            linkedInUrl,
            email,
            owner: req.user.id,
            eventId: eventId ? eventId : null
        })

        const data = { ...req.body, id: event._id }
        return res.json({ message: appConfig.STRINGS.Success, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: appConfig.ERROR_MESSAGES.InternalServerError, error });
    }
}

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto'
import { Token, User } from '../mongodb/models/index.js';
import Joi from 'joi';
import sendEmail from "../services/email.js";
import { generateAccessToken, generateRefreshToken } from '../services/auth.js';
import { config } from '../utils/constants.js';

// Register a new user
const register = async (req, res) => {
    const { name,
        profession,
        email,
        password,
        avatar,
        gender,
        distinction,
        linkedInUrl } = req.body;
    try {
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.UserAlreadyExists });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            profession,
            email,
            avatar,
            gender,
            distinction,
            linkedInUrl,
            password: hashedPassword,
        });
        console.log("user")
        await user.save();
        console.log("user saved", user)

        const data = { ...req.body, id: user._id }
        return res.json({ message: config.STRINGS.RegistrationSuccessful, data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError, error });
    }
};

// TODO: Use cookies for tokens
// Login with an existing user
const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: config.ERROR_MESSAGES.InvalidCredentialsProvided });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log("passs")
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: config.ERROR_MESSAGES.InvalidCredentialsProvided });
        }
        // res.setHeader(
        //     "Set-Cookie",
        //     cookie.serialize("token", "Bearer " + accessToken, {
        //         httpOnly: true,
        //         secure: process.env.NODE_ENV === "local" ? false : true,
        //         sameSite: "lax",
        //         domain:
        //             process.env.NODE_ENV === "local" ? "localhost" : "rdland.io",
        //         path: "/",
        //         maxAge: 360000,
        //     })
        // );

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);


        return res.status(200).json({ user, accessToken, refreshToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
};


// Route to refresh access token using the refresh token
const getToken = async (req, res) => {
    try {
        const refreshToken = req.body.refreshToken;
        if (!refreshToken) return res.status(401).json({ message: config.ERROR_MESSAGES.InvalidCredentials });

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(401).json({ message: config.ERROR_MESSAGES.InvalidCredentials });

            const accessToken = generateAccessToken(user);
            res.json({ accessToken });
        });
    } catch (error) {
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
};

const forgotPassword = async (req, res) => {
    // Generate a unique reset token and store it (e.g., in a database).
    // Send a password reset email with a link containing the reset token.
    // Include a link to your reset password page where users can enter a new password.
    // You can use Nodemailer to send the email.
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            // TODO: Change this to be if an email exist, we'll send it to you.
            return res.status(400).json({ message: config.ERROR_MESSAGES.ResourceNotFound });
        }

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await Token.create({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            });
        }

        const link = `${process.env.BASE_URL}/auth/reset-password/${user._id}/${token.token}`;
        console.log(link);

        // TODO: Customize email sent
        sendEmail(user.email, config.STRINGS.PasswordLinkEmailTitle, link);

        return res.status(200).json({ message: config.STRINGS.PasswordLinkSent });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: config.ERROR_MESSAGES.InternalServerError });
    }


}

const resetPassword = async (req, res) => {
    try {
        const schema = Joi.object({ password: Joi.string().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).json({ message: config.ERROR_MESSAGES.InvalidLinkProvided });


        const token = await Token.findOne({
            userId: req.params.userId,
            token: req.params.token,
        });
        if (!token) return res.status(400).json({ message: config.ERROR_MESSAGES.InvalidLinkProvided });

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashedPassword;
        await user.save();
        await token.deleteOne();

        return res.status(200).json({ message: config.STRINGS.PasswordResetSuccessful });
    } catch (error) {
        console.error(error);
        // If an error occurs, send an error response
        return res.status(500).json({ error: config.ERROR_MESSAGES.InternalServerError });
    }
}

const changePassword = async (req, res) => {
    try {
        const { password, newPassword } = req.body;
        const userId = req.user.id; // Assuming you have user data in the request

        // Retrieve the user from the database
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.BadRequestError });
        }

        // Check if the current password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: config.ERROR_MESSAGES.InvalidCredentialsProvided });
        }
        user.password = await bcrypt.hash(newPassword, 10)
        await user.save();

        return res.json({ message: config.STRINGS.PasswordChangeSuccessful });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: config.ERROR_MESSAGES.InternalServerError });
    }
};

export default {
    register,
    login,
    getToken,
    forgotPassword,
    resetPassword,
    changePassword
};
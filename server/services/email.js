import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const sent = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: text,
        });
        console.log(sent)

        console.log("email sent sucessfully");
        if(sent){
            return true
        }
    } catch (error) {
        console.log(error, "email not sent");
        return false
    }
};

export default sendEmail;
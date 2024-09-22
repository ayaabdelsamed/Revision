import nodemailer from "nodemailer";
import jwt from "jsonwebtoken"
import { emailTemplate } from "./emailTemplate.js";

export const sendEmail = async (email) => {

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
        user: "aya.h.abdelsamed@gmail.com",
        pass: "zphambkidrdhlvuy",
        },
    });

let token = jwt.sign({email},'myNameIsOtii')

        const info = await transporter.sendMail({
        from: '"Aya Foo Koch 👻" <aya.h.abdelsamed@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        html:emailTemplate(token)
        });

        console.log("Message sent: %s", info.messageId);
    }



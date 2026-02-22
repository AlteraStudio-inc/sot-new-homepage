import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendEmail = async ({
    to,
    subject,
    html,
}: {
    to: string;
    subject: string;
    html: string;
}) => {
    if (process.env.NODE_ENV === "development") {
        console.log(`[Email Debug to ${to}] Subject: ${subject}`);
        return;
    }

    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM || '"整体院予約" <no-reply@example.com>',
            to,
            subject,
            html,
        });
    } catch (error) {
        console.error("Email send error:", error);
    }
};

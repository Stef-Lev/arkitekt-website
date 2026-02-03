import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const botMessagePattern = /^[a-f0-9]{20,}$/i;

export async function POST(request: NextRequest) {
  try {
    const { email, name, message, company } = await request.json();
    if (company) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
    }
    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim() ||
      !emailRegex.test(email) ||
      message.length < 10
    ) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 },
      );
    }
    if (botMessagePattern.test(message)) {
      return NextResponse.json(
        { error: 'Bot submission detected' },
        { status: 400 },
      );
    }
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      cc: email,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();

    return NextResponse.json({ message: 'Email sent' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

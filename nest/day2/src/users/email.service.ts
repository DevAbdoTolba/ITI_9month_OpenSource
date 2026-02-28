import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'you.mwork@gmail.com',
        pass: 'cscb zwte rqay pxdy',
      },
    });
  }

  async sendWelcomeEmail(to: string) {
    const mailOptions = {
      from: '"Nest Day 2 Auth" <you.mwork@gmail.com>',
      to,
      subject: 'Welcome to our platform!',
      text: `Welcome ${to} :D\n Thanks, ${to}`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Welcome email sent to ${to}`);
    } catch (error) {
      this.logger.error(`Error sending welcome email to ${to}:`, error);
    }
  }

  async sendLoginAlert(to: string) {
    const mailOptions = {
      from: '"Nest Day 2 Auth" <you.mwork@gmail.com>',
      to,
      subject: 'New Login Alert',
      text: `Hello, thanks for login :D\n Thanks, ${to}`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Login alert email sent to ${to}`);
    } catch (error) {
      this.logger.error(`Error sending login alert email to ${to}:`, error);
    }
  }
}

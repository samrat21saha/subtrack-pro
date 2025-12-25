import nodemailer from "nodemailer";
import { config } from "dotenv";
import process from "process";

config();

export const accountEmail = process.env.EMAIL_USER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'samratsahaofficial9635@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default transporter;

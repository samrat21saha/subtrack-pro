// src/services/email.service.js

import { sendReminderEmail as sendReminderEmailUtil } from "../utils/send-template.js";

/**
 * Service-layer wrapper for sending reminder emails.
 * This isolates controllers/workflows from implementation details.
 */
export const sendReminderEmail = async (payload) => {
    return await sendReminderEmailUtil(payload);
};

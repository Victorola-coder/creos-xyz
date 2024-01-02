import crypto from 'crypto';

export const verifyTransaction = (eventData, signature) => {
    const hmac = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY);
    const expectedSignature = hmac.update(JSON.stringify(eventData)).digest('hex');
    return expectedSignature === signature;
}
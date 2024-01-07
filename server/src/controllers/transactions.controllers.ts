import { RequestHandler } from 'express';
import { verifyTransaction } from '../utils/common';
import { verifyTxnByReference } from '../services';
import { appConfig } from '../utils/constants';

export const verifyTransactionController: RequestHandler = async (req, res) => {
    try {
        const { reference } = req.params;
        const verifiedTxn = await verifyTxnByReference(reference, appConfig.TRANSACTION_DESC_TYPES.MEMBERSHIP_FEE)
        return res.json({ message: appConfig.STRINGS.Success, data: verifiedTxn })
    } catch (error) {
        return res.status(400).json({ message: appConfig.ERROR_MESSAGES.BadRequestError })
    }
}

export const webhookController: RequestHandler = async (req, res) => {
    const eventData = req.body;
    const signature = req.headers['x-paystack-signature'];

    if (!verifyTransaction(eventData, signature)) {
        return res.sendStatus(400);
    }

    if (eventData.event === 'charge.success') {
        const transactionId = eventData.data.id;
        // Process the successful transaction to maybe fund wallet and update your WalletModel
        console.log(`Transaction ${transactionId} was successful`);
    }

    return res.sendStatus(200);
}
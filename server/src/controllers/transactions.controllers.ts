import { RequestHandler } from 'express';
import { verifyTransaction } from '../utils/common';
import { verifyTxnByReference } from '../services';
import { appConfig } from '../utils/constants';
import { ChargeSuccessEvent } from '../interfaces/paystack';

export const verifyTransactionController: RequestHandler = async (req, res) => {
    try {
        const { reference, description } = req.params;
        const verifiedTxn = await verifyTxnByReference(reference, description)
        return res.json({ message: appConfig.STRINGS.Success, data: verifiedTxn })
    } catch (error) {
        return res.status(400).json({ message: appConfig.ERROR_MESSAGES.BadRequestError })
    }
}

export const webhookController: RequestHandler = async (req, res) => {
    const eventData: ChargeSuccessEvent = req.body;
    const signature = req.headers['x-paystack-signature'];
    console.log(eventData)

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
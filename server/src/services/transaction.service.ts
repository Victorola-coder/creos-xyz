import { IPaystackPayment } from "../interfaces"
import { Transaction } from "../mongodb/models"
import mainClient from "../utils/client"
import { appConfig } from "../utils/constants"

export const verifyTxnByReference = async (reference: string, description: string) => {
    const url = `https://api.paystack.co/transaction/verify/${reference}`
    const headers = {
        Authorization: `Bearer ${process.env.PAYSTACK_API_SECRET_KEY}`,
    }
    try {
        const req = await mainClient.get(url, { headers })
        if (req.status === 200) {
            const reqData: IPaystackPayment = req.data;
            if (reqData.status) {
                const txn = await createTransaction(
                    reqData,
                    description
                )
                return { status: true, txnId: txn.id }
            }
            return { status: false }
        }
    } catch (error) {
        console.log(error)
        return { status: false }
    }
}

export const createTransaction = async (reqData: IPaystackPayment, description: string) => {
    const { data } = reqData
    const txn = new Transaction({
        status: data?.status,
        paidAt: data?.paidAt,
        amount: data?.amount,
        reference: data?.reference,
        apiId: data?.id,
        description: description,
        txnType: appConfig.TRANSACTION_TYPES.EW,
        source: data?.customer.email,
        destination: 'COMPANY'
    })
    await txn.save()
    return txn
}

export const checkTxnExists = async (reference: string) => {
    const txn = await Transaction.findOne({ reference })
    if (txn) {
        return true
    }
    return false
}
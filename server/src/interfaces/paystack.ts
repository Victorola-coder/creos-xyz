export interface IPaystackPayment {
    status: boolean;
    message: string;
    data?: Data;
}

interface Data {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message?: any;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: string;
    log: Log;
    fees: number;
    fees_split?: any;
    authorization: Authorization;
    customer: Customer;
    plan?: any;
    split: Split;
    order_id?: any;
    paidAt: string;
    createdAt: string;
    requested_amount: number;
    pos_transaction_data?: any;
    source?: any;
    fees_breakdown?: any;
    transaction_date: string;
    plan_object: Split;
    subaccount: Split;
}

interface Split {
}

interface Customer {
    id: number;
    first_name?: any;
    last_name?: any;
    email: string;
    customer_code: string;
    phone?: any;
    metadata?: any;
    risk_action: string;
    international_format_phone?: any;
}

interface Authorization {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    signature: string;
    account_name?: any;
}

interface Log {
    start_time: number;
    time_spent: number;
    attempts: number;
    errors: number;
    success: boolean;
    mobile: boolean;
    input: any[];
    history: History[];
}

interface History {
    type: string;
    message: string;
    time: number;
}

const r = {
    "status": true,
    "message": "Verification successful",
    "data": {
        "id": 2009945086,
        "domain": "test",
        "status": "success",
        "reference": "rd0bz6z2wu",
        "amount": 20000,
        "message": null,
        "gateway_response": "Successful",
        "paid_at": "2022-08-09T14:21:32.000Z",
        "created_at": "2022-08-09T14:20:57.000Z",
        "channel": "card",
        "currency": "NGN",
        "ip_address": "100.64.11.35",
        "metadata": "",
        "log": {
            "start_time": 1660054888,
            "time_spent": 4,
            "attempts": 1,
            "errors": 0,
            "success": true,
            "mobile": false,
            "input": [],
            "history": [
                {
                    "type": "action",
                    "message": "Attempted to pay with card",
                    "time": 3
                },
                {
                    "type": "success",
                    "message": "Successfully paid with card",
                    "time": 4
                }
            ]
        },
        "fees": 100,
        "fees_split": null,
        "authorization": {
            "authorization_code": "AUTH_ahisucjkru",
            "bin": "408408",
            "last4": "4081",
            "exp_month": "12",
            "exp_year": "2030",
            "channel": "card",
            "card_type": "visa ",
            "bank": "TEST BANK",
            "country_code": "NG",
            "brand": "visa",
            "reusable": true,
            "signature": "SIG_yEXu7dLBeqG0kU7g95Ke",
            "account_name": null
        },
        "customer": {
            "id": 89929267,
            "first_name": null,
            "last_name": null,
            "email": "hello@email.com",
            "customer_code": "CUS_i5yosncbl8h2kvc",
            "phone": null,
            "metadata": null,
            "risk_action": "default",
            "international_format_phone": null
        },
        "plan": null,
        "split": {},
        "order_id": null,
        "paidAt": "2022-08-09T14:21:32.000Z",
        "createdAt": "2022-08-09T14:20:57.000Z",
        "requested_amount": 20000,
        "pos_transaction_data": null,
        "source": null,
        "fees_breakdown": null,
        "transaction_date": "2022-08-09T14:20:57.000Z",
        "plan_object": {},
        "subaccount": {}
    }
}

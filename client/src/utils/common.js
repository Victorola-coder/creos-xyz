import { toast } from "react-toastify"
import { serverError } from "./config"

export const handleAxiosError = (e) => {
    console.log(e.data)
    if (e?.data?.message) {
        toast.error(e.data.message)
    } else {
        toast.error(serverError)
    }
}

export const checkFileSize = (file) => {
    const fsize = file.size;
    const size = Math.round(fsize / 1024 / 1024);
    if (size > 50) {
        return false;
    }
    return true;
};

export const getExtension = (fileName) => {
    return fileName.substring(fileName.lastIndexOf(".") + 1);
};

export const payWithPaystack = ({ email, amount, onSuccess, onClose }) => {
    const handler = PaystackPop.setup({
        key: `${import.meta.env.VITE_APP_PAYSTACK_API_PUBLIC_KEY}`,
        email,
        amount: amount * 100,
        onSuccess,
        onClose
    });
    handler.openIframe();
}
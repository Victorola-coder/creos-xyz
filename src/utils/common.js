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
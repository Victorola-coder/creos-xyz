import { useState } from "react";
import { Container, SEO } from "../components";
import Input from "../components/input";
import SecondaryButton from "../components/secondaryButton";
import TextArea from "../components/textarea";

export default function Contact() {

    return (
        <>
            <SEO title='Contact us' />
            <main>
                <Main />
            </main>
        </>
    )
}

const Main = () => {

    return (
        <Container>
            <div className="grid lg:grid-cols-2 gap-[20px] pt-5">
                <div>
                    <div className="max-w-[487px]">
                        <h2 className="text-[#E6EAE8] text-[20px] lg:text-[40px]">Contact us</h2>
                        <h1 className="font-extrabold text-[32px] lg:text-[72px] text-white">Get in touch</h1>
                        <p className="text-[#E6EAE8] text-[20px] lg:text-[32px]">
                            We&rsquo;d love to hear from you. Please fill out this form.
                        </p>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
            </div>
        </Container>
    )
}

const Form = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        enquiry: '',
        message: ''
    })

    const formDataHandler = (e) =>{
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const isFormDisabled =  !(formData.fullname && formData.email && formData.enquiry && formData.message)

    return (
        <form className="flex flex-col gap-[20px]">
            <fieldset>
                <label className="text-white inline-block mb-2 text-[20px] lg:text-[24px]">Full Name</label>
                <Input
                    placeholder="Full Name"
                    type="text"
                    name="fullname"
                    className="placeholder-primary rounded-[12px] text-[20px] lg:text-[24px]"
                    value={formData.fullname}
                    onChange={formDataHandler}
                />
            </fieldset>
            <fieldset>
                <label className="text-white inline-block mb-2 text-[20px] lg:text-[24px]">Email</label>
                <Input
                    placeholder="you@company.com"
                    type="email"
                    name="email"
                    className="placeholder-primary rounded-[12px] text-[20px] lg:text-[24px]"
                    value={formData.email}
                    onChange={formDataHandler}
                />
            </fieldset>
            <fieldset>
                <label className="text-white inline-block mb-2 text-[20px] lg:text-[24px]">What is your enquiry about?</label>
                <Input
                    placeholder="your enquiry"
                    type="text"
                    name="enquiry"
                    className="placeholder-primary rounded-[12px] text-[20px] lg:text-[24px]"
                    value={formData.enquiry}
                    onChange={formDataHandler}
                />
            </fieldset>
            <fieldset>
                <label className="text-white inline-block mb-2 text-[20px] lg:text-[24px]">Message</label>
                <TextArea
                    type="text"
                    name="message"
                    className="rounded-[12px] text-[20px] lg:text-[24px]"
                    value={formData.message}
                    onChange={formDataHandler}
                />
            </fieldset>
            <fieldset>
                <SecondaryButton
                    disabled={isFormDisabled}
                >
                    Send message
                </SecondaryButton>
            </fieldset>
        </form>
    )
}
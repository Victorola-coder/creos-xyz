import { useState } from "react";
import { Container, SEO } from "../components";
import Input from "../components/input";
import SecondaryButton from "../components/secondaryButton";
import Select from "../components/select";
import { nanoid } from "nanoid";

export default function Waitlist() {

    return (
        <>
            <SEO title='Join our waitlist' />
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
                    <div className="max-w-[647px]">
                        <h1 className="font-extrabold text-[32px] lg:text-[72px] text-white">Join our waitlist</h1>
                        <p className="text-[#E6EAE8] text-[20px] lg:text-[32px]">
                            Exciting things are happening at Creos, and we can&rsquo;t wait for you to be a part of it.
                            <br /> <br />
                            By signing up for our waitlist, you&rsquo;re taking the first step towards unlocking a world of innovation, collaboration, and endless possibilities.
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

    const [selectedProduct, setSelectedProduct] = useState(null)

    const formDataHandler = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const isFormDisabled = !(formData.fullname && formData.email && selectedProduct)

    const productOptions = [
        { id: nanoid(), name: 'Creos Edu' },
        { id: nanoid(), name: '2' },
        { id: nanoid(), name: '3' },
        { id: nanoid(), name: '4' },
        { id: nanoid(), name: '5' },
        { id: nanoid(), name: '6' },
        { id: nanoid(), name: '7' },
        { id: nanoid(), name: '8' },
        { id: nanoid(), name: '9' },
        { id: nanoid(), name: '10' },
        { id: nanoid(), name: '11' },
        { id: nanoid(), name: '12' },
        { id: nanoid(), name: '13' },
        { id: nanoid(), name: '14' },
        { id: nanoid(), name: '15' },
        { id: nanoid(), name: '16' },
        { id: nanoid(), name: '17' },
        { id: nanoid(), name: '18' },
        { id: nanoid(), name: '19' },
        { id: nanoid(), name: '20' },
    ]

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
                <label className="text-white inline-block mb-2 text-[20px] lg:text-[24px]">Product</label>
                <Select
                    value={selectedProduct}
                    onChange={setSelectedProduct}
                    options={productOptions}
                    selectedOption={selectedProduct}
                />
            </fieldset>
            <fieldset>
                <SecondaryButton
                    disabled={isFormDisabled}
                >
                    Join our waitlist
                </SecondaryButton>
            </fieldset>
        </form>
    )
}
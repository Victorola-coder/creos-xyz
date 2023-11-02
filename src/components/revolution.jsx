import { P } from "../utils/typography"
import Button from "./button"
import Container from "./container"
import Input from "./input"

export default function Revolution (){

    return (
        <section className="py-[30px]">
            <Container>
                <div className="w-full max-w-[1030px] mx-auto grid place-items-center">
                    <P
                        className="text-[#D9DFDD] !text-base leading-[24px] lg:!text-[32px] font-normal lg:leading-[48px]"
                    >
                        Join the Revolution
                    </P>
                    <h5 className='text-white text-center text-[20px] leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
                        Are you ready to turn your dreams into disruptions? To be part of a community where your ideas are not just valued but vital? Creos invites you to join the revolution.
                    </h5>
                    <form className="w-full max-w-[900px] mx-auto flex flex-col lg:flex-row gap-[13px] pt-5">
                        <fieldset className="flex-1">
                            <Input 
                                type="text"
                                placeholder="First name"
                            />
                        </fieldset>
                        <fieldset className="flex-1">
                            <Input 
                                type="email"
                                placeholder="Email address" 
                            />
                        </fieldset>
                        <Button className="text-white">Join our newsletter</Button>
                    </form>
                </div>
            </Container>
        </section>
    )
}
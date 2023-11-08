/* eslint-disable react/prop-types */
import Button from "../button"

export default function ProductCard({ index }) {

    switch (index) {
        case 0: {
            return (
                <div className="select-none h-max grid lg:grid-cols-2 gap-[30px] lg:gap-[63px] bg-[#F7CB9C] px-[20px] py-[30px] lg:px-[100px] lg:py-[101px] rounded-[20px] lg:rounded-[100px]">
                    <div className="flex flex-col gap-[24px]">
                        <header>
                            <h2 className="font-sat text-[#564737] lg:text-[24px] mb-[20px] ">Creos Edu and Mentors Platform</h2>
                            <h1 className="text-[28px] lg:text-[48px] leading-[42px] lg:leading-[72px] font-extrabold text-[#222222]">Empowering the Next Generation of Innovators</h1>
                        </header>
                        <p className="text-[#000000] leading-[28px] lg:leading-[43px] lg:text-[24px]">Creos Edu is where knowledge meets creativity.
                            Our platform is dedicated to providing top-notch educational resources, workshops, and courses, curated by experts from various fields. </p>
                        <div>
                            <Button className="w-[247px] border-[#DEB78C] bg-[#6F5B46] text-[#F7CB9C]">
                                Join our waitlist
                            </Button>
                        </div>
                    </div>
                    <figure className="hidden lg:flex flex-col gap-[20px]">
                        <img src='/images/product-card-img-1.svg' alt="Product Card" className="w-full" />
                    </figure>
                </div>
            )
        }
        case 1: {
            return (
                <div className="select-none grid lg:grid-cols-2 gap-[30px] lg:gap-[63px] bg-[#012B1D] px-[20px] py-[30px] lg:px-[100px] lg:py-[101px] rounded-[20px] lg:rounded-[100px]">
                    <div className="flex flex-col gap-[24px]">
                        <header>
                            <h2 className="font-sat text-[#FDEFE0] lg:text-[24px] mb-[20px] ">Creos Token</h2>
                            <h1 className="text-[28px] lg:text-[48px] leading-[42px] lg:leading-[72px] font-extrabold text-[#E6EAE8] lg:text-[#F7CB9C]">Creos Token: Your Gateway to the Future</h1>
                        </header>
                        <p className="text-[#D8D8D8] leading-[28px] lg:leading-[43px] lg:text-[24px]">Creos Token is the currency of innovation. It&rsquo;s not just a digital asset; it&rsquo;s a symbol of your commitment to the future. With Creos Token, you gain access to exclusive events, premium educational content, and unique opportunities within the Creos community. It&rsquo;s your passport to a world where innovation knows no bounds.</p>
                        <div>
                            <Button className="w-[247px] border-[#C6A27D] bg-[#F7CB9C] text-[#564737]">
                                Join our waitlist
                            </Button>
                        </div>
                    </div>
                    <figure className="hidden lg:flex flex-col gap-[20px]">
                        <img src='/images/product-card-img-2.svg' alt="Product Card" className="w-full" />
                    </figure>
                </div>
            )
        }
        case 2: {
            return (
                <div className="select-none grid lg:grid-cols-2 gap-[30px] lg:gap-[63px] bg-[#564737] px-[20px] py-[30px] lg:px-[100px] lg:py-[101px] rounded-[20px] lg:rounded-[100px]">
                    <div className="flex flex-col gap-[24px]">
                        <header>
                            <h2 className="font-sat text-[#FDEFE0] lg:text-[24px] mb-[20px] ">Creos Lab</h2>
                            <h1 className="text-[28px] lg:text-[48px] leading-[42px] lg:leading-[72px] font-extrabold text-[#E6EAE8] lg:text-[#F7CB9C]">Bridging the Gap Between Talent and Opportunities</h1>
                        </header>
                        <p className="text-[#D8D8D8] leading-[28px] lg:leading-[43px] lg:text-[24px]">Creos Lab opens doors to a world of highly paid gigs and AI jobs. Whether you&rsquo;re an AI expert, a data scientist, or a tech enthusiast, Creos Lab connects you with businesses and projects that value your skills. Find meaningful, high-paying gigs that not only challenge your expertise but also contribute to groundbreaking innovations.</p>
                        <div>
                            <Button className="w-[247px] border-[#C6A27D] bg-[#F7CB9C] text-[#564737]">
                                Join our waitlist
                            </Button>
                        </div>
                    </div>
                    <figure className="hidden lg:flex flex-col gap-[20px]">
                        <img src='/images/product-card-img-3.svg' alt="Product Card" className="w-full" />
                        <figcaption className="bg-white rounded-[20px] p-[20px] text-[20px] leading-[30px] text-[#564737]">
                            At Creos, we don&rsquo;t just innovate; we inspire. Join us on this journey of creativity, collaboration, and disruption. Together, let&rsquo;s shape a future where innovation knows no limits. Welcome to Creos, where your ideas find their wings and innovation becomes a legacy.
                        </figcaption>
                    </figure>
                </div>
            )
        }
        default: {
            return Error("Product Card Index must be between range 0-2")
        }
    }
}
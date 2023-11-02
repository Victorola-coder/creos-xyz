/* eslint-disable react/prop-types */
export default function Input(props) {

    const { className, ...prop } = props

    return (
        <input
            className={`${className} w-full rounded-[8px] h-[64px] bg-[#E6EAE8] px-[20px] text-[#012B1D]`}
            {...prop} 
        />
    )
}
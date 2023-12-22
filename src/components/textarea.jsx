/* eslint-disable react/prop-types */

export default function TextArea(props){

    const { className, row, ...prop } = props

    return (
        <textarea
            className={`${className} h-[200px] py-2 w-full rounded-[8px] h-[64px] bg-[#E6EAE8] px-[20px] text-primary`}
            rows={row ?? 5}
            {...prop} 
        />
    )
}
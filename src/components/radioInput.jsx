/* eslint-disable react/prop-types */
export default function RadioInput(props) {

    const { checked, onChecked, className } = props

    return (
        <div
            onClick={onChecked}
            className={`w-[16px] shrink-0 h-[16px] rounded-[100%] bg-primary grid place-items-center border-[1px] border-primary ${className ?? ''}`}>
            {
                checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-white">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                        </path>
                    </svg>
                )
            }
        </div>
    )
}
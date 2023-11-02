/* eslint-disable react/prop-types */

export default function Box({ className, children }){

    return (
        <div className={`px-5 py-[30px] lg:p-[100px] ${className ?? ''}`}>{children}</div>
    )
}
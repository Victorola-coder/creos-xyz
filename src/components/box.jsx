/* eslint-disable react/prop-types */

export default function Box({ className, children }){

    return (
        <div className={` ${className ?? ''} px-5 py-[30px] lg:p-[100px]`}>{children}</div>
    )
}
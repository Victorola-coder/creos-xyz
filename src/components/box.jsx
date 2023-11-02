/* eslint-disable react/prop-types */

export default function Box({ className, children }){

    return (
        <div className={`p-5 lg:p-[100px] ${className ?? ''}`}>{children}</div>
    )
}
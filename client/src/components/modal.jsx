import React, { useState } from 'react';
import Button from './button';

const Modal = ({ isOpen, title, buttonText, onClickButton, onClose, children }) => {
    const modalStyles = isOpen ? 'block' : 'hidden';

    return (
        <div className={`fixed inset-0 ${modalStyles} flex items-center transition-all duration-300 justify-center z-50`}>
            <div className="modal-overlay bg-black opacity-70 h-screen w-screen fixed z-10 cursor-pointer" onClick={onClose}></div>
            <div className="modal-container bg-primary rounded-xl text-white md:min-w-[500px] md:max-w-xl mx-auto shadow-lg z-50 overflow-y-auto">
                <div className="relative rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-5 rounded-t">
                        <h3 className="text-xl font-medium ">
                            {title}
                        </h3>
                        <button onClick={onClose} type="button" className="text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="top-left-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4">
                        {children}
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex pt-0 px-4 pb-8">
                        <Button className={'bg-creos border-none !text-lg'} onClick={onClickButton} theme='primary'>{buttonText ? buttonText : 'Submit'}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

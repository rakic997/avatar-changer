import React from 'react'

interface IModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    close: () => void;
}

const Modal = ({ children, isOpen, close }: IModalProps) => {

    if (!isOpen) {
        return null
    }

    return (
        <div className='overlay' onClick={() => close()}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal
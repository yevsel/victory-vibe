import React from 'react'

function Modal({setShowModal,modalData}) {
    return (
        <div onClick={()=>{
            setShowModal(false)
        }} className='modal-container'>
            <div className='modal-body'>
                <h2>{modalData.title}</h2>
                <h3>{modalData.intro}</h3>
                <div className='mt-10 space-y-3'>
                    {modalData.body.map(item=><p key={item.id}>{item}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Modal
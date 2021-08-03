import React from 'react'
import ReactModal from 'react-modal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
export function Modal ({ isOpen, onClose, ...props }) {
  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      ariaHideApp={false}
    >
      {props.children}
    </ReactModal>
  )
}

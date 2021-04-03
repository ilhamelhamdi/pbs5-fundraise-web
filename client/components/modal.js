import React, { useEffect } from 'react'

const Modal = React.forwardRef((props, ref) => {

  return (
    <div className="w-screen h-screen fixed">
      <div className="w-full h-full fixed top-0 left-0 z-40 bg-black bg-opacity-40"></div>
      <div ref={ref} className="modal container w-screen max-w-md h-max left-1/2 top-1/2 z-50 fixed bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6">
        {props.children}
      </div>
    </div>
  )
})

export default Modal
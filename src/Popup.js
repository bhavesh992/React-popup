import React, { useCallback } from 'react'

import './Popup.css'
const Popup = (props) => {
    const { children, trigger, setTrigger } = props;

    const closePopup = useCallback(() => {
        setTrigger(false);
    }, [])
    return trigger ? (<div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={closePopup}>
                X
            </button>
            {children}
        </div>
    </div>) : null

}

export default Popup;
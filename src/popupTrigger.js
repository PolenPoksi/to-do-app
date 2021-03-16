import React from 'react'
import { usePopup } from './popup';

const PopupTrigger = () => {
    const { triggerPopup } = usePopup();
}

return (

    <button onClick={() => triggerPopup('popup triggered')}>
        Trigger Popup 
    </button>
);

export default PopupTrigger
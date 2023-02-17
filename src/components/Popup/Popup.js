import { useState } from "react";

function Popup(props) {
  const [popupClass, setPopupClass] = useState('');

  function handleEnter() {
    setPopupClass('popup_hover')
  }

  function handleLeave() {
    setPopupClass('')
  }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={props.closePopup} className={props.isVisible ? `popup ${popupClass}` : 'visually-hidden'}>
      <div onMouseLeave={handleEnter} onMouseEnter={handleLeave} onClick={(evt) => { evt.stopPropagation(); }} className={`popup__container popup__container_theme_${props.theme}`}>
        {props.children}
      </div>
    </div>
  )
}
export default Popup;
import { useState } from "react";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

function Welcome(props) {
  const [btnClass, setBtnClass] = useState('leave');
  function handleEnter() {
    setBtnClass('enter');
  }
  function handleLeave() {
    setBtnClass('leave');
  }
  return (
    <section id="start" className={`welcome welcome_theme_${props.theme}`}>
      <div className="content welcome__container">
        <h1 className="welcome__title">Герасимова Анастасия</h1>
        <p className="welcome__subtitle">Фронтенд-разработчик, 24&nbsp;года</p>
        <button className={`welcome__btn welcome__btn_theme_${props.theme}`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}><div className={`welcome__btn-animation welcome__btn-animation_theme_${props.theme} ${btnClass}`}></div><a href="#portfolio" className={`link welcome__link welcome__link_theme_${props.theme} ${btnClass}`}>Посмотреть работы &#8594;</a></button>
      </div>
      <BackgroundAnimation theme={props.theme} />
    </section>
  )
}

export default Welcome;
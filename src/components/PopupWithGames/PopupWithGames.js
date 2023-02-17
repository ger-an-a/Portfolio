import Popup from '../Popup/Popup';
import CatchCatImg from '../../images/catch-cat.PNG'

function PopupWithGames(props) {

  return (
    <Popup closePopup={props.closePopup} isVisible={props.isVisible} theme={props.theme} children={
      <>
        <h2 className={`popup__title popup__title_theme_${props.theme}`}>Поймай котика</h2>
        <img className="popup__img" src={CatchCatImg} alt={`Изображение игры "Поймай котика"`} />
        <p className="popup__about">Правила игры: необходимо поймать как можно больше котиков за 45 секунд. С каждой поимкой котик становится быстрее!</p>
        <button onClick={props.onCatchCatClick} className={`link popup__link popup__link_theme_${props.theme} popup__link_type_project`} target="_blank" rel="noreferrer">Начать игру</button>
      </>
    } />
  )
}
export default PopupWithGames;
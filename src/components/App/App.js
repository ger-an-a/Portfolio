
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import PopupWithCard from '../PopupWithCard/PopupWithCard';
import PopupWithGames from '../PopupWithGames/PopupWithGames';

function App() {
  const [theme, setTheme] = useState('dark');
  const [cardData, setCardData] = useState({});
  const [cardPopupIsVisible, setCardPopupIsVisible] = useState(false);
  const [gamesPopupIsVisible, setGamesPopupIsVisible] = useState(false);
  const [skillsTitle, setSkillsTitle] = useState('Навыки и инструменты');
  const [gameIsOpen, setGameIsOpen] = useState(false);

  function changeTheme() {
    if (theme === 'dark') setTheme('light'); else setTheme('dark');
  }

  function onCardClick(data) {
    setCardData(data);
    setCardPopupIsVisible(true);
  }

  function closeAllPopup() {
    setCardPopupIsVisible(false);
    setGamesPopupIsVisible(false);
  }

  function onGameBtnClick() {
    setGamesPopupIsVisible(true);
  }

  function onExitBtnClick() {
    setGameIsOpen(false);
    setSkillsTitle('Навыки и инструменты');
  }

  function openGame() {
    document.getElementById('skills').scrollIntoView();
    setGameIsOpen(true);
  }

  function onFindCoupleClick() {
    closeAllPopup();
    setSkillsTitle('Найди пару!');
    openGame();
  }

  function onCatchCatClick() {
    closeAllPopup();
    setSkillsTitle('Поймай котика!');
    openGame();
  }

  return (
    <div className={`page page_theme_${theme}`}>
      <BrowserRouter>
        <Header theme={theme} onBtnClick={changeTheme} />
        <Main onExitBtnClick={onExitBtnClick} gameIsOpen={gameIsOpen} title={skillsTitle} onGameBtnClick={onGameBtnClick} onCardClick={onCardClick} theme={theme} />
        <Footer />
        <PopupWithGames onFindCoupleClick={onFindCoupleClick} onCatchCatClick={onCatchCatClick} closePopup={closeAllPopup} isVisible={gamesPopupIsVisible} theme={theme} />
        <PopupWithCard closePopup={closeAllPopup} isVisible={cardPopupIsVisible} theme={theme} cardData={cardData} />
      </BrowserRouter>
    </div>
  )
}

export default App;


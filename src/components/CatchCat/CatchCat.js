import React, { useState } from 'react';

import catImg from '../../images/cat.png'
import Result from '../Result/Result';

function CatchCat(props) {
  const [list, setList] = useState([true, true, true, true, true, true, true, true, true, true, true, true]);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(1500);
  const [isStarted, setIsStarted] = useState(false);
  const [startBtnClass, setStartBtnClass] = useState('catch-cat__start-btn');
  const [startBtnText, setStartBtnText] = useState('Старт');
  const [leftTime, setLeftTime] = useState(45);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [result, setResult] = useState(0);

  function handleCatchCat() {
    setScore(score + 1);
    setList([true, true, true, true, true, true, true, true, true, true, true, true]);
    if (speed >= 500) setSpeed(speed - 50);
  }

  function startGame() {
    setIsStarted(true);
    setStartBtnClass('catch-cat__btn');
    setStartBtnText('Стоп');
    setLeftTime(45);
    setIsResultVisible(false);
  }

  function stopGame() {
    setIsStarted(false);
    setStartBtnClass('catch-cat__start-btn');
    setStartBtnText('Старт');
    setList([true, true, true, true, true, true, true, true, true, true, true, true]);
    setLeftTime(45);
    setSpeed(1500);
    setResult(score);
    setIsResultVisible(true);
    setScore(0);
  }

  function onStartBtnClick() {
    isStarted ? stopGame() : startGame();
  }

  React.useEffect(() => {
  }, [score]);

  React.useEffect(() => {
    if (leftTime === 0) {
      stopGame();
    }
  }, [leftTime]);

  React.useEffect(() => {
    if (isStarted) {
      let i = Math.floor(Math.random() * 12);
      setList(list.map((item, index) => index === i ? item = false : true));
      const interval = setInterval(() => {
        i = Math.floor(Math.random() * 12);
        setList(list.map((item, index) => index === i ? item = false : true));
      }, speed);
      return () => clearInterval(interval);
    }
  }, [isStarted, speed]);

  React.useEffect(() => {
    if (isStarted) {
      let time = 0;
      const timer = setInterval(() => {
        setLeftTime(leftTime - time);
        time = time + 1;
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStarted]);

  return (
    <ul className="catch-cat">
      <li>
        <button onClick={onStartBtnClick} className={`link catch-cat__list-item ${startBtnClass}`}>{startBtnText}</button>
      </li>
      <li>
        <p className={`catch-cat__list-item`}>Счёт: {score}</p>
      </li>
      <li>
        <p className={`catch-cat__list-item`}>{leftTime}</p>
      </li>
      <li>
        <button onClick={props.onExitBtnClick} className={`link catch-cat__list-item catch-cat__btn`}>Выйти</button>
      </li>
      {
        list.map((item, index) => {
          return (
            <li className="catch-cat__list-item" key={'CatchCat' + index.toString()}>
              <button disabled={item} onClick={handleCatchCat} className="catch-cat__list-item">
                {item ? '' : <img className="link catch-cat__img" src={catImg} alt="Кот!" />}
              </button>
            </li>)
        })
      }
      <Result isVisible={isResultVisible} img={catImg} alt="Кот!" text={`котик пойман ${result} раз`} />
    </ul>
  )
}

export default CatchCat;
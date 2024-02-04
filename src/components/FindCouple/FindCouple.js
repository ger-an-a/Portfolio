import React, { useState } from 'react';

import catImg from '../../images/cat.png'
import Result from '../Result/Result';

function FindCouple(props) {
  const cards = 6; //количество разных карточек

  const [count, setCount] = useState(12); // количество карточек
  const emptyList = Array(count).fill(false);

  const [map, setMap] = useState(emptyList); // "карта" поля
  const [list, setList] = useState(emptyList); // открытое поле
  const [score, setScore] = useState(0); // текущий счет
  const [isStarted, setIsStarted] = useState(false); //флаг начала игры
  const [startBtnClass, setStartBtnClass] = useState('catch-cat__start-btn'); //класс кнопки начала/остановки игры
  const [startBtnText, setStartBtnText] = useState('Старт'); //текст кнопки начала/остановки игры
  const [gameTimer, setGameTimer] = useState(0); //таймер
  const [isResultVisible, setIsResultVisible] = useState(false); //флаг видимости результата
  const [result, setResult] = useState(0); //результат
  const [record, setRecord] = useState(0); //рекорд

  function handleCatchCat() {

  }

  function startGame() {
    //запуск игры
    setIsStarted(true);
    setStartBtnClass('catch-cat__btn');
    setStartBtnText('Стоп');
    setGameTimer(0);
    setIsResultVisible(false);
  }

  function stopGame() {
    //остарновка игры и запись рекорда в локальное хранилище
    setIsStarted(false);
    setStartBtnClass('catch-cat__start-btn');
    setStartBtnText('Старт');
    setList(emptyList);

    setResult(score);
    setIsResultVisible(true);
    if (score >= record) {
      localStorage.setItem('CatCatchRecord', score);
      setRecord(score)
    }
    setScore(0);
  }

  function onStartBtnClick() {
    isStarted ? stopGame() : startGame();
  }

  React.useEffect(() => {
    //при монтировании достаем из локального хранилища рекорд или записываем туда 0, если его нет
    if (localStorage.getItem('FindCoupleRecord')) {
      setRecord(localStorage.getItem('FindCoupleRecord'));
    } else localStorage.setItem('FindCoupleRecord', 0);

    // //заполняем "карту" парами
    // while () {
    //   map.
    // }

  }, []);

  React.useEffect(() => {
    //отслеживаем счет: когда найдены все пары, останавливаем игру
    if (score === count) {
      stopGame();
    }
  }, [score]);

  // React.useEffect(() => {
  //   //при старте игры задаем случайное положение котику и меняем его через интервал, хранящийся в speed
  //   //при поимке котика, т.е. при изменении интервала, удаляем старый и задаем новый.

  //   function setRandomPlace() {
  //     //задает случайное положение котику
  //     let i = Math.floor(Math.random() * 12);
  //     setList(list.map((item, index) => index === i ? item = false : true));
  //   }

  //   if (isStarted) {
  //     setRandomPlace()
  //     const interval = setInterval(() => {
  //       setRandomPlace()
  //     }, speed);
  //     return () => clearInterval(interval);
  //   }
  // }, [isStarted, speed]);

  React.useEffect(() => {
    //запускаем таймер при старте игры
    if (isStarted) {
      let time = 1;
      const timer = setInterval(() => {
        setGameTimer(gameTimer + time);
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
        <p className={`catch-cat__list-item`}>{gameTimer}</p>
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
      <Result isVisible={isResultVisible} img={catImg} alt="Кот!" record={record} text={`котик пойман ${result} раз(а)`} />
    </ul>
  )
}

export default FindCouple;
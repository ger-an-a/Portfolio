function Result(props) {
  return (
    <div className={props.isVisible ? 'result' : 'visually-hidden'}>
      <img className="result__img" src={props.img} alt={props.alt} />
      <p className="result__text">Результат: {props.text}</p>
    </div>
  )
}

export default Result;
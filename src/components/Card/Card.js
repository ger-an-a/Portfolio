function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.cardData);
  }

  return (
    <li onClick={handleCardClick} className={`card card_project_${props.project}`}>
      <h3 className="card__title">{props.title}</h3>
    </li>
  )
}

export default Card;
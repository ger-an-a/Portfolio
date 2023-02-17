function List(props) {
  return (
    <section id={props.id} className={`list ${props.className}`}>
      <div className="content list__container">
        <h2 className="list__title">{props.title}</h2>
        <ul className="list__list">
          {
            props.list.map((item, index) => {
              return (
                <li key={`${props.title}` + index.toString()} className="list__list-item">
                  <h3 className="list__position">{item.title}<span className="list__company">{item.subtitle}</span></h3>
                  <p className="list__period">{item.date}</p>
                  <p className="list__duties">{item.note}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default List;
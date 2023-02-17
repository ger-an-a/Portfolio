import Card from "../Card/Card";

import projects from "../../utils/projects";

function Portfolio(props) {

  return (
    <section id="portfolio" className={`portfolio portfolio_theme_${props.theme}`}>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        {
          projects.map((item, index) => {
            return (
              <Card key={`${item.title}` + index.toString()} onCardClick={props.onCardClick} cardData={item} project={item.project} title={item.title} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default Portfolio;
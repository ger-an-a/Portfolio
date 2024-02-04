import CatchCat from "../CatchCat/CatchCat";
import skillsList from "../../utils/skillsLists";
import FindCouple from "../FindCouple/FindCouple";

function Skills(props) {

  return (
    <section id="skills" className={`skills skills_theme_${props.theme}`}>
      <div className="content skills__container">
        <h2 className="skills__title">{props.title}</h2>
        {
          !props.gameIsOpen ? (
            <ul className="skills__list">
              <li>
                <button onClick={props.onGameBtnClick} className={`link skills__list-item skills__list-item_game-btn`}>Играть!</button>
              </li>
              {
                skillsList.map((item, index) => {
                  return (
                    <li key={`${props.title}` + index.toString()}>
                      <p className={`skills__list-item skills__list-item_theme_${props.theme}`}>{item}</p>
                    </li>)
                })
              }
            </ul>) : <CatchCat onExitBtnClick={props.onExitBtnClick} />
        }
        {/* <FindCouple /> */}
      </div>
    </section>
  )
}

export default Skills;
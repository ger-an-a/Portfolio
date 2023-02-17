import Contacts from "../Contacts/Contacts";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Welcome from "../Welcome/Welcome";

function Main(props) {

  return (
    <main className="main">
      <Welcome theme={props.theme} />
      <Skills gameIsOpen={props.gameIsOpen} onExitBtnClick={props.onExitBtnClick} title={props.title} onGameBtnClick={props.onGameBtnClick} theme={props.theme} />
      <Experience />
      <Education />
      <Portfolio onCardClick={props.onCardClick} theme={props.theme} />
      <Contacts theme={props.theme} />
    </main>
  )
}
export default Main;
function Navbar(props) {

  return (
    <nav className="navbar">
      <a href="#" className={`link navbar__link navbar__link_theme_${props.theme}`}>В начало</a>
      <a href="#skills" className={`link navbar__link navbar__link_theme_${props.theme}`}>Навыки</a>
      <a href="#experience" className={`link navbar__link navbar__link_theme_${props.theme}`}>Опыт работы</a>
      <a href="#education" className={`link navbar__link navbar__link_theme_${props.theme}`}>Образование</a>
      <a href="#portfolio" className={`link navbar__link navbar__link_theme_${props.theme}`}>Портфолио</a>
      <a href="#contacts" className={`link navbar__link navbar__link_theme_${props.theme}`}>Контакты</a>
    </nav>
  );
}

export default Navbar;
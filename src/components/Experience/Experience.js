import List from "../List/List";

function Experience() {
  return (
    <List id="experience" className="experience" title="Опыт работы" list={[{
      title: 'Инженер-разработчик. ',
      subtitle: 'ООО "Экзамен-Технолаб".', date: 'Март 2019 — по настоящее время',
      note: 'С августа 2022: разработка адаптивного сайта компании, включающего в себя информацию о компании, каталог товаров, карточки товаров.'
    }]} />
  )
}

export default Experience;
import List from "../List/List";

function Experience() {
  return (
    <List id="experience" className="experience" title="Опыт работы" list={[{
      title: 'Инженер-разработчик. ',
      subtitle: 'ООО "Экзамен-Технолаб".', date: 'Август 2022 — по настоящее время',
      note: `Разработка сайта компании с админской частью, дающей возможность редактировать, добавлять и удалять данные на сайте. Имеется каталог и карточки товаров, фильтрация в разделе "обучение". Используемый стек: CSS, CSS Modules, HTML, JS, React + MobX, php+mySQL, git`
    },
    {
      title: 'Самостоятельная разработка. ',
      subtitle: '(В чем еще есть опыт)', date: '2022 — по настоящее время',
      note: `Адаптивная верстка HTML, CSS (flex, grid), CSS Modules, БЭМ; SPA на чистом JS и на React
      (и функциональные, и классовые компоненты, состояние в React Context и в mobX);
      SPA на TypeScript + React; написание REST API на php+MySQL;
      работа с npm, с git через консоль; работа с наставником и прохождение код-ревью;
      настройка облачного сервера (PM2, nginx); REST API на node.js + express + mongoDB;
      знакома с webpack, Vite, CRA, PostgreSQL, jQuery.`
    },
    ]} />
  )
}

export default Experience;
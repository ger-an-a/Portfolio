import technolabNew from '../images/projects/technolab-new.PNG';
import technolab from '../images/projects/technolab.PNG';
import diploma from '../images/projects/diploma.PNG';
import mestoFull from '../images/projects/mesto-full.PNG';
import mestoAuth from '../images/projects/mesto-auth.PNG';
import mesto from '../images/projects/mesto.PNG';
import russianTravel from '../images/projects/russian-travel.PNG';
import animation from '../images/projects/animation.PNG';
import rogue from '../images/projects/rogue.PNG';
import catGame from '../images/projects/cat-game.PNG';


const projects = [
  {
    img: technolabNew,
    project: 'technolab-new',
    title: 'Сайт компании "Экзамен-Технолаб".',
    about: 'Сайт компании по новому дизайну. Имеется каталог и карточки товаров, фильтрация в каталоге и раздел "обучение". Сайт еще в разработке.',
    link: 'https://examen-technolab.ru/main',
    repository: 'https://github.com/ger-an-a/technolab-new',
    stack: 'HTML, CSS, JavaScript, React',
  },
  {
    img: rogue,
    project: 'rogue',
    title: 'Игра "Рогалик" (тестовое задание).',
    about: 'Карта и расположение всех элементов генерируется случайным образом. Главный герой перемещается на AWSD, атакует всех противников вокруг на пробел. Противники преследуют героя после обнаружения.',
    link: 'https://ger-an-a.github.io/rogue/',
    repository: 'https://github.com/ger-an-a/rogue',
    stack: 'JavaScript, jQuery',
  },
  {
    img: catGame,
    project: 'cat-game',
    title: 'Игра "Поймай котика".',
    about: 'Необходимо за ограниченное время поймать как можно больше котиков. Лучший результат сохраняется в localStorage',
    link: '#skills',
    target: '_self',
    repository: 'https://github.com/ger-an-a/portfolio',
    stack: 'HTML, CSS, React',
  },
  {
    img: diploma,
    project: 'diploma',
    title: 'Дипломный проект. Сервис поиска фильмов.',
    about: 'Данный сервис позволяет искать и сохранять фильмы в свой аккаунт. Имеется фильтрация и сохранение параметров последнего поиска, валидация всех форм. Для регистрации, авторизации и изменения данных пользователя был написан API.',
    link: 'https://movies-ger.nomoredomains.club/#techs',
    repository: 'https://github.com/ger-an-a/movies-explorer-frontend',
    stack: 'HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB',
  },
  {
    img: technolab,
    project: 'technolab',
    title: 'Сайт компании "Экзамен-Технолаб". Старый.',
    about: 'Сайт свёрстан по макетам дизайнера. Главная страница интерактивная, имеется каталог и карточки товаров. Это старая версия, размещенная на gh-pages, поэтому невозможен роутинг через адресную строку. При переходе по ссылке откроется пустая страница с меню. Необходимо кликнуть пункт меню "главная" для просмотра сайта.',
    link: 'https://ger-an-a.github.io/Technolab/',
    repository: 'https://github.com/ger-an-a/Technolab',
    stack: 'HTML, CSS, JavaScript, React',
  },
  {
    img: mestoFull,
    project: 'mesto-full',
    title: 'Учебный проект mesto. Фронтенд и бэкенд.',
    about: 'Приложение имеет следующие возможности: авторизация и регистрация пользователей, добавление и удаление карточек и лайков, изменение данных пользователя. Для работы приложения был написан API',
    link: 'https://mesto-ger.nomoredomains.club/',
    repository: 'https://github.com/ger-an-a/react-mesto-api-full',
    stack: 'HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB',
  },
  {
    img: mestoAuth,
    project: 'mesto-auth',
    title: 'Учебный проект mesto. Аутентификация. React.',
    about: 'Приложение имеет следующие возможности: авторизация и регистрация пользователей, добавление и удаление карточек и лайков, изменение данных пользователя. Для работы приложения был использован сторонний API',
    link: 'http://ger-an-a.github.io/react-mesto-auth/',
    repository: 'https://github.com/ger-an-a/react-mesto-auth#посмотреть-здесь',
    stack: 'HTML, CSS, JavaScript, React',
  },
  {
    img: mesto,
    project: 'mesto',
    title: 'Учебный проект mesto. JavaScript.',
    about: 'Приложение имеет следующие возможности: добавление и удаление карточек и лайков, изменение данных пользователя.',
    link: 'https://ger-an-a.github.io/mesto/',
    repository: 'https://github.com/ger-an-a/mesto',
    stack: 'HTML, CSS, JavaScript',
  },
  {
    img: russianTravel,
    project: 'russian-travel',
    title: 'Учебный проект. Адаптивная вёрстка.',
    about: 'Адаптивный сайт с использованием flex и grid.',
    link: 'https://ger-an-a.github.io/russian-travel/',
    repository: 'https://github.com/ger-an-a/russian-travel',
    stack: 'HTML, CSS',
  },
  {
    img: animation,
    project: 'animation',
    title: 'Учебный проект. CSS анимации.',
    about: 'Сайт с простыми анимациями.',
    link: 'https://ger-an-a.github.io/how-to-learn/',
    repository: 'https://github.com/ger-an-a/how-to-learn',
    stack: 'HTML, CSS',
  },
]

export default projects;
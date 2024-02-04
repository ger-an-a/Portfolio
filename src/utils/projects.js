import technolabNew from '../images/projects/technolab-new.PNG';
import diploma from '../images/projects/diploma.PNG';
import mestoFull from '../images/projects/mesto-full.PNG';
import mestoAuth from '../images/projects/mesto-auth.PNG';
import mesto from '../images/projects/mesto.PNG';
import russianTravel from '../images/projects/russian-travel.PNG';
import animation from '../images/projects/animation.PNG';
import rogue from '../images/projects/rogue.PNG';
import catGame from '../images/projects/cat-game.PNG';
import shorter from '../images/projects/shorter.PNG';
import films from '../images/projects/films.PNG';
import cats from '../images/projects/cats.PNG';


const projects = [
  {
    img: technolabNew,
    project: 'technolab-new',
    title: 'Сайт компании "Экзамен-Технолаб".',
    about: 'Имеется каталог и карточки товаров, фильтрация в разделе "обучение", админка с возможностью добавлять/удалять/редактировать карточки товаров. Сайт еще в разработке. Планируется доработать админскую часть, добавить больше возможностей по управлению контентом.',
    link: 'https://examen-technolab.ru/main',
    repository: 'https://github.com/Examen-Technolab/technolab/',
    stack: 'HTML, CSS, JavaScript, React + MobX, PHP, MySQL',
  }, {
    img: cats,
    project: 'cats',
    title: '"Кошачий пинтерест" (тестовое задание).',
    about: 'Галлерея из котиков с API https://thecatapi.com с бесконечной прокруткой. Загрузка происходит по 15 карточек, карточку можно добавить/удалить из избранных. Избранные карточки находятся во вкладке "любимые котики" и сохраняются в localStorage.',
    link: 'https://ger-an-a.github.io/VK-frontend-challenge/',
    repository: 'https://github.com/ger-an-a/VK-frontend-challenge',
    stack: 'React, TypeScript, Vite',
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
    img: shorter,
    project: 'shorter',
    title: 'Cервис для сокращения URL (Тестовое задание).',
    about: 'С помощью данного сервиса можно сгенерировать короткое представление заданного URL, создать кастомную ссылку, перейти по сохраненному ранее короткому представлению на соответствующий исходный URL',
    link: 'http://f0874589.xsph.ru/frontend/',
    repository: 'https://github.com/ger-an-a/url-short',
    stack: 'HTML, CSS, JavaScript, PHP, MySQL',
  },
  {
    img: films,
    project: 'films',
    title: 'Простой агрегатор фильмов (Тестовое задание).',
    about: 'Загружает фильмы с kinopoiskapiunofficial.tech в базу, есть возможность добавить свои фильм и получить N фильмов, отсортированных по имени, с пагинацией.',
    link: '',
    repository: 'https://github.com/ger-an-a/films',
    stack: 'PHP, MySQL',
  },
  {
    img: catGame,
    project: 'cat-game',
    title: 'Игра "Поймай котика".',
    about: 'Необходимо за ограниченное время поймать как можно больше котиков. Лучший результат сохраняется в localStorage',
    link: '#skills',
    target: '_self',
    repository: 'https://github.com/ger-an-a/portfolio/tree/main/src/components/CatchCat',
    stack: 'HTML, CSS, React',
  },
  {
    img: diploma,
    project: 'diploma',
    title: 'Дипломный проект. Сервис поиска фильмов.',
    about: 'Данный сервис позволяет искать и сохранять фильмы в свой аккаунт. Имеется фильтрация и сохранение параметров последнего поиска, валидация всех форм. Для регистрации, авторизации и изменения данных пользователя был написан API. На данный момент сервис не размещен, но можно посмотреть репозиторий.',
    link: '',
    repository: 'https://github.com/ger-an-a/movies-explorer-frontend',
    stack: 'HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB',
  },
  {
    img: mestoFull,
    project: 'mesto-full',
    title: 'Учебный проект mesto. Фронтенд и бэкенд.',
    about: 'Приложение имеет следующие возможности: авторизация и регистрация пользователей, добавление и удаление карточек и лайков, изменение данных пользователя. Для работы приложения был написан API. На данный момент сервис не размещен, но можно посмотреть репозиторий',
    link: '',
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
  // {
  //   img: mesto,
  //   project: 'mesto',
  //   title: 'Учебный проект mesto. JavaScript.',
  //   about: 'Приложение имеет следующие возможности: добавление и удаление карточек и лайков, изменение данных пользователя.',
  //   link: 'https://ger-an-a.github.io/mesto/',
  //   repository: 'https://github.com/ger-an-a/mesto',
  //   stack: 'HTML, CSS, JavaScript',
  // },
  // {
  //   img: russianTravel,
  //   project: 'russian-travel',
  //   title: 'Учебный проект. Адаптивная вёрстка.',
  //   about: 'Адаптивный сайт с использованием flex и grid.',
  //   link: 'https://ger-an-a.github.io/russian-travel/',
  //   repository: 'https://github.com/ger-an-a/russian-travel',
  //   stack: 'HTML, CSS',
  // },
  // {
  //   img: animation,
  //   project: 'animation',
  //   title: 'Учебный проект. CSS анимации.',
  //   about: 'Сайт с простыми анимациями.',
  //   link: 'https://ger-an-a.github.io/how-to-learn/',
  //   repository: 'https://github.com/ger-an-a/how-to-learn',
  //   stack: 'HTML, CSS',
  // },
]

export default projects;
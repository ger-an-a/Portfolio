import ContactLink from "../ContactLink/ContactLink";

function Contacts() {
  return (
    <section id="contacts" className={`content contacts`}>
      <h2 className="contacts__title">Контакты</h2>
      <ul className="contacts__list">
        <li>
          <ContactLink link="mailto:ger.an.a@yandex.ru" text="E-mail: ger.an.a@yandex.ru" type="email" />
        </li>
        <li>
          <ContactLink link="https://github.com/ger-an-a/" text="Ссылка на github" type="github" />
        </li>
        <li>
          <ContactLink link="https://hh.ru/resume/7be9cb9bff086977d80039ed1f77663947416e" text="Ссылка на резюме" type="resume" />
        </li>
        <li>
          <ContactLink link="https://t.me/cya_nastasia" text="Telegram" type="telegram" />
        </li>
      </ul>
    </section>
  )
}

export default Contacts;
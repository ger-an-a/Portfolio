import List from "../List/List";

function Education() {
  return (
    <List id="education" title="Образование" list={
      [{
        title: 'Мехатроника и робототехника. ',
        subtitle: 'МГТУ им.Н.Э.Баумана', date: '2020г.',
        note: 'Диплом о высшем образовании. (Бакалавр).'
      },
      {
        title: 'Веб-разработчик. ',
        subtitle: 'АНО ДПО «Образовательные технологии Яндекса»', date: '2023г.',
        note: 'Диплом о профессиональной переподготовке.'
      }]} />
  )
}

export default Education;
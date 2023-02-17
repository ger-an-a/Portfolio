function ContactLink(props) {
  return (
    <a className={`link contact-link contact-link_type_${props.type}`} href={props.link} target="_blank" rel="noreferrer">
      <p className="contact-link__caption">{props.text}</p>
    </a>
  )
}

export default ContactLink;
function LinksContainer() {
    const links = [
      ['Github', 'http://github.com/hamdi4-beep'],
      ['Frontend Mentor', 'https://www.frontendmentor.io/profile/hamdi4-beep'],
      ['LinkedIn', 'https://www.linkedin.com/in/hamdi-kamel-bab017b8/'],
      ['Twitter', 'https://twitter.com/Hamdi33727935'],
      ['Instagram', 'https://www.instagram.com/hamdi_beep4/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr']
    ]

    links.map(([social, link]) => console.log(social, link))

    return (
      <div className="profile-links">
        {links.map(([social, link], i) => (
          <button key={i}>
            <a href={link}>{social}</a>
          </button>
        ))}
      </div>
    )
  }

  export default LinksContainer
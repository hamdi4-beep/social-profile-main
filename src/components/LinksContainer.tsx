function LinksContainer() {
    const links = [
      ['GitHub', 'http://github.com/hamdi4-beep'],
      ['Frontend Mentor', 'https://www.frontendmentor.io/profile/hamdi4-beep'],
      ['LinkedIn', 'https://www.linkedin.com/in/hamdi-kamel-bab017b8/'],
      ['Twitter', 'https://twitter.com/Hamdi33727935'],
      ['Instagram', 'https://www.instagram.com/hamdi_beep4/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr']
    ]

    return (
      <div className="mt-4">
        {links.map(([social, link], i) => (
          <a href={link} key={i}>
            <button className="bg-[#eee] hover:bg-[#e6e6e6] p-3 my-2 rounded-lg w-full block">{social}</button>
          </a>
        ))}
      </div>
    )
  }

  export default LinksContainer
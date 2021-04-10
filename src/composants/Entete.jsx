import './Entete.scss'

export default function Entete(props) {

    return (
        <header style={{ backgroundImage: "url(images/menu-entete.jpg" }}>
        <div className="barre-haut">
          <nav className="social">
            <a href="http://www.twitter.com" target="lien-externe" className="icone-twitter"></a>
            <a href="http://www.facebook.com" target="lien-externe" className="icone-facebook"></a>
          </nav>
          <nav className="i18n">
            <a href="#" title="English">En</a>
            <a href="#" className="actif" title="Français">Fr</a>
          </nav>
        </div>
        <div className="titre-page">
          <h1>MENU</h1>
        </div>
      </header>
    );
}

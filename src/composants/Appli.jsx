import './Appli.scss';
import ListePlats from './ListePlats';
import Entete from './Entete';
import PiedDePage from './PiedDePage';

export default function Appli() {
  return (
      <div id="conteneur" className="page-menu">
        <Entete />
        <div className="contenu-principal">
          <div className="citation">
            <img src="images/menu-citation.jpg" alt="" />
            <blockquote>
              Le plus grand outrage que l'on puisse faire à un gourmand, c'est de l'interrompre dans l'exercice de ses mâchoires.
        <cite>- Alexandre Balthazar Grimod de la Reynière</cite>
            </blockquote>
          </div>
          <ListePlats />
        </div>
      <PiedDePage />
      </div>
  );
}

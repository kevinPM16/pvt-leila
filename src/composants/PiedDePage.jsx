import './PiedDePage.scss'

export default function PiedDePage(props) {

    return (
        <footer>
        <div className="adresse">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.060765417226!2d-73.55639508444104!3d45.508855379101504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c61c62b%3A0xfdfe31ba58584701!2sMontreal+City+Hall%2C+275+Notre-Dame+St.+East%2C+Montreal%2C+QC+H2Y+1C6!5e0!3m2!1sen!2sca!4v1542589511128" width="920" height="160" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
          <p>275 rue Notre-Dame Est, Montréal, Québec <strong>(514) 872-0311</strong></p>
        </div>
      </footer>
    );
}
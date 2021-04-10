
export default function Plat({nom, id, desc, prix}) {

    return (
        <li>
            <span className="nom">{nom}<br /><i className="desc">{desc}</i></span>
            <span className="prix">{prix}</span>
        </li>
    );
}
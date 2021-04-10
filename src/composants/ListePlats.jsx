import Plat from './Plat';
import './ListePlats.scss';

import { useEffect, useState } from 'react';
import bd from "../services/firebase.js";





export default function ListePlats() {

    const [plats, setPlat] = useState([]);

    useEffect(() => {
        async function getPlats() {
          // On initialise un tableau pour contenir les produits extraits de Firestore
          const tabPlats = [];
          
          const response = await bd.collection('plats-leila').get();
    
          response.forEach(
            doc => tabPlats.push(doc.data())
          );
          
          
          setPlat(tabPlats);
        }
        getPlats();
      }, []); 



    return (
       <div className="carte">
            <section>
                <ul>
                {
                    plats.map(plat => <Plat key={plat.id} {...plat}     />    )
                }
                </ul>
            </section>
        </div>

    );
}
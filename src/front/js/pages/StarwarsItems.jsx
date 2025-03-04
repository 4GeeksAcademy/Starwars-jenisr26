import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const StarwarsItems = () => {

    const { store, actions } = useContext(Context)
    const handleDetails = (itemUid) => {
        
    }

    return (
        <div>
            <ul>
                {store[store.activePage].map((item) => 
                <li key={item.uid}>
                    <div className="w-25">

                        <img className="card-img-top img-fluid rounded img-custom " alt={item.name}
                            onError={(e) => { e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/big-placeholder.jpg" }}
                            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${store.activePage === 'people' ? 'characters' : store.activePage}/${item.uid}.jpg`} />
                    </div>
                    {item.name}
                    <span className="btn btn-primary" onClick={() => handleDetails(item.uid)}> Detalles </span>
                </li>)}
            </ul>
        </div>
    )
}
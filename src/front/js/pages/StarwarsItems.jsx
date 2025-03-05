import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const StarwarsItems = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const handleDetails = (itemUid, itemUrl) => {
        actions.getItemsDetails(itemUrl)
        navigate("/planet-details")
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
                        <span className="btn btn-primary" onClick={() => handleDetails(item.uid, item.url)}> Detalles </span>
                    </li>)}
            </ul>
        </div>
    )
}

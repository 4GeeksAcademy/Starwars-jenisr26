import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {

    const { actions, store } = useContext(Context)

    return (
        <div>
            <h1>
                {store.currentItemDetails.name}
            </h1>
            <ul>
                <li>
                    <p>Height: {store.currentItemDetails.height}</p>

                </li>
                <li>
                    <p>Mass: {store.currentItemDetails.mass}</p>

                </li>
                <li>
                    <p>Hair color: {store.currentItemDetails.hair_color}</p>
                </li>
                <li>
                    <p>Skin color: {store.currentItemDetails.skin_color}</p>
                </li>
                <li>
                    <p>Eye color: {store.currentItemDetails.eye_color}</p>
                </li>
                <li>
                    <p>Birth year: {store.currentItemDetails.birth_year}</p>
                </li>
                <li>
                    <p>Gender: {store.currentItemDetails.gender}</p>
                </li>
            </ul>
        </div>)
}
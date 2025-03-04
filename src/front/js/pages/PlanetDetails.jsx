import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {

    const { actions, store } = useContext(Context)

    return( <div>{store.currentItemDetails.name} {store.currentItemDetails.name} {store.currentItemDetails.gender} {store.currentItemDetails.name}
    {store.currentItemDetails.gender} {store.currentItemDetails.name} {store.currentItemDetails.gender} {store.currentItemDetails.name}</div> )
}
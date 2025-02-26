import React from "react";

export const EditContact = () => {


    return (
        <form >
            <div className="mb-3">
                <label forhtml="nameInput" className="form-label">Name</label>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="nameInput" />
            </div>
            <div className="mb-3">
                <label forhtml="phoneInput" className="form-label">Phone</label>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="phoneInput" />
            </div>
            <div className="mb-3">
                <label forhtml="emailInput" className="form-label">Email</label>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="emailInput" />
            </div>
            <div className="mb-3">
                <label forhtml="adressInput" className="form-label">Adress</label>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="adressInput" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>)
}
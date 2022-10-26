import React, { useState } from "react";
import PropTypes from "prop-types";
import Constants from "../utilities/Constants";

function Sandeliai() {
  const [warehouses, setWarehouses] = useState([]);
  //   state = {};

  function getWarehouses() {
    const url = Constants.API_URL_GET_ALL_WAREHOUSES;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())

      .then((warehousesFromServer) => {
        // console.log(warehousesFromServer);
        setWarehouses(warehousesFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
  return (
    <div className="sandeliai">
      <div className="container">
        <div className="row min-vh-100">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div>
              <button
                onClick={getWarehouses}
                className="btn btn-dark btn-lg w-100"
              >
                Parodyti visus sandėlius
              </button>
            </div>

            {warehouses.length > 0 && renderWarehouseTable()}
          </div>
        </div>
      </div>
    </div>
  );

  function renderWarehouseTable() {
    return (
      <div className="table-resposive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Pavadinimas</th>
              <th scope="col">Aprašymas</th>
              <th scope="col">Adresas</th>
              <th scope="col">Kūrimo data</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((warehouse) => (
              <tr key={warehouse.id}>
                <th scope="row">{warehouse.id}</th>
                <td>{warehouse.name}</td>
                <td>{warehouse.description}</td>
                <td>{warehouse.address}</td>
                <td>{warehouse.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => setWarehouses([])}
          className="btn btn-dark btn-lg w-100"
        >
          Paslėpti visus sandėlius
        </button>
      </div>
    );
  }
}
export default Sandeliai;

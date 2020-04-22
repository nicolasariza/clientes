import React, { Fragment, useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Cliente from "./Cliente";

const ListaClientes = () => {
  
  const [ clientes, setClientes] = useState([]);
  useEffect(() => {
    const consultarAPI = async () => {
      const resultado = await clienteAxios.get("/clientes");
      setClientes(resultado.data.clientes)
    };
    consultarAPI();
  }, []);
  return (
    <Fragment>
      <div className="container">
        <h2 className="text-center my-5">Listado de clientes</h2>
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length === 0
              ? "No hay clientes"
              : clientes.map((cliente) => (
                  <Cliente key={cliente.id} cliente={cliente} />
                ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListaClientes;

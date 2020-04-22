import React from "react";

const Cliente = ({ cliente }) => {
  const { nombre, email } = cliente;
  return (
      <tr>
        <td>{nombre}</td>
        <td>
          <span className="font-weight-bold">{email}</span>
        </td>
      </tr>
  );
};

export default Cliente;

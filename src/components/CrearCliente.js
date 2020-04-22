import React, { useState } from "react";
import clienteAxios from "../config/axios";

const CrearCliente = (props) => {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
  });

  const [alerta, setAlerta] = useState({
    mostrar: false,
    mensaje: "",
    claseCSS: "",
  });

  const { nombre, email } = cliente;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || email.trim === "") {
      setAlerta({
        mostrar: true,
        mensaje: "los campos son obligatorios",
        claseCSS: "alert-danger",
      });
      return;
    }

    try {
      clienteAxios.post("/clientes", cliente);
      setAlerta({
        mostrar: true,
        mensaje: "Se registró cliente correctamente",
        claseCSS: "alert-success",
      });
      props.history.push("/");
    } catch (error) {
      console.log(error);
      setAlerta({
        mostrar: true,
        mensaje: "Hubo un error",
        claseCSS: "alert-danger",
      });
    }
  };
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar un nuevo cliente
            </h2>
            {alerta ? (
              <div class={`alert ${alerta.claseCSS}`} role="alert">
                {alerta.mensaje}
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del cliente"
                  name="nombre"
                  value={nombre}
                  onChange={(e) =>
                    setCliente({ ...cliente, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) =>
                    setCliente({ ...cliente, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCliente;

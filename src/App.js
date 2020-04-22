import React, { useState } from "react";
import { HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import CrearCliente from "./components/CrearCliente";
import ListaClientes from "./components/ListaClientes";

function App() {
  const [clientes, setClientes] = useState([]);

  return (
    <HashRouter basename="/">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand text-light"><Link to="/">Clientes</Link></a>
        <a className="nav-link"><Link to="/cliente" className="">
          Crear cliente
        </Link></a>
      </nav>
      <Switch>
        <Route exact path="/cliente" component={CrearCliente} />
        <Route exact path="/" component={ListaClientes} />
      </Switch>
    </HashRouter>
  );
}

export default App;

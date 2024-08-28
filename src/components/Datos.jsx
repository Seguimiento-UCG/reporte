import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/App.css';

const excelUrls = [
  'https://autorrelleno-excel.onrender.com/remitente',
  'https://autorrelleno-excel.onrender.com/turno',
];

const MostrarDatos = () => {
  const [remitenteArray, setRemitenteArray] = useState([]);
  const [turnoArray, setTurnoArray] = useState([]);

  useEffect(() => {
    const llamarEnlace = async (url) => {
      const data = await fetch(url);
      return data.json();
    };

    const llamarTodosLosEnlaces = async () => {
      const respuesta = await Promise.all(
        excelUrls.map((url) => llamarEnlace(url))
      );
      setRemitenteArray(respuesta[0]);
      setTurnoArray(respuesta[1]);
    };
    console.log(llamarTodosLosEnlaces());
  }, []);

  const handleDeleteRemitente = (id) => {
    const confirm = window.confirm('Esta Seguro de Eliminarlo?');
    var thisPage = Location;
    if (confirm) {
      axios
        .delete('https://autorrelleno-excel.onrender.com/remitente/' + id)
        .then((res) => {
          thisPage.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="upper-side">
        <div></div>
        <h2 className="titulo">Remitentes</h2>{' '}
        <Link to="/crearRemitente" className="label-button enlaces">
          Nuevo
        </Link>
      </div>

      {remitenteArray && (
        <div className="tableWrapper">
          <table className="table1">
            <thead>
              <tr>
                <th>Nombre Remitente</th>
                <th>Puesto Remitente</th>
                <th>Area Remitente</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {remitenteArray.map((d, i) => (
                <tr key={i}>
                  <td>{d.NombreRemitente}</td>
                  <td>{d.PuestoRemitente}</td>
                  <td>{d.AreaRemitente}</td>
                  <td className="botones-wrapper">
                    <Link to={`/actualizar/remitentes/${d.id}`}>
                      <button className="table-button">Editar</button>
                    </Link>
                    <button
                      onClick={(e) => handleDeleteRemitente(d.id)}
                      className="table-button erase"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="space"></div>

      <div className="upper-side">
        <div></div>
        <h2 className="titulo">Turnantes</h2>{' '}
        <Link to="/crearTurnante" className="label-button">
          Nuevo
        </Link>
      </div>

      {turnoArray && (
        <div className="tableWrapper">
          <table className="table1">
            <thead>
              <tr>
                <th>Turno</th>
                <th>Nombre Turno</th>
                <th>Puesto Turno</th>
                <th>Area Responsable</th>
                <th>Ambito Turnante</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {turnoArray.map((d, i) => (
                <tr key={i}>
                  <td>{d.Turno}</td>
                  <td>{d.Nombre_Turno}</td>
                  <td>{d.Puesto_Turno}</td>
                  <td>{d.AreaResp2}</td>
                  <td>{d.AmbitoTurnante}</td>
                  <td className="botones-wrapper">
                    <Link to={`/actualizar/turnates/${d.id}`}>
                      <button className="table-button">editar</button>
                    </Link>
                    <button className="table-button erase">Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MostrarDatos;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

import ExportToExcel from './descarga';
import { FaUpload } from 'react-icons/fa';

import '../styles/PanelExcel.css';

const ExcelJS = require('exceljs');

export const PanelExcelV2 = () => {
  const [fileName, setFileName] = useState(null);
  const [entradas, setEntradas] = useState([]);
  const [remitenteArray, setRemitenteArray] = useState([]);
  const [turnoArray, setTurnoArray] = useState([]);

  useEffect(() => {
    axios
      .get('https://autorrelleno-excel.onrender.com/remitente/')
      .then((res) => setRemitenteArray(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('https://autorrelleno-excel.onrender.com/turno/')
      .then((res) => setTurnoArray(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const entradas = await file.arrayBuffer();
    const workbook = XLSX.read(entradas);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setEntradas(jsonData);

    jsonData.forEach((area) => {
      const encontrarArea = remitenteArray.find(
        (item) => item.PuestoRemitente === area.PuestoRemitente
      );

      if (encontrarArea) {
        area.AreaRemitente = encontrarArea.AreaRemitente;
      }
    });

    jsonData.forEach((turno) => {
      const encontrarTurno = turnoArray.find(
        (item) => item.Turno === turno.Turno
      );

      if (encontrarTurno) {
        turno.AreaResp2 = encontrarTurno.AreaResp2;
        turno.AmbitoTurnante = encontrarTurno.AmbitoTurnante;
      }
    });
  };

  console.log(entradas);

  const resultadoTest = entradas.filter((item) => {
    return (
      item.AreaResp2 ===
      'UNIDAD ESTATAL DEL SISTEMA PARA LA CARRERA DE LAS MAESTRAS Y LOS MAESTROS'
    );
  });

  console.log(resultadoTest);

  return (
    <div className="excel-panel">
      <div className="top-side">
        <h1>ADJUNTO DE CELDAS</h1>
        {fileName && (
          <p className="nombre">
            Nombre del Archivo: <span className="excelNombre">{fileName}</span>
          </p>
        )}
        <div className="button-panel">
          <input
            type="file"
            className="archivo"
            onChange={(e) => handleFile(e)}
            id="uploadBtn"
          />
          <label className="label-button " htmlFor="uploadBtn">
            <FaUpload /> Subir Archivo
          </label>
          <ExportToExcel hojaPrincipal={entradas} prueba={resultadoTest} />
        </div>
      </div>

      <h2 className="titulo2">Datos de Tabla de Excel</h2>
      <div className="tableWrapper">
        <table className="table1">
          <thead>
            <tr>
              <th>Folio</th>
              <th>Nombre Remitente</th>
              <th>Puesto Remitente</th>
              <th>Número Documento</th>
              <th>Referencia Interesados</th>
              <th>Turno</th>
              <th>Folio Recibido</th>
              <th>Área Responsable </th>
              <th>Área Remitente</th>
              <th>Ambito Turnante</th>
            </tr>
          </thead>
          <tbody>
            {entradas.map((d, i) => (
              <tr key={i}>
                <td>{d.Folio}</td>
                <td>{d.NombreRemitente}</td>
                <td>{d.PuestoRemitente}</td>
                <td>{d.Numero_Docto}</td>
                <td>{d.RefInteresados}</td>
                <td>{d.Turno}</td>
                <td>{d.Folio_Recibido}</td>
                <td>
                  <strong>{d.AreaResp2}</strong>
                </td>
                <td>
                  <strong>{d.AreaRemitente}</strong>
                </td>
                <td>
                  <strong>{d.AmbitoTurnante}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

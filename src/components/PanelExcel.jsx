import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import ExportToExcel from './descarga';
import { FaUpload } from 'react-icons/fa';

import '../styles/PanelExcel.css';

export const PanelExcel = () => {
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

    //PARA LEER SOLO 4 COLUMNAS, LA PRIMERA ES PARA EL TITULO
    //const workbook = XLSX.readFile(data {sheetRows: 5});

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setEntradas(jsonData);

    //DE OBJETOS A ARRAYS
    //const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: ""});

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

  //MAESTROS
  const totalMaestros = entradas.filter((item) => {
    return (
      item.AreaResp2 ===
      'UNIDAD ESTATAL DEL SISTEMA PARA LA CARRERA DE LAS MAESTRAS Y LOS MAESTROS'
    );
  });

  const arrayMaestros = totalMaestros.map((filObj) => filObj.AreaRemitente);
  const countMaestros = {};
  arrayMaestros.forEach(function (x) {
    countMaestros[x] = (countMaestros[x] || 0) + 1;
  });

  const valMaestros = [];
  for (var key in countMaestros) {
    valMaestros.push(countMaestros[key]);
  }
  const objToArray = [countMaestros];

  const maestrosArray = Object.entries(countMaestros).map(([key, value]) => ({
    [key]: value,
  }));

  console.log(maestrosArray);

  /* console.log(arrayMaestros);
  console.log(countMaestros);
  console.log(valMaestros);
  console.log(objToArray); */

  //PLANEACION
  const totalPlaneacion = entradas.filter((item) => {
    return item.AreaResp2 === 'SUBSECRETARIA DE PLANEACION EDUCATIVA';
  });

  const arrayPlaneacion = totalPlaneacion.map((filObj) => filObj.AreaRemitente);
  const countPlaneacion = {};
  arrayPlaneacion.forEach(function (x) {
    countPlaneacion[x] = (countPlaneacion[x] || 0) + 1;
  });

  //BASICA
  const totalBasica = entradas.filter((item) => {
    return item.AreaResp2 === 'SUBSECRETARIA DE EDUCACIÓNBASICA';
  });

  const arrayBasica = totalBasica.map((filObj) => filObj.AreaRemitente);
  const countBasica = {};
  arrayBasica.forEach(function (x) {
    countBasica[x] = (countBasica[x] || 0) + 1;
  });

  //MEDIA
  const totalMedia = entradas.filter((item) => {
    return (
      item.AreaResp2 === 'SUBSECRETARIA DE EDUCACIÓN MEDIA SUPERIOR Y SUPERIOR'
    );
  });

  const arrayMedia = totalMedia.map((filObj) => filObj.AreaRemitente);
  const countMedia = {};
  arrayMedia.forEach(function (x) {
    countMedia[x] = (countMedia[x] || 0) + 1;
  });

  //FINANZAS
  const totalFinanzas = entradas.filter((item) => {
    return item.AreaResp2 === 'SUBSECRETARIA DE ADMINISTRACION Y FINANZAS';
  });

  const arrayFinanzas = totalFinanzas.map((filObj) => filObj.AreaRemitente);
  const countFinanzas = {};
  arrayFinanzas.forEach(function (x) {
    countFinanzas[x] = (countFinanzas[x] || 0) + 1;
  });

  //PARTICULAR
  const totalParticular = entradas.filter((item) => {
    return item.AreaResp2 === 'SRIA. PARTICULAR DEL C. SECRETARIO	';
  });

  const arrayParticular = totalParticular.map((filObj) => filObj.AreaRemitente);
  const countParticular = {};
  arrayParticular.forEach(function (x) {
    countParticular[x] = (countParticular[x] || 0) + 1;
  });

  //INTERNO
  const totalInterno = entradas.filter((item) => {
    return item.AreaResp2 === 'ÓRGANO INTERNO DE CONTROL';
  });

  const arrayInterno = totalInterno.map((filObj) => filObj.AreaRemitente);
  const countInterno = {};
  arrayInterno.forEach(function (x) {
    countInterno[x] = (countInterno[x] || 0) + 1;
  });

  //FUERA
  const totalFuera = entradas.filter((item) => {
    return item.AreaResp2 === 'FUERA DE LA SRIA';
  });

  const arrayFuera = totalFuera.map((filObj) => filObj.AreaRemitente);
  const countFuera = {};
  arrayFuera.forEach(function (x) {
    countFuera[x] = (countFuera[x] || 0) + 1;
  });

  //REGIONALES
  const totalRegionales = entradas.filter((item) => {
    return item.AreaResp2 === 'DIRECCIÓN GENERAL DE SERVICIOS REGIONALES';
  });

  const arrayRegionales = totalRegionales.map((filObj) => filObj.AreaRemitente);
  const countRegionales = {};
  arrayRegionales.forEach(function (x) {
    countRegionales[x] = (countRegionales[x] || 0) + 1;
  });

  //JURIDICO
  const totalJuridico = entradas.filter((item) => {
    return (
      item.AreaResp2 ===
      'DIRECCION GENERAL DE ASUNTOS JURÍDICOS Y TRANSPARENCIA'
    );
  });

  const arrayJuridico = totalJuridico.map((filObj) => filObj.AreaRemitente);
  const countJuridico = {};
  arrayJuridico.forEach(function (x) {
    countJuridico[x] = (countJuridico[x] || 0) + 1;
  });

  //DESCARGA DIRECTA DE UNA HOJA
  /* const handleOnExport = () => {
    var workbook = XLSX.utils.book_new(),
      worksheet = XLSX.utils.json_to_sheet(entradas);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'EstadisticaCompleta');

    XLSX.writeFile(workbook, 'EstadisticaCompleta.xlsx');

    
  }; */

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

          <ExportToExcel hojaPrincipal={entradas} prueba={maestrosArray} />

          {/* DESCARGA DIRECTA DE UNA HOJA */}
          {/* <button
            className="button-no-show"
            onClick={handleOnExport}
            id="downloadBtn"
          >
            Descargar Modificación
          </button>
          <label
            htmlFor="downloadBtn"
            className="label-button label-2nd-button "
          >
            <FaDownload /> Descargar Archivo
          </label> */}
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

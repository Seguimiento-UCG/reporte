import * as FileSaver from 'file-saver';
import { FaDownload } from 'react-icons/fa';
import * as XLSX from 'xlsx';

const ExportToExcel = ({ hojaPrincipal, prueba }) => {
  const fileType = 'xlsx';

  const handleOnExport = () => {
    const mainSheet = XLSX.utils.json_to_sheet(hojaPrincipal);
    const testSheet = XLSX.utils.json_to_sheet(prueba, {
      /* skipHeader: true, */
    });

    const wb = {
      Sheets: { estadistica: mainSheet, prueba: testSheet },
      SheetNames: ['estadistica', 'prueba'],
    };

    mainSheet['!cols'] = [
      { wch: 8 }, //Folio
      { wch: 12 }, //FRecepcion
      { wch: 40 }, //NombreRemitente
      { wch: 40 }, //PuestoRemitente
      { wch: 12 }, //Numero_Docto
      { wch: 40 }, //RefInteresados
      { wch: 40 }, //Turno
      { wch: 30 }, //DescripcionAsunto_Envio
      { wch: 12 }, //FechaElaboracionDocto
      { wch: 8 }, //Folio_Recibido
      { wch: 8 }, //FRecibo
      { wch: 10 }, //NoDoc
      { wch: 8 }, //Informe
      { wch: 30 }, //RemitenteAvances
      { wch: 30 }, //AreaRemitente
      { wch: 30 }, //AreaResp2
      { wch: 20 }, //AmbitoTurnante
      { wch: 8 }, //IdRemitenteAvances
      { wch: 8 }, //Avance
    ];
    var wscols = [{ wch: 8 }, { wch: 12 }, { wch: 40 }, { wch: 40 }];
    testSheet['!cols'] = wscols;

    /* const pruebaKeys = Object.keys(prueba);
    console.log(pruebaKeys);

    XLSX.utils.sheet_add_aoa(testSheet, [pruebaKeys], {
      origin: 'A7',
    }); */

    const maArray = Object.values(prueba);
    console.log(maArray);

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, 'EstadisticaCompleta.xlsx');
  };

  return (
    <>
      <button
        className="button-no-show"
        onClick={handleOnExport}
        id="downloadBtn"
      >
        Descargar Modificación
      </button>
      <label htmlFor="downloadBtn" className="label-button label-2nd-button ">
        <FaDownload /> Descargar Archivo
      </label>
    </>
  );
};

export default ExportToExcel;

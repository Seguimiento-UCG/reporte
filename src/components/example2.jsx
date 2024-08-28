import * as XLSX from 'xlsx';

export default function SheetJSeriesToRows() {
  return (
    <button
      onClick={() => {
        /* typed arrays */
        const ta1 = new Float64Array([54337.95, 3.14159, 2.718281828]);
        const ta2 = new Float64Array([281.3308004, 201.8675309, 1900.6492568]);

        /* create worksheet from first typed array */
        const ws = XLSX.utils.aoa_to_sheet([['Values']]);
        const arr1 = Array.from(ta1);
        XLSX.utils.sheet_add_aoa(ws, [arr1], { origin: 'B1' });

        /* add second title to cell A2 */
        XLSX.utils.sheet_add_aoa(ws, [['Value2']], { origin: 'A2' });

        /* add second typed array starting from cell B2 */
        const arr2 = Array.from(ta2);
        XLSX.utils.sheet_add_aoa(ws, [arr2], { origin: 'B2' });

        /* export to file */
        const wb = XLSX.utils.book_new(ws, 'Export');
        XLSX.writeFile(wb, 'SheetJSeriesToRows.xlsx');
      }}
    >
      <b>Click to export</b>
    </button>
  );
}

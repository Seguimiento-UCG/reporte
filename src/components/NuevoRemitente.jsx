import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NuevoRemitente() {
  /* const [inputData, setInputData] = useState({
    NombreRemitente: '',
    PuestoRemitente: '',
    AreaRemitente: '',
  }); */

  const [nombreRemitente, setNombreRemitente] = useState('');
  const [puestoRemitente, setPuestoRemitente] = useState('');
  const [areaRemitente, setAreaRemitente] = useState('');

  const navigat = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://autorrelleno-excel.onrender.com/remitente/', {
        NombreRemitente: nombreRemitente,
        PuestoRemitente: puestoRemitente,
        AreaRemitente: areaRemitente,
      })
      .then(() => {
        console.log('nuevo remitente');
        navigat('/datos');
      })
      .catch((err) => console.log(err));

    /* fetch('http://localhost:5000/remitente', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputData),
    }).then(() => {
      console.log('nuevo remitente');
    }); */
  };
  return (
    <div className="form-wrapper bg-gradient-to-tr rounded-2xl  flex justify-center items-center from-white to-blue-950 text-white shadow-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="titulo">Nuevo Remitente</h1>
        <div className="input-wrapper ">
          <Input
            name="NombreRemitente"
            label="Nombre Remitente"
            isClearable
            radius="lg"
            onChange={(e) =>
              /* setInputData({ ...inputData, PuestoRemitente: e.target.value }) */
              setNombreRemitente(e.target.value)
            }
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default-200/50',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/70',
                'dark:hover:bg-default/70',
                'group-data-[focus=true]:bg-default-200/50',
                'dark:group-data-[focus=true]:bg-default/60',
                '!cursor-text',
              ],
            }}
            className="inputField"
          />

          <Input
            type="text"
            name="PuestoRemitente"
            label="Puesto Remitente"
            isClearable
            radius="lg"
            onChange={(e) =>
              /* setInputData({ ...inputData, PuestoRemitente: e.target.value }) */
              setPuestoRemitente(e.target.value)
            }
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default-200/50',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/70',
                'dark:hover:bg-default/70',
                'group-data-[focus=true]:bg-default-200/50',
                'dark:group-data-[focus=true]:bg-default/60',
                '!cursor-text',
              ],
            }}
            className="inputField"
          />
          <Input
            type="text"
            name="AreaRemitente"
            label="Area Remitente"
            isClearable
            radius="lg"
            onChange={(e) =>
              /* setInputData({ ...inputData, AreaRemitente: e.target.value }) */
              setAreaRemitente(e.target.value)
            }
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default-200/50',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/70',
                'dark:hover:bg-default/70',
                'group-data-[focus=true]:bg-default-200/50',
                'dark:group-data-[focus=true]:bg-default/60',
                '!cursor-text',
              ],
            }}
            className="inputField"
          />
        </div>
        <div className="button-section flex justify-around">
          <Link to="/datos" className="return-btn">
            Regresar
          </Link>
          <button className="submit-btn">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default NuevoRemitente;

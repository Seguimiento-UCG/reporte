import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NuevoTurno() {
  const [Turno, setTurno] = useState('');
  const [Nombre_Turno, setNombre_Turno] = useState('');
  const [Puesto_Turno, setPuesto_Turno] = useState('');
  const [AreaResp2, setAreaResp2] = useState('');
  const [AmbitoTurnante, setAmbitoTurnante] = useState('');

  const navigat = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://autorrelleno-excel.onrender.com/turno/', {
        Turno: Turno,
        Nombre_Turno: Nombre_Turno,
        Puesto_Turno: Puesto_Turno,
        AreaResp2: AreaResp2,
        AmbitoTurnante: AmbitoTurnante,
      })
      .then(() => {
        console.log('nuevo remitente');
        navigat('/datos');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-wrapper bg-gradient-to-tr rounded-2xl  flex justify-center items-center from-white to-blue-950 text-white shadow-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="titulo">Nuevo Turno</h1>
        <div className="input-wrapper ">
          <Input
            name="Turno"
            label="Turno"
            isClearable
            radius="lg"
            onChange={(e) => setTurno(e.target.value)}
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
            name="Nombre_Turno"
            label="Nombre Turno"
            isClearable
            radius="lg"
            onChange={(e) => setNombre_Turno(e.target.value)}
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
            name="Puesto_Turno"
            label="Puesto Turno"
            isClearable
            radius="lg"
            onChange={(e) => setPuesto_Turno(e.target.value)}
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
            name="AreaResp2"
            label="Area Responsable"
            isClearable
            radius="lg"
            onChange={(e) => setAreaResp2(e.target.value)}
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
            name="AmbitoTurnante"
            label="Ambito Turnante"
            isClearable
            radius="lg"
            onChange={(e) => setAmbitoTurnante(e.target.value)}
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

export default NuevoTurno;

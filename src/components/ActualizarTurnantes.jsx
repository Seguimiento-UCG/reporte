import { Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ActualizarTurnantes() {
  const { id } = useParams();

  const [values, setValues] = useState({
    Turno: '',
    Nombre_Turno: '',
    Puesto_Turno: '',
    AreaResp2: '',
    AmbitoTurnante: '',
  });

  const navigat = useNavigate();

  useEffect(() => {
    axios
      .get('https://autorrelleno-excel.onrender.com/turno/' + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put('https://autorrelleno-excel.onrender.com/turno/' + id, values)
      .then(() => {
        console.log('remitente actualizado');
        navigat('/datos');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrapper bg-gradient-to-tr rounded-2xl  flex justify-center items-center from-white to-red-950 text-white shadow-lg">
      <form onSubmit={handleUpdate}>
        <h1 className="titulo">Actualizar Turno</h1>
        <div className="input-wrapper ">
          <Input
            type="text"
            name="Turno"
            label="Turno"
            isClearable
            radius="lg"
            value={values.Turno}
            onChange={(e) => setValues({ ...values, Turno: e.target.value })}
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
            value={values.Nombre_Turno}
            onChange={(e) =>
              setValues({ ...values, Nombre_Turno: e.target.value })
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
            name="Puesto_Turno"
            label="Puesto Turno"
            isClearable
            radius="lg"
            value={values.Puesto_Turno}
            onChange={(e) =>
              setValues({ ...values, Puesto_Turno: e.target.value })
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
            name="AreaResp2"
            label="Area Responsable"
            isClearable
            radius="lg"
            value={values.AreaResp2}
            onChange={(e) =>
              setValues({ ...values, AreaResp2: e.target.value })
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
            name="AmbitoTurnante"
            label="Ambito Turnante"
            isClearable
            radius="lg"
            value={values.AmbitoTurnante}
            onChange={(e) =>
              setValues({ ...values, AmbitoTurnante: e.target.value })
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
          <button className="submit-btn">Actualizar</button>
        </div>
      </form>
    </div>
  );
}

export default ActualizarTurnantes;

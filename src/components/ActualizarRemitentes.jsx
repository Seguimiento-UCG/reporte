import { Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ActualizarRemitentes() {
  const { id } = useParams();

  const [values, setValues] = useState({
    NombreRemitente: '',
    PuestoRemitente: '',
    AreaRemitente: '',
  });

  const navigat = useNavigate();

  useEffect(() => {
    axios
      .get('https://autorrelleno-excel.onrender.com/remitente/' + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put('https://autorrelleno-excel.onrender.com/remitente/' + id, values)
      .then(() => {
        console.log('remitente actualizado');
        navigat('/datos');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrapper bg-gradient-to-tr rounded-2xl  flex justify-center items-center from-white to-red-950 text-white shadow-lg">
      <form onSubmit={handleUpdate}>
        <h1 className="titulo">Actualizar Remitente</h1>
        <div className="input-wrapper ">
          <Input
            type="text"
            name="NombreRemitente"
            label="Nombre Remitente"
            isClearable
            radius="lg"
            value={values.NombreRemitente}
            onChange={(e) =>
              setValues({ ...values, NombreRemitente: e.target.value })
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
            value={values.PuestoRemitente}
            onChange={(e) =>
              setValues({ ...values, PuestoRemitente: e.target.value })
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
            value={values.AreaRemitente}
            onChange={(e) =>
              setValues({ ...values, AreaRemitente: e.target.value })
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

export default ActualizarRemitentes;

import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { PanelExcel } from './components/PanelExcel';

import Sidebar from './components/Sidebar';
import NuevoRemitente from './components/NuevoRemitente';
import NuevoTurno from './components/NuevoTurno';
import { NextUIProvider } from '@nextui-org/react';
import MostrarDatos from './components/Datos';
import ActualizarRemitentes from './components/ActualizarRemitentes';
import ActualizarTurnantes from './components/ActualizarTurnantes';
import Example from './components/example';
import { PanelExcelV2 } from './components/PanelExcelV2';
import SheetJSeriesToRows from './components/example2';

export default function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Sidebar>
        <Routes>
          <Route path="/" element={<PanelExcel />} />
          <Route path="/datos" element={<MostrarDatos />} />
          <Route
            path="/actualizar/remitentes/:id"
            element={<ActualizarRemitentes />}
          />
          <Route
            path="/actualizar/turnates/:id"
            element={<ActualizarTurnantes />}
          />
          <Route path="/crearRemitente" element={<NuevoRemitente />} />
          <Route path="/crearTurnante" element={<NuevoTurno />} />
          <Route path="/example" element={<Example />} />
          <Route path="/example2" element={<SheetJSeriesToRows />} />
          <Route path="/v2" element={<PanelExcelV2 />} />
        </Routes>
      </Sidebar>
    </NextUIProvider>
  );
}

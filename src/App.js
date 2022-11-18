import logo from './logo.svg';
import './App.css';

import 'semantic-ui-css/semantic.min.css'

import { ValidacionDatos } from './components/monitores/MonitorValidacionDatos'
import { MonitoresFactura } from './components/monitores/MonitoresFactura'
import { RipsDocumento } from './components/monitores/RipsDocumento';
import { RipsCentroCostos } from './components/monitores/RipsCentroCostos';

function App() {
  return (
    <div>
      <ValidacionDatos />
      <MonitoresFactura />
      <RipsDocumento/>
      <RipsCentroCostos/>
    </div>
  );
}

export default App;

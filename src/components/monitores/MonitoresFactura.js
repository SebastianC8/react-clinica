
import { Container, Tab, Header } from 'semantic-ui-react'
import DynamicDataTable from '../general/DynamicDataTable'
import { Sincronizar } from '../general/Sincronizar'
import { formatColumns } from '../../helpers/FormatColumnsDataTable'
import '../../css/table.css'

const facturasListasParaEnviar = [
    {
        numeroFactura: 14845,
        cliente: "Cliente 1",
        observaciones: "Observaciones",
        motivo: "Sin motivo"
    },
    {
        numeroFactura: 14770,
        cliente: "Cliente 2",
        observaciones: "Observaciones",
        motivo: "Sin motivo"
    },
    {
        numeroFactura: 14985,
        cliente: "Cliente 3",
        observaciones: "Observaciones",
        motivo: "Sin motivo"
    }
]

const facturasPendientesAprobacion = [
    {
        numeroFactura: 14845,
        cliente: "Cliente 1",
        fecha_hora: "2022-06-15 14:25:42",
        usuario: "scorrales"
    },
    {
        numeroFactura: 14770,
        cliente: "Cliente 2",
        fecha_hora: "2022-06-10 16:25:42",
        usuario: "scorrales"
    },
    {
        numeroFactura: 14985,
        cliente: "Cliente 3",
        fecha_hora: "2022-06-09 09:25:42",
        usuario: "scorrales"
    }
]

const facturasRechazadas = [
    {
        numeroFactura: 14845,
        cliente: "Cliente 1",
        fecha_hora: "2022-06-15 14:25:42",
        usuario: "scorrales",
        motivo: "Causal 1"
    },
    {
        numeroFactura: 14770,
        cliente: "Cliente 2",
        fecha_hora: "2022-06-10 16:25:42",
        usuario: "scorrales",
        motivo: "Causal 4"
    },
    {
        numeroFactura: 14985,
        cliente: "Cliente 3",
        fecha_hora: "2022-06-09 09:25:42",
        usuario: "scorrales",
        motivo: "Causal 7"
    }
]

const facturasAprobadas = [
    {
        numeroFactura: 14845,
        cliente: "Cliente 1",
        fecha_hora: "2022-06-15 14:25:42",
        usuario: "scorrales",
        id_factura: 105684152
    },
    {
        numeroFactura: 14770,
        cliente: "Cliente 2",
        fecha_hora: "2022-06-10 16:25:42",
        usuario: "scorrales",
        id_factura: 105684176
    },
    {
        numeroFactura: 14985,
        cliente: "Cliente 3",
        fecha_hora: "2022-06-09 09:25:42",
        usuario: "scorrales",
        id_factura: 105684198
    }
]

const DataTables = [
    {
        tabText: "Listas para enviar",
        title: "Monitor facturas listas por enviar",
        data: facturasListasParaEnviar,
        columns: formatColumns(facturasListasParaEnviar),
        progressPending: false
    },
    {
        tabText: "Pendientes aprobación",
        title: "Monitor facturas pendientes aprobación",
        data: facturasPendientesAprobacion,
        columns: formatColumns(facturasPendientesAprobacion),
        progressPending: false
    },
    {
        tabText: "Rechazadas",
        title: "Monitor facturas rechazadas",
        data: facturasRechazadas,
        columns: formatColumns(facturasRechazadas),
        progressPending: false
    },
    {
        tabText: "Aprobadas",
        title: "Monitor facturas aprobadas",
        data: facturasAprobadas,
        columns: formatColumns(facturasAprobadas),
        progressPending: false
    }
]

let panes = [];

DataTables.forEach((elm) => {
    panes.push({
        menuItem: elm.tabText, render: () =>
        <Tab.Pane>

            <Sincronizar/>

            <DynamicDataTable
                title = { elm.title }
                data = { elm.data }
                columns = { elm.columns }
                progressPending = { elm.progressPending }
            />

        </Tab.Pane>
    });
});

export const MonitoresFactura = () => {
    
    if (panes) {

        const template = 
            <Container style={{ margin: 50 }} textAlign="center">
                <Header as='h1' textAlign='center' style={{fontWeight: "700"}}>Monitor facturas</Header>
                <Tab panes={panes}/>
            </Container>
    
        return template;

    }

}
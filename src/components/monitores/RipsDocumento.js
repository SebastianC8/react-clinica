
import { Container, Tab, Header, Segment, Grid, Select, Input, Button } from 'semantic-ui-react'
import DynamicDataTable from '../general/DynamicDataTable'
import { formatColumns } from '../../helpers/FormatColumnsDataTable'
import '../../css/table.css'

const jsonTransaccion = [
    {
        "numDocumentoldObligado": "900000000",
        "numFactura": "Fac00000001",
        "TipoNota": null,
        "numNota": null,
        "estado": "Activo"
    }
]

const jsonUsuarios = [
    {
        "tipoDocumentoldentificacion": "CC",
        "numDocumentoldentificacion": "52100200",
        "tipoUsuario": "01",
        "fechaNacimiento": "2000-01-01 08:10",
        "codSexo": "M",
        "codPaisResidencia": "170",
        "codMunicipioResidencia": "05134",
        "codZonaTerritorialResidencia": "01",
        "incapacidad": "02",
        "consecutivo": 1,
        "estado": "Activo"
    },
    {
        "tipoDocumentoldentificacion": "CC",
        "numDocumentoldentificacion": "52100200",
        "tipoUsuario": "01",
        "fechaNacimiento": "2000-01-01 08:10",
        "codSexo": "M",
        "codPaisResidencia": "170",
        "codMunicipioResidencia": "05134",
        "codZonaTerritorialResidencia": "01",
        "incapacidad": "02",
        "consecutivo": 2,
        "estado": "Inactivo"
    }
]

const jsonConsultas = [
    {
        "codPrestador": "500000000001",
        "fechalnicioAtencion": "2021-08-18 08:10",
        "numAutoriacion": "100000000002",
        "codConsulta": "890201",
        "modalidadGrupoServicioTecSal": "09",
        "grupoServicios": "01",
        "codServicio": 1,
        "finalidadTecnologiaSalud": "11",
        "causaMotivoAtencion": "21",
        "codDiagnosticoPrincipar": "D482",
        "codDiagnosticoRelacionado1": "13428",
        "codDiagnosticoRelacionado2": null,
        "codDiagnosticoRelacionado3": null,
        "tipoDiagnosticoPrincipar": "01",
        "tipoDocumentoldentificacion": "CC",
        "numDocumentoldentificacion": "80100200",
        "vrServicio": 36341,
        "tipoPagoModerador": "04",
        "valorPagoModerador": 0,
        "numFEVPagoModerador": "AF0987232XX",
        "consecutivo": 1,
        "estado": "Activo"
    },
    {
        "codPrestador": "500000000001",
        "fechalnicioAtencion": "2021-08-19 05:00",
        "numAutoriacion": "100000000002",
        "codConsulta": "890201",
        "modalidadGrupoServicioTecSal": "09",
        "grupoServicios": "01",
        "codServicio": 1,
        "finalidadTecnologiaSalud": "11",
        "causaMotivoAtencion": "21",
        "codDiagnosticoPrincipal": "D482",
        "codDiagnosticoRelacionado1": "B428",
        "codDiagnosticoRelacionado2": null,
        "codDiagnosticoRelacionado3": null,
        "tipoDiagnosticoPrincipal": "01",
        "tipoDocumentoldentificacion": "CC",
        "numDocumentoldentificacion": "80100200",
        "vrServicio": 36341,
        "tipoPagoModerador": "04",
        "valorPagoModerador": 0,
        "numFEVPagoModerador": "AF0987232XX",
        "consecutivo": 2,
        "estado": "Activo"
    }
]

const jsonProcedimientos = [
    {
        "codPrestador": "500000000001",
        "fechaInicioAtencion": "2021-08-18 08:10",
        "idMIPRES": null,
        "numAutoriacion": null,
        "codProcedimiento": "895100",
        "viaIngresoServicioSalud": "01",
        "modalidadGrupoServicioTecSal": "01",
        "grupoServicios": "04",
        "codServicio": 123,
        "finalidadTecnologiaSalud": "44",
        "tipoDocumentoldentificacion": "CC",
        "numDocumentoldentificacion": "80100200",
        "codDiagnosticoPrincipal": "E109",
        "codDiagnosticoRelacionado": "E109",
        "codComplicacion": "E109",
        "vrServicio": 49700,
        "tipoPagoModerador": "04",
        "valorPagoModerador": 0,
        "numFEVPagoModerador": "AF0987232XX",
        "consecutivo": 1,
        "estado": "Activo"
    }
]

const jsonUrgencias = [
    {
        "codPrestador": "500000000001",
        "fechalnicioAtencion": "2021-08-18 08:10",
        "causaMotivoAtencion": "21",
        "codDiagnosticoPrincipar": "8427",
        "codDiagnosticoPrincipalE": "8427",
        "codDiagnosticoRelacionadoE1": null,
        "codDiagnosticoRelacionadoE2": null,
        "codDiagnosticoRelacionadoE3": null,
        "condicionDestinoUsuarioEgreso": "02",
        "codDiagnosticoCausaMuerte": null,
        "fechaEgreso": "2021-08-23 20:22",
        "consecutivo": 1,
        "estado": "Activo"
    }
]

const jsonHospitalizacion = [
    {
        "codPrestador": "500000000001",
        "viaIngresoServicioSalud": "OZ",
        "fechalnicioAtencion": "2021-08-18 08:10",
        "numAutorizacion": "0102342",
        "causaMofivoAtencion": "21",
        "codDiagnosticoPrincipal": "B427",
        "codDiagnosticoPrincipalE": "B427",
        "codDiagnosficoRelacionadoE1": null,
        "codDiagnosticoRelacionadoE2": null,
        "codDiagnosticoRelacionadoE3": null,
        "codComplicacion": null,
        "condicionDestinoUsuarbEgreso": "02",
        "codDiagnosticoMuerte": null,
        "fechaEgreso": "2021-12-12 14:22",
        "consecutivo": 1,
        "estado": "Activo"
    }
]

const jsonRecienNacidos = [
    {
        "codPrestador": "500000000001",
        "tipoDocumentoldentificacion": "RC",
        "numDocumentoldentificacion": "10172349991",
        "fechaNacimiento": "2019-05-10 10:40",
        "edadGestacional": 40,
        "numConsultasCPrenatal": 6,
        "codSexoBiologico": "02",
        "peso": 1850,
        "codDiagnosticoPrincipal": "K469",
        "condicionDestino": "02",
        "codDiagnosticoCausaMuerte": null,
        "fechaEgreso": "2019-05-25 09:30",
        "consecutivo": 1,
        "estado": "Activo"
    }
]

const jsonMedicamentos = [
    {
        "codPrestador": "500000000001",
        "numAutorizacion": null,
        "idMIPRES": "1017232344",
        "fechaDispensAdmon": "2021-08-18 08:10",
        "codDiagnosticoPrincipal": "K469",
        "codDiagnosticoRelacionado": null,
        "tipoMedicamento": "01",
        "codTecnologiaSalud": "1A1014721001104",
        "nomTecnologiaSalud": null,
        "concentracionMedicamento": 0,
        "unidadMedida": 0,
        "formaFarmaceutica": "123456",
        "unidadMinDispensa": 1,
        "cantidadMedicamento": 10,
        "diasTratamiento": 365,
        "tipoDocumentoldentificacion": "CC",
        "numDocumentoldentificacion": "10234561292",
        "vrUnitMedicamento": 1,
        "vrServicio": 1,
        "tipoPagoModerador": "04",
        "valorPagoModerador": 0,
        "numFEVPagoModerador": "AF0987232XXX",
        "consecutivo": 1,
        "estado": "Activo"
    }
]

const jsonOtrosServicios = [
    {
        "codPrestador": "500000000001",
        "numAutorizacion": null,
        "idMIPRES": "1034284847",
        "fechaSuministroTecnologia": "2021-08-18 08:10",
        "tipoOS": "01",
        "codTecnologiaSalud": "T2387G",
        "nomTecnologiaSalud": "Dispositivo",
        "cantidadOS": 1,
        "tipoDocumentoldentificacion": "CC",
        "numDocumentoldentificacion": "10234561292",
        "vrUnitOS": 350000,
        "vrServicio": 350000,
        "tipoPagoModerador": "04",
        "valorPagoModerador": 0,
        "numFEVPagoModerador": "AF0987232",
        "consecutivo": 1,
        "estado": "Activo"
    }
]

const DataTables = [
    {
        tabText: "Transacción",
        data: jsonTransaccion,
        columns: formatColumns(jsonTransaccion),
        progressPending: false
    },
    {
        tabText: "Usuarios",
        data: jsonUsuarios,
        columns: formatColumns(jsonUsuarios),
        progressPending: false
    },
    {
        tabText: "Consultas",
        data: jsonConsultas,
        columns: formatColumns(jsonConsultas),
        progressPending: false
    },
    {
        tabText: "Procedimientos",
        data: jsonProcedimientos,
        columns: formatColumns(jsonProcedimientos),
        progressPending: false
    },
    {
        tabText: "Urgencias",
        data: jsonUrgencias,
        columns: formatColumns(jsonUrgencias),
        progressPending: false
    },
    {
        tabText: "Hospitalización",
        data: jsonHospitalizacion,
        columns: formatColumns(jsonHospitalizacion),
        progressPending: false
    },
    {
        tabText: "Recién nacidos",
        data: jsonRecienNacidos,
        columns: formatColumns(jsonRecienNacidos),
        progressPending: false
    },
    {
        tabText: "Medicamentos",
        data: jsonMedicamentos,
        columns: formatColumns(jsonMedicamentos),
        progressPending: false
    },
    {
        tabText: "Otros servicios",
        data: jsonOtrosServicios,
        columns: formatColumns(jsonOtrosServicios),
        progressPending: false
    }
]

let panes = [];

DataTables.forEach((elm) => {
    panes.push({
        menuItem: elm.tabText, render: () =>
        <Tab.Pane>

            <DynamicDataTable
                data = { elm.data }
                columns = { elm.columns }
                progressPending = { elm.progressPending }
            />

        </Tab.Pane>
    });
});

const selectTipoDocumento = [
    { key: '1', value: '1', text: 'Factura' },
    { key: '2', value: '2', text: 'Tipo documento 1' },
    { key: '3', value: '3', text: 'Tipo documento 2' },
    { key: '4', value: '4', text: 'Tipo documento 3' }
]

export const RipsDocumento = () => {

    if (panes) {
          
        const template = 
            <Container style={{ margin: 50 }} textAlign="center">
                
                <Header as='h1' textAlign='center' style = {{ fontWeight: "700" }}>RIPS x documento</Header>

                <Segment>
                    <Grid columns = { 3 } >

                        <Grid.Column>
                            <Select placeholder='Seleccionar tipo de documento' options = { selectTipoDocumento } />
                        </Grid.Column>

                        <Grid.Column>
                            <Input icon='search' placeholder='Buscar por documento...' />
                        </Grid.Column>

                        <Grid.Column>
                            <Button basic color="blue">Consultar</Button>
                        </Grid.Column>

                    </Grid>
                </Segment>

                <Tab panes = { panes } />

            </Container>
    
        return template;

    }
}
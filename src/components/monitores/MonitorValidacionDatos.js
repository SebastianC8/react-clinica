import { Container, Header } from "semantic-ui-react";
import DynamicDataTable from "../general/DynamicDataTable";
// import TableBasic from "../general/TableBasic";
import { Sincronizar } from "../general/Sincronizar";
import { formatColumns } from "../../helpers/FormatColumnsDataTable";
import '../../css/table.css'

export function ValidacionDatos() {

    const datos = [
        {
            numeroFactura: 4169 ,
            cliente: "Cliente 1",
            empresa: "CLA" ,
            sede: "Las américas 80",
            sistemaInformacion: "SERVINTE",
            campo: "U01 tipoDocumentoldentificacion",
            reglaNegocio: "Dato no identificado",
            detalleCampo: "Dato recibido PS"
        },
        {
            numeroFactura: 4169 ,
            cliente: "Cliente 1",
            empresa: "CLA" ,
            sede: "Las américas 80",
            sistemaInformacion: "SERVINTE",
            campo: "UO3 tipoUsuario",
            reglaNegocio: "Campo vacío",
            detalleCampo: "Dato recibido ''"
        },
        {
            numeroFactura: 4169 ,
            cliente: "Cliente 1",
            empresa: "CLA" ,
            sede: "Las américas 80",
            sistemaInformacion: "SERVINTE",
            campo: "U06 codPaisResidencia",
            reglaNegocio: "Dato no identificado",
            detalleCampo: "Dato recibido 169"
        },
        {
            numeroFactura: 1063 ,
            cliente: "Cliente 3",
            empresa: "CPA" ,
            sede: "CLI SUR",
            sistemaInformacion: "MATRIX",
            campo: "M03 idMIPRES",
            reglaNegocio: "Campo vacío",
            detalleCampo: "Dato recibido 0"
        },
        {
            numeroFactura: 1063 ,
            cliente: "Cliente 5",
            empresa: "CPA" ,
            sede: "CLI SUR",
            sistemaInformacion: "MATRIX",
            campo: "R09 condicionDestinoUsuarioEgreso",
            reglaNegocio: "Dato no identificado",
            detalleCampo: "Dato recibido X"
        }
    ]

    const columns = formatColumns(datos);

    const template = 
        <div>
            <Container style={{ margin: 20 }}>
                
                <Header as='h1' textAlign='center' style={{fontWeight: "700"}}>Monitor validación de datos</Header>

                <Sincronizar/>

                <DynamicDataTable 
                    data={datos} 
                    columns={columns}
                />

            </Container>

        </div>;
    return template;
}
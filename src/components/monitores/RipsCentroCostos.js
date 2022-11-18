import { Container, Header, Segment, Button, Form } from 'semantic-ui-react'

export const RipsCentroCostos = () => {

    const selectEmpresas = [
        { key: '1', value: '1', text: 'Empresa #1' },
        { key: '2', value: '2', text: 'Empresa #2' },
        { key: '3', value: '3', text: 'Empresa #3' },
    ]

    const selectCiudades = [
        { key: '1', value: '1', text: 'Ciudad #1' },
        { key: '2', value: '2', text: 'Ciudad #2' },
        { key: '3', value: '3', text: 'Ciudad #3' },
    ]

    const selectSedes = [
        { key: '1', value: '1', text: 'Sede #1' },
        { key: '2', value: '2', text: 'Sede #2' },
        { key: '3', value: '3', text: 'Sede #3' },
    ]

    const selectCentroCostos = [
        { key: '1', value: '1', text: 'Centro costos #1' },
        { key: '2', value: '2', text: 'Centro costos #2' },
        { key: '3', value: '3', text: 'Centro costos #3' },
    ]

    const template = 
    <Container style={{ padding: 50 }}>
        
        <Header as='h1' textAlign='center' style = {{ fontWeight: "700" }}>Generar RIPS X centro costos</Header>

        <Segment>
            
            <Form>

                <Form.Group unstackable widths={2}>
                    <Form.Select placeholder='Nombre de la empresa' options={selectEmpresas}/>
                    <Form.Select placeholder='Nombre de la ciudad' options={selectCiudades}/>
                </Form.Group>

                <Form.Group unstackable widths={2}>
                    <Form.Select placeholder='Nombre de la sede' options={selectSedes}/>
                    <Form.Select placeholder='Nombre del centro de costos' options={selectCentroCostos}/>
                </Form.Group>

                <Form.Group unstackable widths={2}>
                    <Form.Input type='date' placeholder='Fecha inicial' />
                    <Form.Input type='date' placeholder='Fecha final' />
                </Form.Group>

                <Button basic color="blue">Generar</Button>

            </Form>

        </Segment>
        
    </Container>

    return template;

}
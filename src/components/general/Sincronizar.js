import { Container, Button, Grid, Segment } from 'semantic-ui-react'

export const Sincronizar = () => {
    const template = 
        <Segment>
            <Grid columns={6}>
                <Grid.Column>
                    <Container textAlign='left' style={{border: "1px solid #2185d0", padding: 5, borderRadius: "5%", color: "#44546a", fontWeight: 700  }}>
                        <Button primary style={{ borderRadius: "50%", padding: 10 }}>
                            <i className="fa-solid fa-rotate" style={{ fontSize: 20 }}></i>
                        </Button>
                        Sincronizar
                    </Container>
                </Grid.Column>
            </Grid>
        </Segment>

    return template;
}
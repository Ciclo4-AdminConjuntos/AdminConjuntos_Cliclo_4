import React from "react";
import { Card,Form,Container,Button } from "react-bootstrap";
function PublicarNoticia() {
  return (
<Card className="mt-5" style={{ width: "18rem", border: "5px solid #440381", backgroundColor: '#EDE7D9',position: 'fixed', top:'8%', right:"10%" }}>
    <Container>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mt-3">Titulo</Form.Label>
                  <Form.Control placeholder="Titulo Noticia" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Cuerpo</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                  
                </Form.Group>
                <Button className="mb-3" type="submit" style={{  backgroundColor: '#440381' }}>
    Publicar
  </Button>
              </Form>
              
              </Container>
            </Card>
  );
}

export default PublicarNoticia;

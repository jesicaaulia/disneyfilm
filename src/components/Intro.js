import {Container, Col, Row, Button} from "react-bootstrap"

const Intro =() =>{
    return(
        <div className='intro'>
          <Container className='text-white text-center d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
                <div className='title'>Have Your Time </div>
               <div className='title'>with Disney Films by Jesica</div>
               <div className='introButton mt-4 text-center'>
                  <Button variant='dark' href='#trending'> Lihat semua list</Button>
               </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro
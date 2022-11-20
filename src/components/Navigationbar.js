import {Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar = () => {
    return(
      <div>
        <Navbar variant="dark">
           <Container>
              <Navbar.Brand href="/"> Disney Films by Jesica</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending"> TRENDING </Nav.Link>
                    <Nav.Link href="#princess"> PRINCESS </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </div>
    )
}

export default Navigationbar
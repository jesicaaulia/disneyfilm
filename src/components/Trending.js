import {Card,Container,Row,Col} from "react-bootstrap"
import frozenImage from "../style/assets/images/trending/frozen.jpg"
import mermaidImage from "../style/assets/images/trending/mermaid.jpg"
import princessfrogImage from "../style/assets/images/trending/princessfrog.jpg"
import moanaImage from "../style/assets/images/trending/moana.jpg"
import redshoesImage from "../style/assets/images/trending/redshoes.jpg"
import tangledImage from "../style/assets/images/trending/tangled.jpg"

const Trending =() =>{
    return(
        <div>
        <Container>
            <br/> <h1 className="text-dark" id="trending"> Trending Movies</h1> <br/>
            <Row>
                <Col md={4} className="movieWrapper" > 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={frozenImage} alt="Frozen Movies" className="images"/>
                          <Card.Title className="text-center">FROZEN</Card.Title>
                            <Card.Text className="text-left">
                            Princess Elsa and Princess Anna, Olaf, Svent, Christoff
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={mermaidImage} alt="Mermaid Movies" className="images"/>
                          <Card.Title className="text-center">MERMAID</Card.Title>
                            <Card.Text className="text-left">
                                Restrict Love between a mermaid princess and a human prince
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={princessfrogImage} alt="Princess and The Frog Movies" className="images"/>
                          <Card.Title className="text-center">PRINCESS AND THE FROG</Card.Title>
                            <Card.Text className="text-left">
                            The Frog turned into a handsome Prince because the princess kisses
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={moanaImage} alt="Moana Movies" className="images"/>
                          <Card.Title className="text-center">MOANA</Card.Title>
                            <Card.Text className="text-left">
                            The Island dying because human fault. Princess Moana beat Teka and bring back the peace 
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={redshoesImage} alt="Red Shoes Movies" className="images"/>
                          <Card.Title className="text-center">RED SHOES</Card.Title>
                            <Card.Text className="text-left">
                            An ugly girl become the most beautiful girl in the kingdom because she use a magical red shoes
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={tangledImage} alt="Tangled Movies" className="images"/>
                          <Card.Title className="text-center">TANGLED</Card.Title>
                            <Card.Text className="text-left">
                            A beautifull princess who has been missing for 17 years was locked by a whiches in a tower
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    ) 
}
export default Trending


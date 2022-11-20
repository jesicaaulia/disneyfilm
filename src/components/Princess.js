import {Card,Container,Row,Col} from "react-bootstrap"
import aladinImage from "../style/assets/images/princess/aladin.jpg"
import beautyntbImage from "../style/assets/images/princess/beautyntb.jpg"
import cinderellaImage from "../style/assets/images/princess/cinderella.jpg"
import sleepingbeautyImage from "../style/assets/images/princess/sleepingbeauty.jpg"
import snowwhiteImage from "../style/assets/images/princess/snowwhite.jpg"
import wulanImage from "../style/assets/images/princess/wulan.jpg"

const Princess =() =>{
    return(
        <div>
        <Container>
            <br/> <h1 className="text-white" id="princess"> Princess Movies</h1> <br/>
            <Row>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={aladinImage} alt="Aladin Movies" className="images"/>
                          <Card.Title className="text-center">ALADIN</Card.Title>
                            <Card.Text className="text-left">
                            Princess Elsa and Princess Anna, Olaf, Svent, Christoff
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 10 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={beautyntbImage} alt="Beauty and The Beast Movies" className="images"/>
                          <Card.Title className="text-center">BEAUTY AND THE BEAST</Card.Title>
                            <Card.Text className="text-left">
                                Restrict Love between a beautyntb princess and a human prince
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={cinderellaImage} alt="Princess and The Frog Movies" className="images"/>
                          <Card.Title className="text-center">CINDERELLA</Card.Title>
                            <Card.Text className="text-left">
                            Cinderella went to the royal party with stunning gown and glass shoes because a Fairy helping her
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 7 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={sleepingbeautyImage} alt="Sleeping Beauty Movies" className="images"/>
                          <Card.Title className="text-center">SLEEPING BEAUTY</Card.Title>
                            <Card.Text className="text-left">
                            The Island dying because human fault. Princess Sleeping Beauty beat Teka and bring back the peace 
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 13 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={snowwhiteImage} alt="Snow White Movies" className="images"/>
                          <Card.Title className="text-center">SNOW WHITE</Card.Title>
                            <Card.Text className="text-left">
                            An ugly girl become the most beautiful girl in the kingdom because she use a magical red shoes
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper"> 
                    <Card className="bg-dark text-white movieImage m-2 p-2">
                        <Card.Img src={wulanImage} alt="Wulan Movies" className="images"/>
                          <Card.Title className="text-center">WULAN</Card.Title>
                            <Card.Text className="text-left">
                            A beautifull princess who has been missing for 17 years was locked by a whiches in a tower
                            </Card.Text>
                          <Card.Text className="text-left">Last updated 9 mins ago</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    ) 
}
export default Princess
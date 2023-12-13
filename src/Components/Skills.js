import { Col, Container, Row } from "react-bootstrap";
import Coursel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import cat4 from '../assets/img/cat4.jpg'
import cat3 from '../assets/img/cat3.jpeg'
import cat2 from '../assets/img/cat2.jpeg'

export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
            <section id="Decoraciones">
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <h2>Decoraciones</h2>
                                <Coursel responsive={responsive} infinite={true}>
                                    <div>
                                        <img src={cat4} alt="image"/>
                                    </div>
                                    <div>
                                        <img src={cat3} alt="image"/>
                                    </div>
                                    <div>
                                        <img src={cat2} alt="image"/>
                                    </div>
                                </Coursel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
      )
}
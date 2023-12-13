import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import santa from '../assets/img/santa.png';
import { ArrowRightCircle } from "react-bootstrap-icons";
import imagenOrigenNavidad from '../assets/img/imagenOrigenNavidad.jpg';
import historia from '../assets/img/historia.jpg';
import imagenOferta1 from '../assets/img/imagenOferta1.jpg';
import imagenOferta2 from '../assets/img/imagenOferta2.jpeg';



export const Banner = () =>{

    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setsiDeleting] = useState(false);
    const toRotate = ["Decoraciones", "Luces", "Regalos", "Renos", "Pesebres", "Villancicos", "Nieve", "Tradiciones", "Villancicos", "Paz"];
    const [text, setText] = useState("");
    const tiempo = 2000;
    const [delta, setDelta]=useState(300 - Math.random() * 100);


    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)}; 
    },[text])
    
    const tick =()=>{
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0, text.length-1) : fulltext.substring(0, fulltext.length+1);
    
        setText(updateText);
    
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
    
        if(!isDeleting && updateText === fulltext){
            setsiDeleting(true);
            setDelta(tiempo);
    
        }else{
            if(isDeleting && updateText === ''){
                setsiDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500)
            }
        }
        
    }
    
    return(
        <section>
            <Container className="banner" id="home">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={17}>
                    <span className="tagline">Descubre la Navidad</span>
                    <h1>{'Despierta tu espiritu navideño con '}
                    <br></br>
                    <span className="wrap">{text}</span>
                    <br></br>
                    </h1>
                    <p>En esta época mágica del año, sumérgete en la calidez 
                        y alegría de las festividades, mientras exploras nuestras
                         ofertas excepcionales que capturan la esencia de las 
                         tradiciones navideñas: desde la exquisita decoración que 
                         transformará tu hogar en un rincón festivo, hasta los 
                         regalos cuidadosamente seleccionados que harán brillar 
                         los ojos de tus seres queridos, cada artículo cuidadosamente
                        elegido para elevar la magia de la Navidad a nuevos niveles.
                        Descubre el placer de regalar y recibir con nuestra cuidadosa 
                        selección de productos que abrazan la esencia de la temporada,
                        añadiendo un toque de encanto y elegancia a tus celebraciones.
                        Bienvenido al lugar donde la Navidad cobra vida a través de productos
                        que no solo decoran tu entorno, sino que también te envuelven en el
                        espíritu festivo, creando recuerdos inolvidables en cada rincón de
                        tu casa.</p>
                    <button>Mas Informacion<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col>
                        <img src={santa} alt="header" className="img2"/>
                    </Col>
                </Row>
                <Row id="skills">
                </Row>
                <br/>
            </Container>
            <Container>
            <Row id="Origen">
                    <Col xs={12} md={6}>
                        <h2>El Origen de la Navidad</h2>
                        <p>La Navidad tiene un origen complejo que combina festividades paganas y la conmemoración del nacimiento de Jesucristo en el cristianismo. A lo largo de los siglos, ha incorporado tradiciones como el belén, villancicos y la figura de Santa Claus. A pesar de reformas religiosas y cambios culturales, la Navidad persiste como una celebración global, marcada por la generosidad, el intercambio de regalos y la reunión familiar. Su evolución refleja una fusión única de influencias religiosas, históricas y comerciales.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={imagenOrigenNavidad} alt="Origen de la Navidad" />
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container>
            <Row id="Significado" className="significado-row">
                        <Col xs={12} md={6}>
                            <h2>Significado de la Navidad</h2>
                            <p>La Navidad va más allá de las luces brillantes y los regalos debajo del árbol. Es un momento de reflexión y celebración, donde la esencia de la temporada se centra en la paz, la esperanza y el amor.</p>
                            <p>Es la conmemoración del nacimiento de Jesucristo, un símbolo de esperanza y salvación para muchas personas alrededor del mundo. La Navidad nos invita a reflexionar sobre la importancia de la bondad, la generosidad y el compartir con aquellos que amamos.</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>Costumbres Navideñas</h2>
                            <p>Las costumbres navideñas varían en todo el mundo, pero comparten la idea de la unión y la alegría. Desde la decoración del árbol hasta el intercambio de regalos, cada tradición tiene un significado especial.</p>
                            <p>Los villancicos, la preparación de comidas especiales y el compartir momentos con seres queridos son prácticas que refuerzan el espíritu navideño. La solidaridad y la compasión también son valores fundamentales en esta temporada.</p>
                        </Col>
            </Row>

            </Container>
            <br></br>
            <Container>
                        <Row id="Tradiciones">
            <Col xs={12} md={6}>
                <h2>Tradiciones Navideñas</h2>
                <p>Explora las diversas tradiciones navideñas que han perdurado a lo largo del tiempo...</p>
                <p>Desde la decoración del árbol de Navidad hasta las deliciosas comidas festivas...</p>
            </Col>
            <Col xs={12} md={6}>
                <iframe
                title="Tradiciones Navideñas"
                width="100%"
                height="315"
                src="https://youtu.be/lMnPAyUXF8E?si=tyonjjzIssHdPUsI"
                frameborder="0"
                allowfullscreen
                ></iframe>
            </Col>
            </Row>
            </Container>
            <br/>
            <Container>
            <Row id="Historia">
                <Col xs={12} md={6}>
                    <h2>Historia de la Navidad</h2>
                    <p>La historia de la Navidad tiene raíces profundas que se entrelazan con diversas tradiciones y celebraciones a lo largo del tiempo. Originalmente vinculada a festividades paganas de invierno, la Navidad adquirió su significado cristiano en el siglo IV con la elección del 25 de diciembre para conmemorar el nacimiento de Jesucristo. A lo largo de los siglos, ha evolucionado incorporando elementos como el árbol de Navidad, los regalos y la figura de Santa Claus. La celebración persiste como una fusión única de influencias culturales, religiosas y comerciales, marcada por la generosidad, la unión familiar y la expresión de buenos deseos.</p>
                </Col>
                <Col xs={12} md={6}>
                    <img src={historia} alt="Historia de la Navidad" style={{ width: '100%', height: 'auto' }} />
                </Col>
            </Row>
            </Container>
            <br/>
            <Container>
                            <Row id="Compras">
                <Col xs={12} md={6}>
                    <h2>Realiza tus Compras Navideñas</h2>
                    <p>Realiza tus compras y llevate el espitu navideño contigo</p>
                </Col>
                <Col xs={12} md={6}>
                    <form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="direccion">Dirección de Envío:</label>
                        <textarea className="form-control" id="direccion" name="direccion" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tarjeta">Número de Tarjeta de Crédito:</label>
                        <input type="text" className="form-control" id="tarjeta" name="tarjeta" pattern="[0-9]{16}" placeholder="1234 5678 9012 3456" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="vencimiento">Fecha de Vencimiento:</label>
                        <input type="text" className="form-control" id="vencimiento" name="vencimiento" placeholder="MM/AA" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required />
                        </div>

                        <div className="form-group col-md-6">
                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" className="form-control" id="cvv" name="cvv" pattern="[0-9]{3,4}" required />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Realizar Compra</button>
                    </form>
                </Col>
                </Row>
            </Container>
            <br></br>
            <Container>
            <Row id="Ofertas" className="ofertas-row">
                    <Col xs={12} md={6}>
                        <h2>¡Ofertas Navideñas!</h2>
                        <p>Descubre nuestras increíbles ofertas para hacer tus compras navideñas aún más especiales...</p>
                        <p>Desde decoraciones festivas hasta regalos cuidadosamente seleccionados, encuentra productos exclusivos a precios irresistibles.</p>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-around">
                        <div className="oferta-item">
                        <img src={imagenOferta1} alt="Oferta 1" />
                        <p>Producto en oferta</p>
                        <p>Precio: $20.00</p>
                        <button>Ver Oferta</button>
                        </div>

                        <div className="oferta-item">
                        <img src={imagenOferta2} alt="Oferta 2" />
                        <p>Producto en oferta</p>
                        <p>Precio: $70.00</p>
                        <button>Ver Oferta</button>
                        </div>
                    </Col>
            </Row>
            </Container>
            <br></br>
            <Container>
            <Row id="Nosotros">
                    <Col xs={12} md={6} className="datos-estudiante">
                        <h2>Datos del Estudiante</h2>
                        <ul>
                        <li><strong>Nombre:</strong> [Julian Wilmer]</li>
                        <li><strong>Apellidos:</strong> [Velasquez Quispe]</li>
                        <li><strong>Carrera:</strong> [Informática]</li>
                        <li><strong>Matrícula:</strong> [1845204]</li>
                        <li><strong>Email:</strong> [velasquezjulian404@gmail.com]</li>
                        <li><strong>Carnet de Identidad:</strong> [6758062 LP]</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} className="datos-materia">
                        <h2>Datos de la Materia</h2>
                        <ul>
                        <li><strong>Nombre de Docente:</strong> [Ph.D.Marisol Tellez Ramirez]</li>
                        <li><strong>Horario:</strong> [16.00 a 18:00]</li>
                        <li><strong>Paralelo:</strong> ["D"]</li>
                        <li><strong>Universidad:</strong> [Universidad Mayor de San Andres U.M.S.A]</li>
                        </ul>
                    </Col>
            </Row>
            </Container>
            <br></br>
            <Container>
            <Row id="Contacto" className="contacto-row">
                <Col xs={12} md={6}>
                    <h2>Contacto</h2>
                    <p>¡Estamos aquí para ayudarte! Ponte en contacto con nosotros para cualquier pregunta o consulta.</p>
                </Col>
                <Col xs={12} md={6}>
                    <h3>Ubicación</h3>
                    <li><strong>Numero de Teléfono:</strong> [72658224]</li>
                    <li><strong>Horario:</strong> [09.00 a 21:00]</li>
                    <li><strong>Correo Electrónico:</strong> [christmasshop@gmail.com]</li>
                    <p>Visítanos en nuestra ubicación:</p>
                    <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer">
                    [Christmas Shoop]
                    </a>
                </Col>
            </Row>

            </Container>
            
        </section>
    );

}




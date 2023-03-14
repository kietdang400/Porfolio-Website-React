import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import project1 from './IMG/Project1.JPG';
import project2 from './IMG/Project2.JPG';
import resume from './IMG/Resume.JPG';
import introBackground from './IMG/introBackground.gif';
import profilePic from './IMG/Profile Pic.JPG';
import { Col, Row, Button, Modal, ModalBody} from 'react-bootstrap';





function App() {

  /*NavBar*/ 
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
       setShow(false) 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


/*Tab*/ 
const[tabbs,setTab]=useState('');
const[infoHeader,setInfoHeader]=useState(<div><h3>Account Manager <h3 className="work">@J.I.P Associates</h3></h3></div>);
const[infoDate,setInfoDate]=useState(<div>March-Aug 2020</div>);
const[infoBullet,setInfoBullet]=useState(<div>
  <ul><li className="list mt-2">Managed events to help promote brands and generate +300 leads with direct marketing and a 
   customer-centric mindset.
</li>
<li className="list mt-2">Trained 5 new hires on sales fundamentals within the span of 3 months.</li>
<li className="list mt-2">Collaborated with other Account Managers on effective strategies to maximize leads.</li>
<li className="list mt-2">Finished 2nd in the country with 57 sales in a week against multiple marketing firms.</li>
</ul>
</div>);

useEffect(()=>{

  switch(tabbs){
    case 'JIP':
    setInfoHeader(<div><h3> Account Manager <h3 className="work">@J.I.P Associates</h3></h3></div>);
    setInfoDate(<div>March-Aug 2020</div>)
    setInfoBullet(<div>
  <ul><li className="list mt-2">Managed events to help promote brands and generate +300 leads with direct marketing and a 
   customer-centric mindset.
</li>
<li className="list mt-2">Trained 5 new hires on sales fundamentals within the span of 3 months.</li>
<li className="list mt-2">Collaborated with other Account Managers on effective strategies to maximize leads.</li>
<li className="list mt-2">Finished 2nd in the country with 57 sales in a week against multiple marketing firms.</li>
</ul>
</div>)
    break;
    case 'HiMyLink':
    setInfoHeader(<div><h3>Social Media Marketing <h3 className="work">@HiMyLink</h3></h3></div>);
    setInfoDate(<div>April-Sep 2021</div>);
     setInfoBullet(
     <div >
      <ul>
        <li className="list mt-2">Creating, editing, and writing social media content daily for Twitter and Instagram using tools such as Canva.</li>
        <li className="list mt-2">Monitor analytics to identify viable ideas, trends, and growth patterns to promote brand awareness.</li>
        <li className="list mt-2">Participate in brainstorming sessions to share ideas, define strategy, and be instrumental in bringing them to life.</li>
        </ul>
        </div>)
    break;
    case'Stripe':
     setInfoHeader(<div><h3>Frontend Developer Intern <h3 className="work">@Stripe</h3></h3></div>);
     setInfoDate(<div>June-Sep 2022</div>);
      setInfoBullet(
      <div>
        <ul>
          <li className="list mt-2">Built from scratch data visualization app for users to query and view merchant onboarding data with React.js.</li>
          <li className="list mt-2">Architect, build, and maintain the foundational frontend platform used for product engineering teams.</li>
          <li className="list mt-2">To strategize design choices according to user experience.</li>
          </ul>
          </div>)
     break;
  }
},[tabbs])

//modal
const[Modall,setModal]=useState(false)
console.log(window.innerWidth)

  return (
    <div className="App">
<header>
{Modall&&
  <div
      className="modal show"
      style={{ display: 'block', position: 'absolute' }}
    >
      <Modal.Dialog className="modal-dia">
        <Modal.Header closeButton onClick={()=>{setModal(false)}}>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         
              <img src={resume} alt="resume"></img>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" className="btn btn-danger" onClick={()=>{setModal(false)}}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
}
 <Navbar id="navbar" className={` ${show? 'hidden':'active'} fixed-top `} expand="lg">
      <Container>
        <Navbar.Brand className="Navbar-brand" href="#home">Kiet Dang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Nav mr-auto">
            <Nav.Link className="content" href="#about">About</Nav.Link>
            <Nav.Link className="content" href="#experience">Experience</Nav.Link>
            <Nav.Link className="content" href="#projects">Project</Nav.Link>
            <Nav.Link className="content" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
<main>
  <section id="intro" className="Intro">
    <Container className="mt-5">
      <div className="d-flex justify-content-left mb-3"><h5 className="Introduction">Hello, my name is</h5></div>
      <div className="d-flex justify-content-left mb-3"><h1 className="intro-title">Kiet Dang.</h1></div>
      <div className="d-flex justify-content-left mb-3"><h1 className="intro-title"> I Build Things For Fun.</h1></div>
      <Row>
        <Col sm={6}>
           <div className="d-flex justify-content-left mb-3">
        <p className="intro-summary">
        I am a self-taught web developer. Specializing in building (and occasionally designing) exceptional digital experiences. 
        Currently, learning more technology and gaining more experience to improve my front-end developer skills. 
        </p></div>
        </Col>
      </Row>
      <div>
        <Button className="bg-info" onClick={()=>{setModal(true)}}>Resume</Button>
      </div>
    </Container>
  </section>
  <section id="about" className="About">
    <Container>
      <h1 className="title">About Me</h1>
      <div className="line-1"></div>
      <Row>
        <Col className="about-content" md={5}>
         <div><p>Hi, my name is Kiet and I like building things on the internet. My interest in web development started in my second year of college when I saw my friend coding a website for his school project.</p></div>
      <div><p> After that moment, I started learning the basics like HTML&CSS then progressively learned the fundamentals of Java Script where I got my Algorithms and Data Structure Certificate on freeCodeCamp. Currently, I am building projects that will challenge and help me hone my skills.</p></div>
      <div><p> Here are a few technologies that I have been working with:</p></div>
        </Col>
        <Col md={7}>
          <img id="profile-picture" src={profilePic} alt="profile picture"></img>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
        <ul>
        <li className="list">JavaScript</li>
        <li className="list">React</li>
        <li className="list">HTML/CSS</li>
        </ul>
        </Col>
        <Col md={3}>
        <ul>
        <li className="list">Axios</li>
        <li className="list">Bootstrap</li>
        <li className="list">Node.js</li>
        </ul>
        </Col>
      </Row>
    </Container>
  </section>

   <section id="experience" className="Experience">
    <Container>
      <div><h1 className="title mb-5">Where I worked</h1></div>
    <div className="line-1"></div>
      <Row className="tab-container">
    <Col md={6}>
  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <Button className="nav-link bg-info mb-3" id="v-pills-home-tab" data-toggle="pill" onClick={()=>{setTab("JIP")}} role="tab">J.I.P Associates</Button>
  <Button className="nav-link bg-info mb-3" id="v-pills-profile-tab" data-toggle="pill" onClick={()=>{setTab("HiMyLink")}} role="tab">HiMyLink</Button>
  <Button className="nav-link bg-info mb-3" id="v-pills-messages-tab" data-toggle="pill" onClick={()=>{setTab("Stripe")}} role="tab">Stripe</Button>
</div>
</Col> 

<Col md={6}>
<div className="tab-content" id="v-pills-tabContent">
  <div>{infoHeader}</div>
  <div className="date">{infoDate}</div>
  <div>{infoBullet}</div>
</div>
</Col>
</Row>

    </Container>
  </section>

   <section id="projects" className="Projects">
    <Container>
      <div className="mb-5"><h1 className="title">Something's I have Built</h1></div>
      <div class="line-1"></div>
      <Row className="project">
        {window.innerWidth>=480&&<Col md={4}><img id="pokedex-img"src={project1} alt="Photo of Pokedex Project"></img></Col>}
        <Col md={5} className="project-1">
          <div><h5>featured project</h5></div>
          <div className="project-name mb-4"><h2>Pokedex</h2></div>
          <div className="card">
  <div className="card-body">
    <p className="card-text">A highly responsive web application using React.js that allows users to search and browse information on all Pokemon species with ease. Includes Pokemon attributes, evolutions, and movesets.</p>
  </div>
</div>
<div className="mt-3"><p>React.js&ensp;&ensp;&ensp;Pokemon API&ensp;&ensp;&ensp;CSS&ensp;&ensp;&ensp;Axios</p></div>
<div><a href="https://github.com/kietdang400/pokedexReact"><i class="bi bi-github"></i></a>&ensp;&ensp;<a href="https://github.com/kietdang400/pokedexReact"><i class="bi bi-box-arrow-up-right"></i></a></div>
        </Col>
      </Row>

        <Row>
        <Col md={5}>   
        <div><h5>featured project</h5></div>
          <div className="project-name mb-4"><h2>Rick and Morty Location</h2></div>
          <div class="card">
  <div className="card-body">
    <p className="card-text"> A responsive web application that revolves around the locations featured in the famous animated series, Rick and Morty. The website gives access to information such as the episodes in which the location appeared and character details associated with that location. The application is a great resource for fans who want to dive deeper into the world of Rick and Morty and explore its rich lore.</p>
  </div>
</div>
<div className="mt-3"><p>React.js&ensp;&ensp;&ensp;Rick&Morty API&ensp;&ensp;&ensp;CSS&ensp;&ensp;&ensp;React Spring&ensp;&ensp;&ensp;Axios</p></div>
<div><a href="https://github.com/kietdang400/Rick-Morty"><i class="bi bi-github"></i></a>&ensp;&ensp;<a href="https://github.com/kietdang400/Rick-Morty"><i class="bi bi-box-arrow-up-right"></i></a></div>
</Col>
{window.innerWidth>=480&&<Col md={7}><img id="RickAndMorty-img" src={project2} alt="Photo of Rick and Morty Location Project"></img></Col>}
      </Row>

    </Container>
  </section>

  <section id="contact" className="Contact">
    <Container className="contact">
    <div><h3 className="title text-center mb-3">What's Next?</h3></div>
<div className="text-center mb-3"><h1>Get In Touch</h1></div>
<div className="text-center"><p>I am currently looking for any open opportunities to expand my skills. My inbox is open if you have any questions or just want to talk. I will try to get back to you as soon as possible. </p></div>
  <div className="text-center mb-5"><Button className="bg-info" href='mailto: kdgdang@ucdavis.edu'>Say Hi</Button></div>
  </Container>
  </section>
  {window.innerWidth>=801&&<div id="fixed-line1">
    <ul className="fixed-list">
    <li className='mb-3'>
     <a href="https://github.com/kietdang400"> <i class="bi bi-github"></i></a></li>
      <li className='mb-3'><a href="https://www.linkedin.com/in/kiettdang/"><i class="bi bi-linkedin"></i></a>
      </li><li className='mb-3'><i class="bi bi-instagram"></i></li>
      </ul></div>}
  {window.innerWidth>=801&&<div id="fixed-line2"><a className="fixed-email" href = "mailto: kdgdang@ucdavis.edu">kdgdang@ucdavis.edu</a></div>}
</main>
<footer>
  <Container className="footer-container">
    <div ><p>Designed and Built by Kiet Dang</p></div>
    <div><a href="https://github.com/kietdang400/Porfolio-Website-React/tree/main"><i class="bi bi-star"></i><i class="bi bi-git"></i></a></div>
  </Container>
</footer>
    </div>
  );
}

export default App;

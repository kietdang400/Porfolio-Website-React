import React,{useState,useEffect,useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import project1 from './IMG/Project1.JPG';
import project2 from './IMG/Project2.JPG';
import resume from './IMG/Resume.JPG';
import profilePic from './IMG/Profile Pic.JPG';
import { Col, Row, Button, Modal, ModalBody} from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';








function App() {

/*section position*/

const sectionAboutRef = useRef(null);

  const handleGetPositionAbout = () => {
    const divPosition = sectionAboutRef.current.getBoundingClientRect();
    
  };

  const sectionExperienceRef = useRef(null);

  const handleGetPositionExperience = () => {
    const divPosition = sectionExperienceRef.current.getBoundingClientRect();
  
  };

  useEffect(()=>{
handleGetPositionAbout();
handleGetPositionExperience();
  },[])

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
      case'GBCS':
     setInfoHeader(<div><h3>Frontend Developer Intern <h3 className="work">@GBCS Group</h3></h3></div>);
     setInfoDate(<div>May-Sep 2023</div>);
      setInfoBullet(
      <div>
        <ul>
          <li className="list mt-2">Website revamp for various internal projects using React.js</li>
          <li className="list mt-2">Collaborated effectively with teammates, fostering communication, accountability, knowledge sharing, and continuous improvement for successful project outcomes.</li>
          <li className="list mt-2">To strategize design choices according to user experience.</li>
          </ul>
          </div>)
     break;
  }
},[tabbs])

//modal
const[Modall,setModal]=useState(false)
console.log(window.innerWidth);

//animation
const [flip,setFlip]=useState(false);
const[aboutTop,setAboutTop]=useState(0);
const[experienceTop,setExperienceTop]=useState(0);
const[projectsTop,setProjectsTop]=useState(0);
const[contactTop,setContactTop]=useState(0);
const[projectsTopOne,setProjectsTopOne]=useState(0);
const[projectsTopTwo,setProjectsTopTwo]=useState(0);
const[projectsTopThree,setProjectsTopThree]=useState(0);
const[hoverUpOne,setHoverUpOne]=useState(false);
const[hoverUpTwo,setHoverUpTwo]=useState(false);
const[hoverUpThree,setHoverUpThree]=useState(false);
const[hoverLeft,setHoverLeft]=useState(false);

const [scrollPosition, setScrollPosition] = useState(0);

const sectionRefAbout = useRef(null);
const sectionRefExperience = useRef(null);
const sectionRefProjects = useRef(null);
const sectionRefProjectsOne=useRef(null);
const sectionRefProjectsTwo=useRef(null);
const sectionRefProjectsThree=useRef(null);
const sectionRefContact=useRef(null);

const props=useSpring({
  to:{ opacity:1},
  from:{opacity:0},
  reset:true,
  reverse:flip,
  delay:700,
});

//Getting section Position
const getPositionAbout = () => {
    const { top } = sectionRefAbout.current.getBoundingClientRect();
    setAboutTop(top);
  };

  const getPositionExperience = () => {
    const { top } = sectionRefExperience.current.getBoundingClientRect();
    setExperienceTop(top);
  };

   const getPositionProjects = () => {
    const { top } = sectionRefExperience.current.getBoundingClientRect();
    setProjectsTop(top);
  };

   const getPositionContact = () => {
    const { top } = sectionRefContact.current.getBoundingClientRect();
    setContactTop(top);
  };


  const getPositionProjectsOne = () => {
    const { top } = sectionRefProjectsOne.current.getBoundingClientRect();
    setProjectsTopOne(top);
  };

  const getPositionProjectsTwo = () => {
    const { top } = sectionRefProjectsTwo.current.getBoundingClientRect();
    setProjectsTopTwo(top);
  };

  const getPositionProjectsThree = () => {
    const { top } = sectionRefProjectsThree.current.getBoundingClientRect();
    setProjectsTopThree(top);
  };


useEffect(() => {

getPositionAbout();
getPositionExperience();
getPositionProjects();
getPositionProjectsOne();
getPositionProjectsTwo();
getPositionProjectsThree();
getPositionContact();

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

//End of Getting Section Position


//animation style
  const fadeAnimationAbout = useSpring({
    opacity: scrollPosition > aboutTop-100 ? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 }
  });

  const fadeAnimationExperience = useSpring({
    opacity: scrollPosition > experienceTop-100 ? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 }
  });

  const fadeAnimationProjects = useSpring({
    opacity: scrollPosition > projectsTop ? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 }
  });

  const fadeAnimationContact = useSpring({
    opacity: scrollPosition+300>contactTop? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 },
  });

const slideProjectTransitionOne=useSpring({
transform:  scrollPosition > projectsTopOne?'translateX(5%)':'translateX(130%)',
    from: { transform: 'translateX(120%)' },
    config: { tension: 200, friction: 20 }
});

const slideProjectTransitionTwo=useSpring({
  transform:  scrollPosition > projectsTopTwo-100?'translateX(-5%)':'translateX(-130%)',
    from: { transform: 'translateX(-120%)' },
    config: { tension: 200, friction: 20 }
});

const slideProjectTransitionThree=useSpring({
  transform:  scrollPosition > projectsTopThree-100?'translateX(5%)':'translateX(130%)',
    from: { transform: 'translateX(120%)' },
    config: { tension: 200, friction: 20 }
});


const slideUpIconOne=useSpring({
transform:hoverUpOne?'translateY(-15%)': 'translateY(0%)',
from: { transform: 'translateY(0%)' },
config: { tension: 200, friction: 20 }
});

const slideUpIconTwo=useSpring({
transform:hoverUpTwo?'translateY(-15%)': 'translateY(0%)',
from: { transform: 'translateY(0%)' },
config: { tension: 200, friction: 20 }
});

const slideUpIconThree=useSpring({
transform:hoverUpThree?'translateY(-15%)': 'translateY(0%)',
from: { transform: 'translateY(0%)' },
config: { tension: 200, friction: 20 }
});

const slideLeftIcon=useSpring({
transform:hoverLeft?'translateX(-5%)': 'translateX(0%)',
from: { transform: 'translateY(0%)' },
config: { tension: 200, friction: 20 }
});


  return (
    <div className="App">
<header>
{Modall&&
  <div
      className="modal show"
      style={{ display: 'block', position: 'absolute' }}
    >

      <Modal.Dialog className="modal-dia">
        <Modal.Header className="modal-header" closeButton onClick={()=>{setModal(false)}}>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         
              <img className="resume" src={resume} alt="resume"></img>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" className=" hide-modal btn btn-danger" onClick={()=>{setModal(false)}}>Close</Button>
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
    <animated.div style={props}>
    <Container className="mt-5" >
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
</animated.div>
  </section>

  
  <section id="about" className="About" ref={sectionAboutRef}>
    <animated.div style={fadeAnimationAbout}>
    <Container ref={sectionRefAbout}>
      <div className="text-center"><h1 className="title"><u>About Me</u></h1></div>
      {/*<div className="line-1"></div>*/}
      <Row>
        <Col className="about-content" md={5}>
         <div><p>Hi, my name is Kiet and I like building things on the internet. My interest in web development started in my second year of college when I saw my friend coding a website for his school project.</p></div>
      <div><p> After that moment, I started learning the basics like HTML&CSS then progressively learned the fundamentals of Java Script where I got my <a href='https://www.freecodecamp.org/certification/KietDang/javascript-algorithms-and-data-structures' alt="certificate" style={{color:'#62a4ab'}}>Algorithms and Data Structure Certificate on freeCodeCamp</a>. Currently, I am building projects that will challenge and help me hone my skills.</p></div>
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
    </animated.div>
  </section>

   <section id="experience" className="Experience" ref={sectionExperienceRef}>
    <animated.div style={fadeAnimationExperience}>
    <Container className="experience-containter" ref={sectionRefExperience} >
      <div className="text-center"><h1 className="title mb-5"><u>Where I worked</u></h1></div>
    {/*<div className="line-1"></div>*/}
      <Row className="tab-container">
    <Col md={6}>
  <div className="nav flex-column nav-pills content-experience1" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <Button className="nav-link bg-info mb-3" id="v-pills-home-tab" data-toggle="pill" onClick={()=>{setTab("JIP")}} role="tab">J.I.P</Button>
  <Button className="nav-link bg-info mb-3" id="v-pills-profile-tab" data-toggle="pill" onClick={()=>{setTab("HiMyLink")}} role="tab">HiMyLink</Button>
  <Button className="nav-link bg-info mb-3" id="v-pills-messages-tab" data-toggle="pill" onClick={()=>{setTab("Stripe")}} role="tab">Stripe</Button>
  <Button className="nav-link bg-info mb-3" id="v-pills-messages-tab" data-toggle="pill" onClick={()=>{setTab("GBCS")}} role="tab">GBCS</Button>
</div>
</Col> 

<Col md={6}>
<div className="tab-content content-experience2" id="v-pills-tabContent">
  <div>{infoHeader}</div>
  <div className="date">{infoDate}</div>
  <div id="info">{infoBullet}</div>
</div>
</Col>
</Row>

    </Container>
    </animated.div>
  </section>




   <section id="projects" className="Projects" ref={sectionRefProjects}>
    <Container>

<animated.div style={fadeAnimationProjects}>
      <div className="mb-5 text-center"><h1 className="title"><u>Something's I have Built</u></h1></div>
      {/*<div class="line-1"></div>*/}
</animated.div>

<animated.div style={slideProjectTransitionOne}>
      <Row className="project" ref={sectionRefProjectsOne} >
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
</animated.div>

<animated.div style={slideProjectTransitionTwo}>
        <Row ref={sectionRefProjectsTwo}>
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
{window.innerWidth>=480&&<Col md={7}><img id="RickAndMorty-img" className="mb-5" src={project2} alt="Rick and Morty Location Project"></img></Col>}
      </Row>
</animated.div>

<animated.div style={slideProjectTransitionThree}>
      <Row className="project" ref={sectionRefProjectsThree}>
        {window.innerWidth>=480&&<Col md={4}><img id="pokedex-img" className="mt-5"src={project1} alt="Pokedex Project"></img></Col>}
        <Col md={5} className="project-1">
          <div><h5>featured project</h5></div>
          <div className="project-name "><h2>Intrusive Box</h2></div>
          <div className="card">
  <div className="card-body">
    <p className="card-text">Developed a responsive Full-Stack social media app called Intrusive Box enabling user sign-up, posting intrusive thoughts, chatting with friends, and editing profiles.</p>
  </div>
</div>
<div className="mt-3"><p>React.js&ensp;&ensp;&ensp;MongoDB&ensp;&ensp;&ensp;MUI&ensp;&ensp;Express&ensp;&ensp;Node.js</p></div>
<div><a href="https://github.com/kietdang400/Intrusive-Thoughts"><i class="bi bi-github"></i></a>&ensp;&ensp;<a href="https://github.com/kietdang400/Intrusive-Thoughts"><i class="bi bi-box-arrow-up-right"></i></a></div>
        </Col>
      </Row>
</animated.div>

    </Container>
  </section>






  <section id="contact" className="Contact" ref={sectionRefContact}>
    <animated.div style={fadeAnimationContact}>
    <Container className="contact" >
    <div><h3 className="title text-center mb-3">What's Next?</h3></div>
<div className="text-center mb-3"><h1>Get In Touch</h1></div>
<div className="text-center"><p>I am currently looking for any open opportunities to expand my skills. My inbox is open if you have any questions or just want to talk. I will try to get back to you as soon as possible. </p></div>
  <div className="text-center mb-5"><Button className="bg-info" href='mailto: kdgdang@ucdavis.edu'>Say Hi</Button></div>
  </Container>
   </animated.div>
  </section>

  {window.innerWidth>=801&&<div id="fixed-line1">
    <ul className="fixed-list">

<animated.div style={slideUpIconOne}>
    <li className='mb-3' onMouseOver={(e)=>{setHoverUpOne(true);}} onMouseOut={()=>setHoverUpOne(false)}>
     <a href="https://github.com/kietdang400"> <i class="bi bi-github"></i></a>
     </li>
</animated.div>

<animated.div style={slideUpIconTwo}>
      <li className='mb-3'  onMouseOver={(e)=>{setHoverUpTwo(true);}} onMouseOut={()=>setHoverUpTwo(false)}>
        <a href="https://www.linkedin.com/in/kiettdang/"><i class="bi bi-linkedin"></i>
        </a>
      </li>
</animated.div>

<animated.div style={slideUpIconThree}>
      <li className='mb-3'  onMouseOver={(e)=>{setHoverUpThree(true);}} onMouseOut={()=>setHoverUpThree(false)}>
        <i class="bi bi-instagram">
        </i>
        </li>
</animated.div>
      </ul></div>}
  {window.innerWidth>=801&&
  <div id="fixed-line2">
    <animated.div style={slideLeftIcon}>
    <a className="fixed-email" href = "mailto: kdgdang@ucdavis.edu" onMouseOver={()=>{setHoverLeft(true);}} onMouseOut={()=>setHoverLeft(false)}>kdgdang@ucdavis.edu</a>
     </animated.div>
  </div>
 }
 
</main>

<footer>

  <Container className="footer-container pt-2 pb-2">
    <div ><p>Designed and Built by Kiet Dang</p></div>
    <div><a href="https://github.com/kietdang400/Porfolio-Website-React/tree/main"><i class="bi bi-star"></i><i class="bi bi-git"></i></a></div>
  </Container>
  
</footer>
    </div>
  );
}

export default App;

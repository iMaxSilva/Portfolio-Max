import React from "react";
import { Link } from 'react-router-dom';
import { Container, Main,  Identification, IdentificationText, Menu} from './styled';
import Projects from "../../components/Projects";
import Qualifications from "../../components/Qualifications";
import Skills from "../../components/Skills";
import AboutMe from "../../components/AboutMe";

export default function Home() {    
    return (
        <>  
            <Container>
                <Main>
                    <Identification>
                        <IdentificationText>
                            <h1><b>{`< `}</b>Max Silva<b>{` />`}</b></h1>
                            <h2><b>{`{ `}</b>Fullstack Web Developer<b>{` } `}</b></h2>
                            {/* <span>Seja bem vindo!</span> */}
                            
                        </IdentificationText>
                        <Menu>
                            <Link to='/download'>Download CV</Link>
                            <Link to='/linkedin'>Linkedin</Link>
                            <Link to='/github'>Github</Link>
                        </Menu>
                    </Identification>
                    <AboutMe />
                    <Projects />
                    <Qualifications />
                    <Skills />
                </Main>                
            </Container>          
        </>        
    )  
}
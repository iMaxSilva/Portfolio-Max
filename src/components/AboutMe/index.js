import React from "react";
import { Container, Information, Title } from './styled'

export default function AboutMe() {
    return (
        <Container>                       
            <Title>
                <h2>Sobre mim</h2>
            </Title>
            <Information>
                <div>
                    <span>Formado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá, atuo no desenvolvimento de aplicações web e na administração de servidores para o Exército Brasileiro. Possuo experiência em React.js, Javascript, Typescript, Styled-Components, SPFx, Bootstrap e consumo de APIs REST.</span>
                </div>
            </Information>
        </Container>
    )
}
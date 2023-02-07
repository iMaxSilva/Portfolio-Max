import React from "react";
import { Container, Information, Title } from './styled';

export default function Qualifications() {
    return (
        <Container>                       
            <Title>
                <h2>Qualificações</h2>
            </Title>
            <Information>
                <div>
                    <h3>Desenvolvedor Web</h3>
                    <h4>Exército Brasileiro {`(2017 - 2023)`}</h4>
                    
                    <span>Responsável pelo desenvolvimento de aplicações para o Comando da 1ª Divisão de Exército, utilizando as tecnologias React.js, Node.js, PHP, HTML5 e CSS3 e 
                        também pelos servidores existentes nesse Comando, após assumir essa função, realizei um mapeamento geral, o qual, ao fim do processo, pude resolver todas as deficiências encontradas. Hoje, todos os servidores contam com diversas proteções para garantir segurança e o melhor funcionamento dos sistemas.</span>
                </div>
            </Information>
        </Container>
    )
}
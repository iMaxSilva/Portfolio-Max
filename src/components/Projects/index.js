import React from "react";
import { Container, Information, Title } from './styled';

export default function Projects() {
    return (
        <Container>
            <Title>
                <h2>Projetos</h2>
            </Title>
            <Information>
                <div>
                    <h2>SisPNRGuVM</h2>
                    <span>Sistema que pôde controlar os mais de 1.723 imóveis da guarnição da Vila Militar.</span>
                </div>
                <div>
                    <h2>SisArr</h2>
                    <span>Sistema que controla as refeições da Organização Militar</span>
                </div>
                <div>
                    <h2>Sistema de Atendimento DTI</h2>
                    <span>Sistema criado para organizar os atendimentos solicitados pelos setores.</span>
                </div>
                <div>
                    <h2>Intranet e Site 1ª DE</h2>
                    <span>Desenvolvidos em conjunto para traer informações diárias sobre as atividades do Comando.</span>
                </div>                        
            </Information>
        </Container>
    )
}
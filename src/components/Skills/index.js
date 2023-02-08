import React from "react";
import { Container, Information, Title } from './styled'
import {ReactComponent as Html} from './icons/html5.svg';
import {ReactComponent as Css} from './icons/css3.svg';
import {ReactComponent as SharePoint} from './icons/microsoftsharepoint.svg';
import {ReactComponent as Mysql} from './icons/mysql.svg';
import {ReactComponent as Nodejs} from './icons/nodedotjs.svg';
import {ReactComponent as Php} from './icons/php.svg';
import {ReactComponent as Bootstrap} from './icons/bootstrap.svg';
import {ReactComponent as Postgres} from './icons/postgresql.svg';
import {ReactComponent as Reactjs} from './icons/react.svg';
import {ReactComponent as StyledComponents} from './icons/styledcomponents.svg';
import {ReactComponent as Javascript} from './icons/javascript.svg';
import {ReactComponent as Typescript} from './icons/typescript.svg';


export default function Skills() {
    
    return (
        <Container>
            <Title>
                <h2>Habilidades</h2>
            </Title>
            <Information>
                <div>
                    <Html width={60}/>
                </div>
                <div>
                    <Css width={60}/>
                </div>
                <div>
                    <Javascript width={60}/>
                </div>
                <div>
                    <Typescript width={60}/>
                </div>
                <div>
                    <StyledComponents width={60}/>
                </div>
                <div>
                    <Reactjs width={60}/>
                </div>
                <div>
                    <Bootstrap width={60}/>
                </div>
                <div>
                    <Nodejs width={60}/>
                </div>
                <div>
                    <SharePoint width={60}/>
                </div>
                <div>
                    <Php width={60}/>
                </div>
                             
                <div>
                    <Mysql width={60}/>
                </div>
                <div>
                    <Postgres width={60}/>
                </div>                           
        </Information>
    </Container>
    )
}
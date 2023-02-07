import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;    
    background-color: #201E20;
    opacity: 0.8;
    background-size: 5px 5px;
    background-image: repeating-linear-gradient(45deg, #2c2c2c 0, #2c2c2c 0.5px, #201E20 0, #201E20 50%);   
`

export const Main = styled.main`
    display:flex;
    flex-direction: column;
    width: 100%;
`
export const Identification = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;    
    color: #fff;  
`

export const IdentificationText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        font-size: 8rem;
        
        @media (max-width: 850px){
            font-size: 3.6rem;
        }

        @media (max-width: 400px){
            font-size: 2.6rem;
        }

        b {
            color:#c0c0c0;
        }
    }
    h2 {
        @media (max-width: 850px){
            font-size: 1.25rem;
        }

        @media (max-width: 400px){
            font-size: 1rem;
        }


        font-size: 2.3rem;
        font-weight: 300;
        color: #6F54DD;
        b {
            color:#8f8f8f;
        }
    }
    span {
        margin-top:15px;
        color: #c6c6c6;
    }
`

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    width: 100%;
    gap:10px;
    
    a { 
        margin-top: 30px;
        border: 1px solid #4E38A5;
        background: transparent;
        padding: 10px 40px;
        border-radius: 5px;
        color: #4E38A5;
        font-weight: 300;
        font-size: 1rem;        
        
        &:hover {
            background: #4E38A5;
            color: #fff;
            transition: all 0.8s;
        }
    }
`






export const Footer = styled.footer`
    background: #54419F;
    width: 100%;
    padding:120px;
`
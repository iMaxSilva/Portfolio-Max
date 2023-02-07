import styled from "styled-components"


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2rem;
    flex-wrap: wrap;
    color: #fff;
    width: 100%;
    margin-bottom: 3rem;

`

export const Title = styled.div`        
        h2 {
            font-size: 2em;
            font-weight: 200;           
                &::after{
                    content: '';
                    display: block;
                    width: 61px;
                    height: 2px;
                    margin-top: 2px;
                    background: #6f53dd;
                    transition: width all 2s;
                }
                &::after{
                    width: 61px;
                }  
        }
`
export const Information = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top:30px;
    gap: 20px;

    div {
        width: 60%;

        @media (max-width: 894px){
            width: 95%;
        }

        @media (max-width: 400px){
            text-align: left;
        }

        text-align: justify;
        h3 {
            font-weight: 400;
            margin-bottom: 10px;
        }
        span {
            font-size: 1rem;
            color: #f2f2f2;       
        } 
    }    
` 
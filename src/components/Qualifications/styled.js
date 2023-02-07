import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
        text-align: justify;
        @media (max-width: 894px){
            width: 95%;
        }
        @media (max-width: 400px){
            text-align: start;
        }
        h3 {
            font-size: 1.3rem;
            font-weight: 400;
            margin-bottom: 3px;
        }
        h4 {
            font-size: 0.9rem;
            font-weight: 400;
            margin-bottom: 10px;
            height: 20px;
            color: #969696;       
        }
        span {
            font-size: 1rem;
            color: #f2f2f2;
        } 
    }    
` 
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    padding: 30px;
    color: #fff;
    width: 100%;
    margin-bottom: 3rem;

    p {
        margin-left: auto;
    }
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
    margin-right: auto;
    align-items:center;
    gap: 20px;
    max-width: 650px;
    margin-top:30px;

    @media (max-width: 656px) {
        justify-content: center;
    }
    
    div {
        display: flex;
        justify-content: center;
        border: 1px solid #6c6a7339;
        background: #2c2b2b;
        border-radius: 10px;
        height: 130px;
        width: 130px;
        cursor:pointer;
        
        
        
        & svg {
            fill:#444249;
        }

        &:hover {
            animation: pulse 3s infinite;    
            svg{
                fill:#6f53dd;
                transition: all 1s;
            }
        }      

        @keyframes pulse {
	            0% {		
		            border: 1px solid #745bd713;
	            }
	            50% {		
		            border: 1px solid #745bd795;
	            }
	            100% {		
		            border: 1px solid #6f53dd13;
	            }
        }
    }    
` 
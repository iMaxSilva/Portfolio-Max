import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding: 30px;
    flex-wrap: wrap;
    color: #fff;
    margin-bottom: 3rem;
`
export const Title = styled.div`        
        h2 {
            font-size: 2em;
            font-weight: 200;
            width: 61px;
            margin-bottom: 30px;
            &::after{
                content: '';
                display: block;
                width: 0;
                margin-top:3px;
                height: 2px;
                background: #6f53dd;
                transition: width all 2s;
            }
            &::after{
                width: 100%;
            }             
        }
        

`
export const Information = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items:center;
    gap: 30px;
    width: 100%;
    margin-top:30px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        border: 1px solid #6c6a7339;
        background: #2c2b2b;
        border-radius: 10px;
        padding:32px;
        height: 176px;
        width: 330px;
        cursor:pointer;  
        
        h2 {
            font-weight: 400;
            font-size: 1.25em;
            
            @media (max-width: 900px){
                font-size: 1.25em;
            }
        }
        span {
            color: #b5b5b5;
            @media (max-width: 900px){
                font-size: 1em;
            }
        }
        &:hover {
            animation: pulse 2s infinite;   

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
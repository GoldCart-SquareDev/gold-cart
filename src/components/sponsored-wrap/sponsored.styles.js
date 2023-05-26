import styled from "styled-components";

export const SponsoredParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #Fafbfc;

    & h1 {
        margin-left: 3rem;
    }
    
`;

export const ImageWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
background: #Fafbfc;
justify-content: space-around;
align-items: center;
font-size: 1.2rem; 
margin-top:2rem; 
padding:2px;     
`;

export const SponsoredCompanies = styled.div`
width: 100%;
height: 100%;
display: flex;
background: #Fafbfc;
justify-content: space-around;
align-content: stretch;
align-items: center;
font-size: 1.2rem;
margin-top: 2rem;
margin-bottom:5rem;       
`;
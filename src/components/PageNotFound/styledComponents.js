import styled from 'styled-components'

export const Notfouncontainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const NotfoundImage = styled.img`
    height: 200px;
    @media screen and (min-width: 768px){
        height: 270px;
    }
`
export const NotfoundHeading = styled.h1`
    font-family: Roboto;
    font-size: 20px;
    @media screen and (min-width: 768px){
        font-size: 28px;
    }
`
export const Notfoundtext = styled.p`
    font-family: Roboto;
    font-size: 15px;
    text-align: center;
    margin: 0px;
    @media screen and (min-width: 768px){
        font-size: 18px;
    }
`

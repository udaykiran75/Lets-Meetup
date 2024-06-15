import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
    text-decoration: none;
`
export const Homebgcontainer = styled.div`
    height: 100vh;
    background-color: #ffffff;
    padding: 15px;
    @media screen and (min-width: 768px){
        padding: 20px;
    }
`
export const Logoimage = styled.img`
    width: 110px;
    @media screen and (min-width: 768px){
        width: 150px;
    }
`
export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`
export const RegisterHeading = styled.h1`
    font-family: Roboto;
    font-size: 27px;
    margin: 0px;
    @media screen and (min-width: 768px){
        font-size: 33px;
    }
`
export const RegisterText = styled.p`
    font-family: Roboto;
    font-size: 16px;
    @media screen and (min-width: 768px){
        font-size: 19px;
    }
`
export const RegisterButton = styled.button`
    background-color: #3b82f6;
    font-family: Roboto;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    height: 33px;
    width: 100px;
    color: #ffffff;
    margin-bottom: 40px;
    @media screen and (min-width: 768px){
        margin-bottom: 20px;
        height: 36px;
        width: 110px;
        font-size: 17px
    }
`
export const MeetupImage = styled.img`
    height: 180px;
    @media screen and (min-width: 768px){
        height: 330px;
    }
`
export const RegisterName = styled.h1`
    font-family: Roboto;
    font-size: 25px;
    color: #2563eb;
    margin: 0px;
    @media screen and (min-width: 768px){
        font-size: 40px;
    }
`
export const RegisterTopic = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
    margin-bottom: 15px;
    margin-top: 5px;
`

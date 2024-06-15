import styled from 'styled-components'

export const Loginbgcontainer = styled.div`
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
export const Logincontainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px){
        flex-direction: row;
    }
`
export const Loginimage = styled.img`
    height: 230px;
    @media screen and (min-width: 768px){
        height: 370px;
    }
`
export const Formelement = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Heading = styled.h1`
    font-family: Roboto;
    font-size: 27px;
    align-self: flex-start;
    @media screen and (min-width: 768px){
        font-size: 40px;
    }
`
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 280px;
`
export const Label = styled.label`
    font-family: Roboto;
    font-size: 15px;
    font-weight: bold;
    color: #64748b;
    margin-bottom: 7px;
`
export const Input = styled.input`
    padding: 7px;
    font-family: Roboto;
    font-size: 16px;
    outline: none;
`
export const Select = styled.select`
    padding: 7px;
    font-family: Roboto;
    font-size: 16px;
    outline: none;
`
export const RegisterButton = styled.button`
    border-radius: 5px;
    background-color: #3b82f6;
    font-family: Roboto;
    font-size: 15px;
    border: none;
    outline: none;
    height: 37px;
    color: #ffffff;
    cursor: pointer;
    width: 140px;
`
export const Errormsg = styled.p`
    font-family: Roboto;
    font-size: 15px;
    color: #ff0b37;
    margin: 5px;
`

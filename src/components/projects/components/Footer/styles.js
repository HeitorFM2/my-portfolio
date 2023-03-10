import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #2D2E34;

    display: flex;
    align-items: center;
    justify-content: space-around;

    color: white;

    @media (max-width: 480px) {
        height: 180px;
        flex-direction: column-reverse;
        font-size: 12px;
    }
`

export const Location = styled.a`
    text-decoration: none;
    color: black;
    @media (max-width: 480px) {
        margin-top: 1rem;
    }
`

export const IconsProfile = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 42vh;
`
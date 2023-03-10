import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 60px;
    background-color: #2D2E34;
    position: fixed;
    
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

export const Location = styled.li`
    margin-right: 40px;
    text-decoration: none;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-weight: 200;
    list-style-type: none;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        margin-right: 20px;
        font-size: 12px;
    }
`
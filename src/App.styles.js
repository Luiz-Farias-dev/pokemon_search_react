import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    flex-direction: column;
`;

export const TitleSection = styled.div`
    display: flex;
    justify-content: center;
    background-color: #5DB9FF;
    width: 100%;
    height: 300px;
    color: #FFF;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #4ca8ee;
    font-size: 18px;
    padding-left: 10px;
`;

export const Button = styled.button`
    margin-top: 20px;
    width: 85px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #4ca8ee;
    font-size: 16px;
    background-color: darkblue;
    color: #FFF;
    :hover{
        cursor: pointer;
    }
`;

export const DisplaySection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    .nome {
        margin: 5px;
        padding: 0;
    }
    .type {
        margin: 5px;
        padding: 0;
    }
    .species {
        margin: 5px;
        padding: 0;
    }
    .hp {
        margin: 5px;
        padding: 0;
    }
    .attack {
        margin: 5px;
        padding: 0;
    }
    .defense {
        margin: 5px;
        padding: 0;
    }
`;

export const PokemonImage = styled.img`
    height: 150px;
    width: 150px;
    margin: 0px;
    padding: 0;
`;
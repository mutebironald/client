import React from 'react';
import styled from 'styled-components';
import Card from './Card'
import Title from '../Title/Title'




const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


export const CardList = ({ data, actions }) => {

    const navigateToFirst = () => {
        actions.loadPeople(1)
    }

    return (
        <>
            <Title main>
                    <img src="./sovTech.png" alt="" width="44" height="43"  onClick={navigateToFirst}/> 
                Star Wars Characters
            </Title>
            <Wrapper>
                {data.length !== undefined ? data.map(person => (
                    <Card person={person} />
                )): <></>} 
            </Wrapper>
        </>
    )
}

// export default CardList;

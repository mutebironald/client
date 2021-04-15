import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../Modal'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 100px;
    background-color: #c4b2a9;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    margin: 1rem;
    color: white;
`;

const Description = styled.p`
    color: white;
`;



const Card = ({ person }) => {

    const [modalOpen , setModalOpen] = useState(false);

    const toggleState = (e) => {
        setModalOpen(!modalOpen)
    }


    return (
        <div onClick={toggleState}>
        <Wrapper>
            <Title>{person.name}</Title>
        </Wrapper>
        {modalOpen &&
        <Modal
            id="modal"
            isOpen={modalOpen}
            onClose={toggleState}
            >
            <div className="box-body">Name: {person.name}</div>
            <div className="box-body">Height: {person.height}</div>
            <div className="box-body">Mass: {person.mass}</div>
            <div className="box-body">Gender: {person.gender}</div>
            Homeworld: <a href={person.homeworld}>{person.homeworld}</a>

        </Modal>}
        </div>
    )
}


export default Card;

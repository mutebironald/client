import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as peolpeActions from '../../redux/actions/peopleActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Spinner from '../common/Spinner';
import { CardList } from '../common/card/CardList';
import '.././styles.css'

import PaginationBar from "../common/Pagination/PaginationBar.js";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

let clicked = 1;
const PeoplePage = ({ actions, people, loading }) => {
    
    useEffect(() => { 
        if(people.length === undefined){
            actions.loadPeople(1)
        }
    }, [])

    const updatePage = async (e) => {
        clicked = e.target.textContent
        return await actions.loadPeople(e.target.textContent);
      };

    const renderCards = () => {
        return !loading ? ( 
            <>
                <CardList data={people} actions={actions}/>
                <PaginationBar  activeLabel="(jjjjj)" count={82} updatePage={updatePage} clicked={clicked} /> 
            </>
        ):(
            <Spinner/>
        )
    }
    
    return(
        <>   
            {renderCards()}
        </>
    )
}

PeoplePage.propTypes = {
    people: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

function mapStateToProps (state){
    // console.log( "+++++++++++++++++++++mapstateToprops", state)
    return {
        people: state.people,
        loading: state.apiCallsInProgress > 0
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadPeople: bindActionCreators(peolpeActions.loadPeople, dispatch)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);

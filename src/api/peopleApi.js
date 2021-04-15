import { handleResponse , handleError } from './apiUtils';
import graphQLClient from '../graphql/client';
import * as PeopleRequests from '../graphql/people';

export const getPeople = (page) => {
    const pages = page.toString()
    return graphQLClient.query({
        query: PeopleRequests.GET_PEOPLE,
        variables: {
            pageNumber: pages
        }
    })
    .then(handleResponse)
    .catch(handleError)
}


import {  gql } from '@apollo/client';


export const GET_ALBUMS = gql`
query Albums {
    albums {
        name
    }
}
`;



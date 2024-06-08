import { gql } from "@apollo/client";

export const QUERY_HELMETS = gql`
  query allHelmets {
    helmets {
      _id
      name
      description
      image
      price
    }
  }
`;

export const QUERY_SINGLE_HELMET = gql`
  query helmet($id: ID!) {
    helmet(_id: $id) {
      _id
      name
      description
      image
      price
    }
  }
`;

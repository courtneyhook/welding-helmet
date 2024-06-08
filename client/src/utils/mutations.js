import { gql } from "@apollo/client";

export const ADD_HELMET = gql`
  mutation addHelmet(
    $name: String!
    $description: String!
    $image: String!
    $price: Number
  ) {
    addHelmet(
      name: $name
      description: $description
      image: $image
      price: $price
    ) {
      _id
      name
      description
      image
      price
    }
  }
`;

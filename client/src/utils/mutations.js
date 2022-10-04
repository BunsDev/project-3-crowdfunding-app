import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $pledgeGoal: Int!, $createdAt: String!) {
    addProject(name: $name) {
      _id
      name
      description
      pledgeGoal
      createdAt
      assets {
        _id
        title
        description
        price
        createdAt
      }
    }
  }
`;

export const REMOVE_PROJECT = gql`
mutation removeProject($name: String!, $description: String!, $pledgeGoal: Int!, $createdAt: String!) {
  removeProject(name: $name) {
    _id
    name
    description
    pledgeGoal
    createdAt
    assets {
      _id
      title
      description
      price
      createdAt
    }
  }
}
`;

export const ADD_ASSET = gql`
  mutation addAsset ($title: String!, $description: String!, $createdAt: String!) {
    addAsset(title: $title, description: $description, price: $price, createdAt: $createdAt) {
      _id
      title
      description
      price
      projectAssignment
      createdAt
    }
  }
`;

export const REMOVE_ASSET = gql`
mutation removeAsset($assetId: ID!) {
  removeAsset(asset: $asset) {
    _id
    title
    description
    price
    projectAssignment
    createdAt
  }
}
`;

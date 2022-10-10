import { gql } from '@apollo/client';
export const SignUpMutation = gql`
mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  SignUp(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    email
    token
  }
}
`
export const SignInMutation = gql`
mutation Signin($email: String!, $password: String!) {
  Signin(email: $email, password: $password) {
    token
    email
  }
}
`

export const VideoAddMutation = gql`
mutation addVideo($title: String!, $discription: String!, $thumbnail: String!, $fileName: String!) {
  addVideo(title: $title, discription: $discription, thumbnail: $thumbnail, fileName: $fileName) {
    title
    discription
  }
}
`

export const deleteVideo  = gql`
mutation deleteVideo($id: ID!) {
  deleteVideo(_id: $id) {
    _id
  }
}
`

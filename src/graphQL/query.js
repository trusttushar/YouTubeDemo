import { gql } from '@apollo/client';
export const getVideos = gql`
query{
    getVideos{
      _id
      title
      discription
      thumbnail 
      fileName
    }
  }
`;

export const userVideos = gql`
query{
    user{
      email
      video{
        _id
        title
        discription
        thumbnail 
        fileName
      }
    }
  }
`;

export const getVideo = gql`
query getVideo($id: ID!) {
    getVideo(_id: $id) {
        _id
        title
        discription
        thumbnail 
        fileName
  }
}
`;

export const searchVideos = gql`
query searchVideos($title: String!) {
    searchVideos(title: $title) {
        _id
        title
  }
}
`;
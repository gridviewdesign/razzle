import React from "react";
import "./Home.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const GET_POSTS = gql`
  {
    posts {
      id
      title
    }
  }
`;

const Home = () => (
  <React.Fragment>
    <h1>Welcome to Razzle.</h1>
    <Query query={GET_POSTS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error! {error.message}</div>;

        return (
          <ul>
            {data.posts.map(post => (
              <li key={post.id}>
                <Link to={`/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  </React.Fragment>
);

export default Home;

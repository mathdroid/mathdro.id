import React from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
import styled from "react-emotion";

import Hero from "../components/hero";
import Content from "../components/content";
import { H2, H3 } from "../components/typography";
// import Card from "../components/card";

const BlogCard = styled.div`
  margin-top: -2rem;
  height: auto;
  background: linear-gradient(
    to left,
    #ffffff 0%,
    #ffffff 50%,
    #ff8888 75%,
    #8888ff 100%
  );
  background-position: right;
  background-size: 400% auto;
  transition: background-position 0.2s ease-out;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  &:hover {
    transition: background-position 0.2s ease-in;

    background-position: left;
  }
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
    text-decoration: none;
    color: inherit;
    min-height: 4rem;
  }
  h3,
  time {
    margin: 0;
  }
  h3 {
    flex: 3;
  }
  time {
    flex: 1;
  }
  .card-title {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width: calc(100% - 2rem);
    h3 {
      padding-right: 1rem;
    }
  }
`;
const StyledMoment = styled(Moment)`
  text-align: right;
`;

export default withRouteData(({ posts }) => (
  <React.Fragment>
    <Hero>
      <Content>
        <H2>Articles</H2>
      </Content>
    </Hero>
    <Content>
      {posts.map(post => (
        <BlogCard key={post.data.slug} thumbnail={post.data.thumbnail}>
          <Link to={`/blog/post/${post.data.slug}`}>
            <div className="card-title">
              <H3>{post.data.title}</H3>
              <StyledMoment format="MMMM Do, YYYY">
                {post.data.date}
              </StyledMoment>
            </div>
          </Link>
        </BlogCard>
      ))}
    </Content>
  </React.Fragment>
));

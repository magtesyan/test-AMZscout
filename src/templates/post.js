import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout.js';

const PostStyles = styled.div`
  display: flex;
  padding: 104px 115px 104px 90px;

  .postHeading {
    display: flex;
    flex-direction: column;
    margin-right: 40px;

    img {
      margin-bottom: 36px;
    }

    span {
      font-size: 32px;
      line-height: 44px;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }

  .postBody {
    display: flex;
    flex-wrap: wrap;
    padding: 41px 45px 44px;
    background: #ffffff;

    p {
      margin: 0;
      margin-bottom: 26px;
    }
  }

  .postInfo {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-left: auto;
    margin-top: 20px;

    p {
      font-size: 22px;
      line-height: 30px;
      margin: 0;
    }

    span {
      font-weight: 600;
    }
  }

  @media(max-width: 880px) {
    flex-wrap: wrap;
  }

  @media(max-width: 567px) {
    padding: 10px 30px;
    justify-content: center;

    .postHeading {
      text-align: center;
      margin-right: 0;

      img {
        width: 320px;
      }
    }
  }
`;

export const query = graphql`
  query {
    contentfulPost {
      body {
        raw
        references {
          contentful_id
          title
          fixed {
            src
          }
        }
      }
      date(formatString: "DD.MM.YYYY")
      author
      title
      banner {
        title
        fixed {
          src
        }
      }
    }
  }
`;

const Post = (props) => {
  const assets = new Map(props.data.contentfulPost.body.references.map(ref => [ref.contentful_id, ref]));
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const url = assets.get(node.data.target.sys.id).fixed.src
        const alt = assets.get(node.data.target.sys.id).title
        return <img alt={alt} src={url}/>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="postText">{children}</p>
      ),
    },
    renderMark: {
    }
  }

  return (
    <Layout>
      <PostStyles>
        <div className="postHeading">
          <img alt={props.data.contentfulPost.banner.title} src={props.data.contentfulPost.banner.fixed.src}/>
          <span>{props.data.contentfulPost.title}</span>
        </div>
        <div className="postBody">
          {documentToReactComponents(JSON.parse(props.data.contentfulPost.body.raw),options)}
          <div className="postInfo">
            <p><span>Author: </span>{props.data.contentfulPost.author}</p>
            <p><span>Date: </span>{props.data.contentfulPost.date}</p>
          </div>
        </div>
      </PostStyles>
    </Layout>
  );
};

export default Post;
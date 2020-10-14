import React from "react";
import { graphql } from "gatsby";
import {Layout} from '../components/layout';

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return ( 
  <Layout>
    <div className="section mt-10">
     <h1 className="my-4 text-1xl md:text-3xl lg:text-3xl font-black leading-tight">{frontmatter.title}</h1>
    </div>
    <div className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
            dangerouslySetInnerHTML={{ __html: html }}
       />
   </Layout>
);
};


export default Template ; 


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
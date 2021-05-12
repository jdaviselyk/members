import * as React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
query Members {
  allWpJdMember {
    nodes {
      JDTeamMembersFields {
        description
        fieldGroupName
        image {
          altText
        }
        
      }
title
      id
      
    }
  }
}
`;

const IndexPage = ({ data }) => {

const members = data.allWpJdMember.nodes;


return(
<Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
  {members.length && members.map(f => {
    return <div key={f.id}>
      <div>{f.title} 
      </div>
      <div dangerouslySetInnerHTML ={{__html: f.JDTeamMembersFields.description,}} />

      <div dangerouslySetInnerHTML ={{__html: f.JDTeamMembersFields.image,}} />
      </div>
  })}
  </Layout>
)
}


  


export default IndexPage

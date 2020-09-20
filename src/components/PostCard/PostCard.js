import React from 'react'
import { Link } from 'gatsby'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import { Stylable } from 'css-in-jsx'

const StylableLink = Stylable(Link);

const PostCard = ({ post }) => (
  <div>
    <Card
      title={
        <div>
          <StylableLink
            to={post.fields.slug}
          >
            <style>
              color: black;
              font-weight: bold;
            </style>
            {post.frontmatter.title}
          </StylableLink>
          <Stylable.span>
            <style>
              float: right;
              color: grey;
            </style>
            {post.frontmatter.date}
          </Stylable.span>
        </div>
      }
    >
      {post.excerpt}
    </Card>
    <br />
  </div>
)

export default PostCard

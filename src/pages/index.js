import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'
import { Stylable, Styled } from 'css-in-jsx'
import { PRIMARY_BRAND_COLOR, ALTERNATIVE_BRAND_COLOR } from '../styles/constants'

const StyledButton = Styled(Button)(<>
  margin-right: 10px;
</>);

const Diamond = Styled.div(<>
  display: block;
  margin-top: 10rem;
  color: black;
  font-size: 8em;
  &:hover <>
    opacity: 0.5;
  </>
</>);

const IndexPage = () => {
  return (
    <Layout>
      <div align="center">
        <Diamond>💎</Diamond>
        <Stylable.h1>
          <style>
            color: {PRIMARY_BRAND_COLOR};
            font-size: 50px;
            font-weight: bold;
            &:before, &:after <>
              color: black;
              font-family: monospace;
              font-size: .8em;
              margin: .2em;
              font-weight: normal;
            </>
            &:before <>
              content: "{"<>"}";
            </>
            &:after <>
              content: "{"</>"}";
            </>
          </style>
          CSS
          <Stylable.span>
            <style>
              color: black;
              font-size: .7em;
              
            </style>
            &nbsp;in&nbsp;
          </Stylable.span>
          <Stylable.span>
            <style>
              color: black;
              transition: color .6s;
              &:hover <>
                color: {ALTERNATIVE_BRAND_COLOR};
              </>
            </style>
            JSX
          </Stylable.span>
        </Stylable.h1>
        
        <Stylable.h2>
          <style>
            margin-bottom: 10rem;
          </style>
          Yet another approach to style in React
        </Stylable.h2>

        <Link to="/docs/get-started/introduction">
          <StyledButton
            type="primary"
            size="large"
            icon="right-circle"
          >
            Get Started
          </StyledButton>
        </Link>
        <Button
          type="primary"
          size="large"
          icon="github"
          href="https://github.com/adrgautier/css-in-jsx"
        >
          Github
        </Button>
      </div>
    </Layout>
  )
}

export default IndexPage

import React, { Component } from 'react';
import { Link } from 'gatsby'
import Stylable from 'css-in-jsx';
import { ALTERNATIVE_BRAND_COLOR } from '../../styles/constants';

const StylableLink = Stylable(Link);

class HeaderTitle extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <Stylable.div {...props}>
            <style>
              float: left;
              margin-bottom: 10px;
            </style>
            <Stylable.h1>
              <style>
                margin: 0;
                font-size: 1.25rem;
              </style>
              <StylableLink to="/">
                <style>
                  color: white;
                  text-decoration: none;
                  &:hover <>
                    color: {ALTERNATIVE_BRAND_COLOR};
                  </>
                </style>
                {children}
              </StylableLink>
            </Stylable.h1>
          </Stylable.div>
        );
    }
}

export default HeaderTitle;
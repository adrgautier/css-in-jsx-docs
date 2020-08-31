import React, { Component } from 'react'
import TableOfContents from '../TableOfContents'
import Stylable from 'css-in-jsx';

class ResponsiveAnchor extends Component {
  render() {
    return (
      <Stylable.div>
        <style>
          position: fixed;
          top: 80px;
          left: 85%;
          right: 10px;
          bottom: 0;
          overflow: auto;
        </style>
        <Stylable.div>
          <style>
            position: absolute;
            left: 10px;
            right: 0;
            top: 0;
            bottom: 0;
          </style>
          <TableOfContents offsetTop={80} affix={true} />
        </Stylable.div>
      </Stylable.div>
    )
  }
}

export default ResponsiveAnchor

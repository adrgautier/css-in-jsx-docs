import React, { Component } from 'react'
import SidebarContents from '../SidebarContents'
import { Stylable } from 'css-in-jsx'

class ResponsiveSidebar extends Component {
  render() {
    return (
      <Stylable.div>
        <style>
          position: fixed;
          top: 80px;
          left: 10px;
          right: 80%;
          bottom: 0;
          overflow: auto;
        </style>
        <Stylable.div>
          <style>
            position: aboslute;
            left: 0;
            right: 10px;
            top: 0;
            bottom: 0;
          </style>
          <SidebarContents />
        </Stylable.div>
      </Stylable.div>
    )
  }
}

export default ResponsiveSidebar

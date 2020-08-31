import React, { Component } from 'react'
import Stylable from "css-in-jsx"
import Menu from '../Menu'
import HeaderTitle from '../HeaderTitle'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import { SECONDARY_BRAND_COLOR, HEADER_CONTAINER_WIDTH } from '../../styles/constants'



class Header extends Component {
  render() {
    const { siteTitle, sidebarDocked, menuOpen, nMenuItem } = this.props

    return (
      <Stylable.div>
        <style>
          width: 100%;
          height: {menuOpen && !sidebarDocked ? nMenuItem * 32 + 50 : 55}px;
          margin-bottom: 20px;
          background: {SECONDARY_BRAND_COLOR};
        </style>
        <Stylable.div>
          <style>
            margin: 0 auto;
            max-width: {HEADER_CONTAINER_WIDTH}px;
            padding: 15px 18px;
            white-space: nowrap;
          </style>
          <HeaderTitle>{siteTitle}</HeaderTitle>
          <Menu sidebarDocked={sidebarDocked} />
        </Stylable.div>
      </Stylable.div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps)(Header)

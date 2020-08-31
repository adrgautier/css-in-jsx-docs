import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import {
  getSidebarState,
  getAnchorState,
  getMenuState,
  isSidebarHide,
  isAnchorHide,
} from '../../store/selectors'
import { onSetAnchorOpen, onSetSidebarOpen } from '../../actions/layout'
import SidebarContents from '../SidebarContents'
import TableOfContents from '../TableOfContents'
import Stylable from 'css-in-jsx'
import { PRIMARY_BRAND_COLOR } from '../../styles/constants'

class ResponsiveTopBar extends Component {
  onSetSidebarOpen = () => {
    this.props.onSetSidebarOpen(true)
  }

  onSetSidebarClose = () => {
    this.props.onSetSidebarOpen(false)
  }

  onSetAnchorOpen = () => {
    this.props.onSetAnchorOpen(true)
  }

  onSetAnchorClose = () => {
    this.props.onSetAnchorOpen(false)
  }

  render() {
    const {
      sidebarOpen,
      anchorOpen,
      menuOpen,
      nMenuItem,
      sidebarHide,
      anchorHide,
    } = this.props

    return (
      <Stylable.div>
        <style>
          height: 20px;
        </style>
        <Stylable.div>
          <style>
            position: absolute;
            width: 100%;
            height: 40px;
            background: {PRIMARY_BRAND_COLOR};
            margin-top: -20px;
          </style>
          {!anchorOpen && !sidebarHide && (
            <Stylable.div>
              <style>
                position: absolute;
                left: 8px;
                top: 4px;
              </style>
              {sidebarOpen ? (
                <Button icon="close" onClick={this.onSetSidebarClose} />
              ) : (
                <Button icon="bars" onClick={this.onSetSidebarOpen} />
              )}
            </Stylable.div>
          )}
          {!sidebarOpen && !anchorHide && (
            <Stylable.div>
              <style>
                position: absolute;
                right: 8px;
                top: 4px;
              </style>
              {anchorOpen ? (
                <Button icon="close" onClick={this.onSetAnchorClose} />
              ) : (
                <Button icon="ellipsis" onClick={this.onSetAnchorOpen} />
              )}
            </Stylable.div>
          )}
        </Stylable.div>
        {sidebarOpen && (
          <Stylable.div>
            <style>
              position: fixed;
              top: {menuOpen ? nMenuItem * 32 + 90 : 95}px;
              left: 0;
              right: 0;
              bottom: 0;
              background: white;
            </style>
            <Stylable.div>
              <style>
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                transition: left .3s ease-out, right .3s ease-out;
                overscroll-behavior-y: contain;
              </style>
              <SidebarContents />
            </Stylable.div>
          </Stylable.div>
        )}
        {anchorOpen && (
          <Stylable.div>
            <style>
              position: fixed;
              top: {menuOpen ? nMenuItem * 32 + 90 : 95}px;
              left: 0;
              right: 0;
              bottom: 0;
              overflow-y: auto;
              background: white;
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
              transition: left .3s ease-out, right .3s ease-out;
            </style>
            <TableOfContents offsetTop={95} affix={false} />
          </Stylable.div>
        )}
      </Stylable.div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sidebarOpen: getSidebarState(state).open,
    anchorOpen: getAnchorState(state).open,
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
    sidebarHide: isSidebarHide(state),
    anchorHide: isAnchorHide(state),
  }
}

const mapDispatchToProps = {
  onSetSidebarOpen,
  onSetAnchorOpen,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveTopBar)

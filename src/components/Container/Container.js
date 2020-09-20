import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Stylable } from 'css-in-jsx';
import {
  getMenuState,
  isSidebarHide,
  isAnchorHide,
} from '../../store/selectors'
import { MAIN_CONTAINER_WIDTH } from '../../styles/constants';

class Container extends Component {
  render() {
    const {
      sidebarDocked,
      onPostPage,
      menuOpen,
      nMenuItem,
      sidebarHide,
      anchorHide,
    } = this.props

    let topPosition = nMenuItem * 32 + 75;
    let paddingTop = 0;

    if (!menuOpen) {
      topPosition = 80;
    }

    if(!sidebarDocked && onPostPage) {
      topPosition += 15;
      if (!sidebarHide || !anchorHide) {
        paddingTop = 20;
      }
    }

    return (
      <Stylable.div>
        <style>
          position: absolute;
          top: {topPosition}px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: visible;
        </style>
        <Stylable.div>
          <style>
            margin: 0 auto;
            max-width: {MAIN_CONTAINER_WIDTH}px;
            padding: 0px 1.0875rem 1.45rem;
            padding-top: {paddingTop}px;
          </style>
          {this.props.children}
        </Stylable.div>
      </Stylable.div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
    sidebarHide: isSidebarHide(state),
    anchorHide: isAnchorHide(state),
  }
}

export default connect(mapStateToProps)(Container)

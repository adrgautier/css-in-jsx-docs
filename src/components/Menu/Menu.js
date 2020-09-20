import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Button from 'antd/lib/button'
import { connect } from 'react-redux'
import { onChangeMenuState } from '../../actions/layout'
import List from 'antd/lib/list'
import { getMenuState } from '../../store/selectors'
import { Stylable } from 'css-in-jsx'
import { PRIMARY_BRAND_COLOR } from '../../styles/constants'

const StylableLink = Stylable(Link);
const StylableButton = Stylable(Button);
const StylableList = Stylable(List);
const StylableListItem = Stylable(List.Item);
const StylableListItemMeta = Stylable(List.Item.Meta)

class Menu extends Component {
  onChangeMenuState = nItem => {
    this.props.onChangeMenuState(nItem)
  }

  render() {
    const { sidebarDocked, menuOpen } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            allMenuItemsJson {
              edges {
                node {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => {
          const menuItems = data.allMenuItemsJson.edges.map(edge => edge.node)
          return (
            <div>
              {sidebarDocked && (
                <div>
                  {menuItems.reverse().map(item => {
                    return (
                      <Stylable.div
                        key={menuItems.indexOf(item)}
                      >
                        <style>
                          margin-left: 2em;
                          float: right;
                        </style>
                        <Stylable.p>
                          <style>
                            margin: 0;
                            font-size: 1rem;
                          </style>
                          <StylableLink
                            to={item.link}
                          >
                            <style>
                              color: white;
                              text-decoration: none;
                              &:hover <>
                                color: {PRIMARY_BRAND_COLOR};
                              </>
                            </style>
                            {item.name}
                          </StylableLink>
                        </Stylable.p>
                      </Stylable.div>
                    )
                  })}
                </div>
              )}
              {!sidebarDocked && (
                <StylableButton
                  type="link"
                  onClick={() => {
                    this.onChangeMenuState(menuItems.length)
                  }}
                  icon="menu"
                >
                  <style>
                    position: fixed;
                    right: 10px;
                    top: 12px;
                    color: white;
                    &:hover, &:focus <>
                      color: white;
                    </>
                  </style>
                </StylableButton>
              )}
              {menuOpen && !sidebarDocked && (
                <StylableList
                  itemLayout="horizontal"
                  dataSource={menuItems}
                  renderItem={item => (
                    <StylableListItem key={menuItems.indexOf(item)}>
                      <style>
                        list-style: none;
                        margin-left: -20px;
                      </style>
                      <StylableListItemMeta
                        title={
                          <StylableLink
                            to={item.link}
                            onClick={() => {
                              this.onChangeMenuState(menuItems.length)
                            }}
                          >
                            <style>
                              color: white;
                              text-decoration: none;
                              &:hover <>
                                color: {PRIMARY_BRAND_COLOR};
                              </>
                            </style>
                            {item.name}
                          </StylableLink>
                        }
                      >
                        <style>
                          color: white;
                          text-decoration: none;
                        </style>
                      </StylableListItemMeta>
                    </StylableListItem>
                  )}
                >
                  <style>
                    width: 100%;
                    float: left;
                  </style>
                </StylableList>
              )}
            </div>
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
  }
}

const mapDispatchToProps = {
  onChangeMenuState,
}

// export default Menu
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

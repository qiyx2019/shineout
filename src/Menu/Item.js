import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getProps, defaultProps } from '../utils/proptypes'
import { menuClass } from '../styles'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(data) {
    if (this.props.data.disabled) return
    this.props.handleClick(data)
  }
  render() {
    const {
      data, itemRender, isActive, inlineIndent, mode,
    } = this.props
    const itemData = typeof itemRender === 'string' ? data[itemRender] : itemRender(data)
    const className = classnames(
      menuClass('item', this.props.data.disabled && 'disabled', {
        'item-selected': isActive,
      }),
      this.props.className,
    )
    return (
      <li
        className={className}
        style={mode === 'inline' ? { paddingLeft: inlineIndent } : {}}
      >
        <a
          onClick={() => this.handleClick(data)}
          ref={this.bindElement}
        >{itemData}
        </a>
      </li>)
  }
}

Item.propTypes = {
  ...getProps(),
  data: PropTypes.object,
  menuKey: PropTypes.string,
  itemRender: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
  inlineIndent: PropTypes.number,
}

Item.defaultProps = {
  ...defaultProps,
  data: {},
  menuKey: '',
  itemRender: 'title',
  isActive: false,
}

export default Item

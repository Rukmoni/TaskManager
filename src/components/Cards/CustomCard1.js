import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer
} from 'rt/styles/Base'
import Tag from './Card/Tag'
import DeleteButton from 'rt/widgets/DeleteButton'

class CustomCard1 extends Component {
  onDelete = e => {
    this.props.onDelete()
    e.stopPropagation()
  }

  render()  {
    const {
      showDeleteButton,
      style,
      tagStyle,
      onClick,
      onDelete,
      className,
      id,
      title,
      label,
      description,
      tags,
      cardDraggable
    } = this.props

    return (
      <MovableCardWrapper
        data-id={id}
        onClick={onClick}
        style={style}
        className={className}
      >
        <CardHeader>
         
          <CardRightContent>{label}</CardRightContent>
          {showDeleteButton && <DeleteButton onClick={this.onDelete} />}
        </CardHeader>
        <Detail>{description}</Detail>
        {tags && tags.length> 0 && (
          <Footer>
            {tags.map(tag => (
              <Tag key={tag.title} {...tag} tagStyle={tagStyle} />
            ))}
          </Footer>
        )}
      </MovableCardWrapper>
      )
  }
}

CustomCard1.propTypes = {
  showDeleteButton: PropTypes.bool,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  tagStyle: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
}

CustomCard1.defaultProps = {
  showDeleteButton: true,
  onDelete: () => {},
  onClick: () => {},
  style: {},
  tagStyle: {},
  title: 'no title',
  description: '',
  label: '',
  tags: [],
  className: ''
}

export default CustomCard1
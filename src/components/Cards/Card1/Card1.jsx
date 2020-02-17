import React, {Component} from 'react'
import {CardWrapper,CardHeader,CardTitle,CardRightContent,Detail} from './cardstyle';


class Card1 extends Component { 

    render(){
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
        <CardWrapper>
            <CardHeader>
          <CardTitle draggable={cardDraggable}>{title}</CardTitle>
          <CardRightContent>{label}</CardRightContent>
          
        </CardHeader>
        <Detail>{description}</Detail>
        </CardWrapper>
     );
    }
}
 
export default Card1;
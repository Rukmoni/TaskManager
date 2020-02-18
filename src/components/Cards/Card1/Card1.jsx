import React, {Component} from 'react'
import { CardWrapper, CardHeader, CardTitle, CardRightContent, Detail, AvatarImg,CardFooter,FooterLeft,FooterRight } from './cardstyle';
import {faUserCircle,faCogs} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
        img,
        title,
        color,
        label,
        description,
        tags,
        cardDraggable
      } = this.props
    return ( 
        <CardWrapper color={color}>
            <CardHeader>
          <CardTitle draggable={cardDraggable}>{title}</CardTitle>
          <CardRightContent>{img?
            <AvatarImg src={img}/>
             
           :<FontAwesomeIcon icon={faUserCircle} />
          }</CardRightContent>
         
        </CardHeader>
       
        <Detail>{description}</Detail>
        <CardFooter><FooterLeft></FooterLeft><FooterRight><FontAwesomeIcon icon={faCogs} /></FooterRight></CardFooter>
        
        </CardWrapper>
     );
    }
}
 
export default Card1;
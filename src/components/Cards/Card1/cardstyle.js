import React from "react";
import styled, { css } from "styled-components";

export const Header = styled.header`
 
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const RightContent = styled.span`
  width: 30%;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
`
export const Title = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  cursor: ${props => (props.draggable ? 'grab' : `auto`)};
  width: 70%;
`
export const Detail = styled.div`
  font-size: 12px;
  color: #4d4d4d;
  white-space: pre-wrap;
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
`
export const CardWrapper = styled.article`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
  border-left-style: solid;
  border-left-color:  ${props => (props.color ? props.color : `#92a8d1`)};
`

export const CardHeader = styled(Header)`
 
  color: #000;
  align-items:center;
`
export const CardFooter = styled(Header)`
 
  color: #000;
  align-items:center;
  margin-bottom:0px;
`
export const FooterLeft = styled.span`
  font-weight: bold;
  font-size: 15px;
  padding-top:5px;
  
  width: 70%;
`
export const FooterRight = styled(RightContent)`
padding-top:5px;
  font-size: 10px;
  color:#cccccc;

`

export const CardRightContent = styled(RightContent)`
  font-size: 28px;
  color:#cccccc;

`

export const CardTitle = styled(Title)`
  font-size: 14px;
`

export const AvatarImg=styled.img`
src: url(${props => props.src});
width:28px;
height:28px;
border-radius:25rem;
`
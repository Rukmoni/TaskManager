import React from "react";
import styled, { css } from "styled-components";

export const Header = styled.header`
  margin-bottom: 10px;
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
`

export const CardHeader = styled(Header)`
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
  color: #000;
`

export const CardRightContent = styled(RightContent)`
  font-size: 10px;
`

export const CardTitle = styled(Title)`
  font-size: 14px;
`
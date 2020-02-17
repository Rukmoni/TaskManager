
import React from "react";
import styled, { css } from "styled-components";
export const Header = styled.header`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  cursor: ${props => (props.draggable ? 'grab' : `auto`)};
  width: 70%;
`

export const LaneHeader = styled(Header)`
  margin-bottom: 0px;
  ${props => props.editLaneTitle && css`
    padding: 0px;
    line-height: 30px;
    `
  }
  ${props => !props.editLaneTitle && css`
    padding: 0px 5px;
    `
  }
`
export const RightContent = styled.span`
  width: 30%;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
`

export const InlineInput = styled.textarea`
  overflow-x: hidden; /* for Firefox (issue #5) */
  word-wrap: break-word;
  min-height: 28px;
  max-height: 112px; /* optional, but recommended */
  resize: none;
  width: 100%;
  height: 28px;
  font-size: 15px;
  line-height: 20px;
  background-color: transparent;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 3px;
  border: 0;
  padding: 4px 8px;
  outline: 0;
  ${props => props.border && css`
    &:focus {
      box-shadow: inset 0 0 0 2px #0079bf;
    }
    `
  }
  &:focus {
    background-color: white;
  }
`

export const AddCardLink = styled.a`
  border-radius: 0 0 3px 3px;
  color: #838c91;
  display: block;
  padding: 5px 2px;
  margin-top: 10px;
  position: relative;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    //background-color: #cdd2d4;
    color: #4d4d4d;
    text-decoration: underline;
  }
`
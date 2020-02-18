import React from 'react'
import {AddCardLink} from './LaneHeaderStyle';
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({onClick, t}) => <AddCardLink onClick={onClick}><FontAwesomeIcon icon={faPlusSquare} /></AddCardLink>
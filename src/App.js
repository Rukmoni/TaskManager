
import React from "react";
import "./styles.css";
import data from "./server/data.json"
import Board from "react-trello";

import  LaneHeaderComponent  from './components/Lane/LaneHeader';
import  AddCardLink  from './components/Lane/AddCardLink';
import {faTasks,faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card1 from './components/Cards/Card1/Card1';

const BoardWrapper = {
 
 backgroundColor:'#FEFEFE'

}

const components = {
  LaneHeader:LaneHeaderComponent,
  Card:Card1,
  AddCardLink:AddCardLink
}

export default function App() {
  const str='<Ruks/>';
  return (
    <div>

<div class="masthead">
  <div className="left">
    <div className="logo"><FontAwesomeIcon icon={faTasks} />Tasks Board</div>
  </div>
  <div className="right">
    <div className="logo">{str}</div>
  </div>
</div>
    <div className="Board">
    <Board data={data} draggable  components={components} style={BoardWrapper} className="boardWrapper" editable/>
    </div>
    </div>
  );
}

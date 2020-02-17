
import React from "react";
import "./styles.css";
import data from "./server/data.json"
import Board from "react-trello";

import  LaneHeaderComponent  from './components/Lane/LaneHeader';
import {faTasks} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoardWrapper = {
 
 backgroundColor:'#FEFEFE'

}


export default function App() {
  return (
    <div>

<div class="masthead"><div className="logo"><FontAwesomeIcon icon={faTasks} />Tasks Board</div></div>
    <div className="Board">
    <Board data={data} draggable  components={{LaneHeader:LaneHeaderComponent}} style={BoardWrapper} className="boardWrapper" editable/>
    </div>
    </div>
  );
}

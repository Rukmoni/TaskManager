import React from "react";
import "./styles.css";
import data from "./components/Board/data.json";
import Board from "react-trello";
import styled from 'styled-components';

const BoardWrapper = {
 height: "80vh",
 
}


export default function App() {
  return (
    <div>
    <div  class="masthead"><div className="logo">Tasks Board</div></div>
    <div className="Board">
    <Board data={data} draggable  style={BoardWrapper} className="boardWrapper"/>
    </div>
    </div>
  );
}

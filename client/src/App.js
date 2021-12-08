import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/test").then(res => console.log(res));
  }, [])
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<NewsComp key="general" category="general"/>}/>
          <Route path="/business" element = {<NewsComp key="business" category="business"/>}/>
          <Route path="/entertainment" element = {<NewsComp key="entertainment" category="entertainment"/>}/>
          <Route path="/health" element = {<NewsComp key="health" category="health"/>}/>
          <Route path="/science" element = {<NewsComp key="science" category="science"/>}/>
          <Route path="/sports" element = {<NewsComp key="sports" category="sports"/>}/>
          <Route path="/technology" element = {<NewsComp key="technology" category="technology"/>}/>
        </Routes>
        
        </Router>
      </>
    );
  }
}
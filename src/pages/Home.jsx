import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">FrameTwo</Link>
        </li>
        <li>
          <Link to="/follow">Follow</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/like">Like</Link>
        </li>
        <li>
          <Link to="/profilemod">ProfileMod</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/sanse">Sanse</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
        <li>
          <Link to="/page3">Page3</Link>
        </li>
        <li>
          <Link to="/page4">Page4</Link>
        </li>
        <li>
          <Link to="/page5">Page5</Link>
        </li>
        <li>
          <Link to="/page6">Page6</Link>
        </li>
        <li>
          <Link to="/temporarystorage">TemporaryStorage</Link>
        </li>
        <li>
          <Link to="/page7">Page7</Link>
        </li>
        <li>
          <Link to="/page8">Page8</Link>
        </li>
        <li>
          <Link to="/fairytalesetting">FairytaleSetting</Link>
        </li>
        <li>
          <Link to="/page9">Page9</Link>
        </li>
        <li>
          <Link to="/page10">Page10</Link>
        </li>
        <li>
          <Link to="/page11">Page11</Link>
        </li>
        <li>
          <Link to="/frameone">FrameOne</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

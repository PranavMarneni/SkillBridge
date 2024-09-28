import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/header.js'
import Hero from './components/hero.js'
import Form from './components/input.js'
import Plan from './components/studyPlan.js'
import { videos } from './components/videos';

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <Hero />
      <Form />
      <Plan />
      <Video videos = {videos}/>
      <div>Reccomended Practice</div>
      <div>
        <h1>Project Ideas</h1>
        <p>Porject ideas generated here</p>
      </div>
      {/* Rest of your app content */}
    </div>
  );
}

export default App;

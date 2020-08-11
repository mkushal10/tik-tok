import React from 'react';
import './App.css';
import Video from "./Video";

function App() {
  return (
    //BAM convetion
    <div className="app">
      <h1>Hello World</h1>
      <div class="app_videos">
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;

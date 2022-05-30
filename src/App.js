import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function SecretComponent() {
  return <h1>Super secret information only for the authorized users</h1>;
}

function RegularComponent() {
  return <h1>Regular information for all the users</h1>;
}
function App() {
  const [emotion, setEmotion] = useState("Happy");
  console.log(emotion);
  return (
    <>
      <h1>The current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("Frustrated")}> Frustrate</button>
      <button onClick={() => setEmotion("Very Sad!")}> Sad!</button>
    </>
  )
}

export default App;

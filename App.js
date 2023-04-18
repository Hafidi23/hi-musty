import React,{useState, useEffect} from "react";
import HookCounter from "./components/HookCounter.js";
import HookCounterFour from "./components/HookCounterFour.js";
import HookCounterTre from "./components/HookCounterTre.js";
import HookCounterTwo from "./components/HookCounterTwo.js";
import Toggle from "./components/Toggle.js";
import Greeting from "./components/Greeting.js";
import NameForm from "./components/NameForm.js";
import GustForm from "./components/GustForm.js";
import FinestraRegistrazione from "./components/FinestraRegistrazione.js";
import Card from "./components/Card.js";
function App() {
  const[ windowWidth, setwindowWidth] = useState(window.innerWidth)

  const handleResize =() => {
    setwindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])
  return (
    <div className="App">
      <HookCounter />
      <HookCounterTwo /> <br></br>
      <HookCounterTre />
      <HookCounterFour /> <br></br>
      <Toggle />
      <Greeting isLoggedIn={true} />
      <NameForm /> <br></br>
      <GustForm />
      <FinestraRegistrazione />
      <Card />
     <div>{windowWidth} </div>




    </div>
  );
}

export default App;

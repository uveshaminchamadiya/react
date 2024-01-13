import Map from "./components/Map";
import Spread from "./components/Spread";
import Props from "./components/Props";
import Events from "./components/Events"
import UseState from "./components/UseState";

function App() {
  return (
    <>
      <Map />
      <Spread />
      <Props brand='Honda' model='Activa' color='Black' />
      <Events />
      <UseState />
    </>
  );
}

export default App;

import "./App.css";

import Header from "./components/Header";
import EventCreation from "./components/EventCreation";
import { EventProvider } from "./components/EventContext";
const App = () => {
  return (
    <div>
      <EventProvider>
        <Header />

        <EventCreation />
      </EventProvider>
    </div>
  );
};

export default App;

import "./App.css";
import TicketSelection from "./components/TicketSelection";
import Header from "./components/Header";
import EventCreation from "./components/EventCreation";
import { EventProvider } from "./components/EventContext";
const App = () => {
  return (
    <div>
      <EventProvider>
        <Header />
        <TicketSelection />
        <EventCreation />
      </EventProvider>
    </div>
  );
};

export default App;

import "./App.css";
import TicketSelection from "./components/TicketSelection";
import Header from "./components/Header";
import EventCreation from "./components/EventCreation";
const App = () => {
  return (
    <div>
      <Header />
      <TicketSelection />
      <EventCreation />
    </div>
  );
};

export default App;

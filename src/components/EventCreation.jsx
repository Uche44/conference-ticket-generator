import { useForm } from "react-hook-form";

import { TicketSelection } from "./TicketSelection";
import { useEvent } from "./EventContext";
import { useState } from "react";

const EventCreation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { events, addEvent, message, clearMessage } = useEvent(); // Get context values
  const [hasCreated, setHasCreated] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the selected event

  const onSubmit = (data) => {
    addEvent(data); // Use addEvent from context
    reset();
    setHasCreated(true);
  };

  const newEvent = () => {
    setHasCreated(false);
    localStorage.clear();
    clearMessage(); // Optionally clear the message
  };

  const handleRegister = (event) => {
    setSelectedEvent(event); // Set the selected event on register click
  };

  return (
    <>
      {selectedEvent ? ( // Check if a specific event is selected
        <TicketSelection event={selectedEvent} /> // Pass the selected event to TicketSelection
      ) : (
        <>
          {hasCreated ? (
            <div className="first-event-page">
              <button
                onClick={newEvent}
                className="create-event"
                title="Add event"
              >
                +
              </button>
              <h2>Available Events</h2>
              <section id="event-deets">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="event-deets"
                  >
                    <strong>{event.name}</strong>
                    <em>:</em>
                    <p>{event.description}</p>
                    <p>({event.date})</p>
                    <button
                      className="register"
                      onClick={() => handleRegister(event)}
                    >
                      Register
                    </button>
                  </div>
                ))}
              </section>
            </div>
          ) : (
            <div id="event-form">
              <h1>Add your Event</h1>
              <form
                className=".popup"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
              >
                <div className="popup">
                  <label htmlFor="event-name">Event Name:</label>
                  <input
                    type="text"
                    id="event-name"
                    {...register("name", {
                      required: "Event name is required",
                    })}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="popup">
                  <label htmlFor="event-date">Event Date:</label>
                  <input
                    type="date"
                    id="event-date"
                    {...register("date", {
                      required: "Event date is required",
                    })}
                  />
                  {errors.date && <span>{errors.date.message}</span>}
                </div>
                <div className="popup">
                  <label htmlFor="event-description">Event Description:</label>
                  <textarea
                    id="event-description"
                    {...register("description", {
                      required: "Event description is required",
                    })}
                  />
                  {errors.description && (
                    <span>{errors.description.message}</span>
                  )}
                </div>
                <button
                  id="submit-event"
                  type="submit"
                >
                  Upload Event
                </button>
              </form>
              {message && <p>{message}</p>}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EventCreation;

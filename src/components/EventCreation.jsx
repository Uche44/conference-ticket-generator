import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const EventCreation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");
  const [hasCreated, setHasCreated] = useState(true);

  useEffect(() => {
    // Load events from local storage when the component mounts
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  // onSubmit function that gets called when form is submitted successfully
  const onSubmit = (data) => {
    // Add the new event to the current events state
    const updatedEvents = [...events, data];

    // Save events to local storage
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    // Update state and set a success message
    setEvents(updatedEvents);
    setMessage("Event uploaded successfully!");

    // Reset the form fields after submission
    reset();
    setHasCreated(true);
  };
  const newEvent = () => {
    setHasCreated(false);
  };
  return (
    <>
      {hasCreated ? (
        <div className="first-event-page">
          <button
            onClick={newEvent}
            className="create-event"
            title="add event"
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
                on {event.date}: {event.description}
                <button className="register">Register</button>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <div id="event-form">
          <h1>Upload Event</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div>
              <label htmlFor="event-name">Event Name:</label>
              <input
                type="text"
                id="event-name"
                {...register("name", { required: "Event name is required" })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="event-date">Event Date:</label>
              <input
                type="date"
                id="event-date"
                {...register("date", { required: "Event date is required" })}
              />
              {errors.date && <span>{errors.date.message}</span>}
            </div>
            <div>
              <label htmlFor="event-description">Event Description:</label>
              <textarea
                id="event-description"
                {...register("description", {
                  required: "Event description is required",
                })}
              />
              {errors.description && <span>{errors.description.message}</span>}
            </div>
            <button type="submit">Upload Event</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      )}
    </>
  );
};

export default EventCreation;

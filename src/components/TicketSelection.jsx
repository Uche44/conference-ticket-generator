
// import { AttendeeDetails } from "./AttendeeDetails";

// export const TicketSelection = ({ event }) => {
//   const [showAttendee, setShowAttendee]=useState(false);
//   const Tickets = [
//     {
//       title: "REGULAR ACCESS",
//       reservation: "20 left",
//       cost: "Free",
//     },
//     {
//       title: "VIP ACCESS",
//       reservation: "20 left",
//       cost: "$50",
//     },
//     {
//       title: "VVIP ACCESS",
//       reservation: "20 left",
//       cost: "$150",
//     },
//   ];
//   const showAttendeePage=()=>{
//     setShowAttendee(true);
//   }
//   // Accept the event as a prop
//   return (
//     <>
//       <section className="first-ticket-page">
//         {showAttendee ? (<AttendeeDetails/>) : (
//           <>
//           <div className="banner">
//           <h3 className="title">Ticket selection</h3>
//           <p>step 1/3</p>
//         </div>
//         <div className="content-ticket">
//           <div className="event-title">
//             <h2 className="name">{event.name}</h2>
//             <p className="description">{event.description}</p>
//             <p className="date">Date: {event.date}</p>
//           </div>
//           <hr></hr>
//           <p className="type">Select Ticket type</p>
//           <div className="ticket-type">
//             {Tickets.map((ticket, index) => (
//               <button key={index}>
//                 <p className="ticket-title">{ticket.title}</p>
//                 <p className="reservation">{ticket.reservation}</p>
//                 <p className="cost">{ticket.cost}</p>
//               </button>
//             ))}
//           </div>
//           <p className="ticket-no">Number of Tickets</p>
//           <input
//             type="number"
            
//           />
//           <div className="continuity">
//             <button className="cancel">Cancel</button>
//             <button className="next"
//             onClick={showAttendeePage}
//             >Next</button>
//           </div>
//         </div>
//         </>
//         )}
//       </section>
//     </>
//   );
// };

// new
import React, { useState } from 'react';  // Ensure React and useState are imported
import { AttendeeDetails } from "./AttendeeDetails";

export const TicketSelection = ({ event }) => {
  const [showAttendee, setShowAttendee] = useState(false);  // Proper state management
  const Tickets = [
    { title: "REGULAR ACCESS", reservation: "20 left", cost: "Free" },
    { title: "VIP ACCESS", reservation: "20 left", cost: "$50" },
    { title: "VVIP ACCESS", reservation: "20 left", cost: "$150" }
  ];

  const showAttendeePage = () => {
    setShowAttendee(true);
  };

  return (
    <>
      <section className="first-ticket-page">
        {showAttendee ? (  // Corrected conditional rendering
          <AttendeeDetails />
        ) : (
          <>
            <div className="banner">
              <h3 className="title">Ticket selection</h3>
              <p>Step 1/3</p>
            </div>
            <div className="content-ticket">
              <div className="event-title">
                <h2 className="name">{event.name}</h2>
                <p className="description">{event.description}</p>
                <p className="date">Date: {event.date}</p>
              </div>
              <hr />
              <p className="type">Select Ticket Type</p>
              <div className="ticket-type">
                {Tickets.map((ticket, index) => (
                  <button key={index}>
                    <p className="ticket-title">{ticket.title}</p>
                    <p className="reservation">{ticket.reservation}</p>
                    <p className="cost">{ticket.cost}</p>
                  </button>
                ))}
              </div>
              <p className="ticket-no">Number of Tickets</p>
              <input className='num' type="number" min="1" placeholder="Enter number" />  {/* Added min and placeholder */}
              <div className="continuity">
                <button className="cancel">Cancel</button>
                <button className="next" onClick={showAttendeePage}>
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

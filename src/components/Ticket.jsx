const Ticket = ({
  ticketData,
  setTicketData,
  ticketRef,
  //   imageDownload,
  //   pdfDownload,
}) => {
  return (
    <>
      <div
        ref={ticketRef}
        className="ticket"
      >
        <h2 className="text-xl font-bold">Conference Ticket</h2>

        <img
          src={ticketData.image}
          alt="Profile"
          className="ticket-img"
        />

        <p className="mt-2">
          <strong>Name:</strong> {ticketData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {ticketData.email}
        </p>
      </div>
    </>
  );
};

export default Ticket;

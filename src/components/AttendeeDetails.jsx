import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ImageUpload } from "./ImageUpload";
import Ticket from "./Ticket";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required").min(3, "Too short"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const AttendeeDetails = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [ticketData, setTicketData] = useState(null);
  const ticketRef = useRef(null);
  const [showTicket, setShowTIcket] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Uploaded Image URL:", uploadedImageUrl);

    setTicketData({ ...data, image: uploadedImageUrl.url });
    setShowTIcket(true);
  };

  return (
    <>
      {showTicket ? (
        <Ticket
          ticketData={ticketData}
          setTicketData={setTicketData}
          ticketRef={ticketRef}
          // imageDownload={downloadTicketAsImage}
          // pdfDownload={downloadTicketAsPDF}
        />
      ) : (
        <div className="content-ticket">
          {/* Banner */}
          <div className="banner mb-4">
            <h2 className="name">Attendee Details</h2>
            <p className="text-gray-600">Step 2/3</p>
          </div>

          {/* Image Upload Section */}

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="event-title mb-4">
              <p className="font-medium">Upload Profile Photo</p>
              <div className="img-container mt-2">
                <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
                {uploadedImageUrl && (
                  <img
                    src={uploadedImageUrl}
                    alt="Uploaded"
                    className="w-24 h-24 object-cover rounded-full mt-2 border"
                  />
                )}
              </div>
            </div>
            {/* Full Name */}
            <div>
              <label className="user">Full Name</label>
              <input
                type="text"
                {...register("fullName")}
                className="user"
              />
              {errors.fullName && (
                <p className="errors">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="b-user">
              <label className="user">Email</label>
              <input
                type="email"
                {...register("email")}
                className="user"
              />
              {errors.email && <p className="errors">{errors.email.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="user"
            >
              Generate Ticket
            </button>
          </form>
        </div>
      )}
    </>
  );
};

// {ticketData && (
//   <div className="mt-4 flex gap-2">
//     <button
//       onClick={downloadTicketAsImage}
//       className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
//     >
//       Download as Image
//     </button>
//     <button
//       onClick={downloadTicketAsPDF}
//       className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
//     >
//       Download as PDF
//     </button>
//   </div>
// )}

import { ImageUpload } from "./ImageUpload";

export const AttendeeDetails = () => {
  return (
    <div className='content-ticket'>
        <div className='banner'>
        <h2 className='name'>Attendee Details</h2>
        <p>Step 2/3</p>
           </div>
           <div className='event-title'>
            <p className='img'>Upload Profile Photo</p>
            <div className='img-container'>
               <ImageUpload />
            </div>
           </div>
    </div>
  )
}


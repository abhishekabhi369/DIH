import React, { forwardRef, useRef } from 'react'
import './Imp.css'
import { FaAnglesUp } from "react-icons/fa6";
const Imp = forwardRef(({ handletopclick }, ref) => {
  
  return (
    <div ref={ref} style={{backgroundColor:"#603F83FF"}}>
     <div className='div-para'>
       <p>If you are flying into Dubai International Airport, Dubai International Hotel is located inside the Airport Terminal Buildings before Passport Control (Immigration and Customs) in only Concourses A, B, and C. You must be in Transit to Access the Hotel.</p>
       <p>Passengers are strongly advised not to pass through Immigration and Customs and exit the Terminal as they will be denied access back in to the Hotel until 3 hours prior to their “outbound” flight’s departure.</p>
       <p>If you are arriving at Dubai International Airport from Dubai City, Dubai International Hotel is located inside the Airport Terminal Buildings after Passport Control (Immigration and Customs). We only have hotels in Concourses A, B and C. You must be checked in to a flight to Access the hotel.</p>
       <p>Passengers are strongly advised to confirm the check in times of flights and the details of their check in procedures with their respective Airlines.</p>
       <p>If you are arriving into Terminal 2, do not exit the Terminal and pass through Passport Control (Immigration and Customs). You will have to go to the Transfer Desk and use the free inter-terminal shuttle bus to gain access to Concourses A, B, or C.</p>
       <p>Access to the Hotel Reception in Concourse A can be made using the elevators located near gates A1 or A24. In Concourse B, access to the Hotel Reception can be made using the elevators located between near gates B14 or B22. In Concourse C, one can access the Hotel Reception using the dedicated escalators or elevator located in between gates C15 and C17. We do not have a hotel located in Concourse D.</p>
       <p>Hotel guests can move between all four (04) concourses A, B, C and D (Airside), however Dubai International Hotel is only located inside Concourses A, B and C of Dubai International Airport. If you are arriving and departing with on only Emirates Airlines, you might not be allowed access into Concourse D.</p>
       <p>It is strongly recommended that passengers carry their toiletries etc. in their hand luggage, as they will be unable to retrieve their checked-in luggage for the reasons mentioned in the aforementioned points.</p>
       <div  className="scroll-containers">
          <button className="scroll-buttons" onClick={handletopclick} >
            Home <FaAnglesUp />
          </button>
        </div>
    </div>
    </div>
  )
});

export default Imp;

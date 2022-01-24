import {  useState } from "react";
import { useAuth } from "../../context/AuthContext";


export default function Login() {
  const {user} = useAuth();

  


  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" SM:shadow-sm SM:border SM:rounded-md flex flex-col  items-center p-8 sm:w-full w-2/5  ">
        {/* <div className="flex justify-center flex-col items-center"> */}
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Femail-verification.png?alt=media&token=bc0c6aae-3111-4613-a644-0bf613d21622"
            }
            className="w-36 h-36"
            alt='Login.jpg'
          />

          <p className="my-4 text-sm text-custom-grey-shade">A verification link has sent to this <span className="text-custom-black">{user.email}.</span> Please verify in your inbox or spam folder. If you don't find click send link again.</p>
          <button
                type="submit"
                className="bg-custom-black h-12 w-full mt-4 mb-2 rounded-sm text-white font-semibold hover:text-custom-black  hover:bg-white hover:border-custom-black"

                onClick={()=>{user.sendEmailVerification()}}
              >
                Send Verification Link
              </button>
        {/* </div> */}
        
          
        
      </div>
    </div>
  );
}

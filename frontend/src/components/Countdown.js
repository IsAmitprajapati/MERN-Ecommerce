import React,{useState,useEffect} from "react";
import sendEmailImage from "../assest/forgotpasswnedSend.gif";
import sampleImage from '../assest/sampleImage.jpg'

export default function Countdown({email,againCall}) {
    const [countdown, setCountDown] = useState(60);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
          setCountDown((preve) => parseInt(preve - 1));
        }, 1000);
    
        if(countdown === 0){
            clearInterval(countdownInterval)
        }
        return ()=>{
            clearInterval(countdownInterval)
        }
      }, [countdown]);

      const handleEmailSendAgain = ()=>{
        if(countdown === 0){
          setCountDown(60)
        }
      }


  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="w-32 h-32 rounded-full bg-slate-100 overflow-hidden">
          <img src={sendEmailImage} alt="sign in" />
        </div>
        <p className="mt-6 text-lg my-2">Check your Email :  <span className="text-red-500">{email}</span></p>
        
        <button className={`text-sm text-slate-400 cursor-pointer hover:underline ${countdown !== 0 && "text-blue-600 "}`} onClick={handleEmailSendAgain} disabled={countdown !== 0}>
          <span onClick={ countdown === 0 && againCall}>Resend email again : 0:{countdown}</span>
          
        </button>
      </div>
    </>
  );
}

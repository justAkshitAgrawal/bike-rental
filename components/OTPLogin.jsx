import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import OTPInput from "react-otp-input";
import { useRouter } from "next/navigation";

export const OTPLogin = () => {
  const [otp, setOtp] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  const verifyOTP = () => {
    let confirmationResult = window.confirmationResult;

    confirmationResult
      .confirm(otp)
      .then((result) => {
        // console.log(result);
        localStorage.setItem("user", JSON.stringify(result.user));
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid OTP");
      });
  };

  return (
    <div className="relative flex flex-col items-center px-10 py-5 bg-white rounded-md">
      <GiStarShuriken className="absolute w-5 h-5 top-4 left-4 " />
      <h1 className="w-full pb-1 text-4xl text-center border-b max-sm:text-2xl ">
        Enter OTP
      </h1>
      <div className="flex flex-col items-center mt-5">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          placeholder="XXXXXX"
          containerStyle=""
          inputStyle="h-[45px] lg:!w-[50px] max-sm:!w-[30px] bg-gray-200 outline-none rounded-md  mx-1"
          renderInput={(props) => <input {...props} />}
        />

        {error && (
          <p className="mt-2 text-red-500">
            Please verify if the OTP is correct.
          </p>
        )}

        <button
          className="p-3 mt-5 text-white bg-blue-500 rounded-md"
          onClick={verifyOTP}
        >
          Login
        </button>
      </div>
    </div>
  );
};

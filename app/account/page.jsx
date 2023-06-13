"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

import { PageWrapper } from "../page-wrapper";
import { PhoneLogin } from "@/components/PhoneLogin";
import { OTPLogin } from "@/components/OTPLogin";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [phone, setPhone] = React.useState("");
  const [showOtp, setShowOtp] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("/dashboard");
    }
  }, []);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  const getOTP = () => {
    generateRecaptcha();
    const phoneNumberWithCountryCode = "+91" + phone;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumberWithCountryCode, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div id="recaptcha-container"></div>
      <PageWrapper>
        <div className="flex items-center justify-center mt-44 ">
          {!showOtp ? (
            <PhoneLogin
              phone={phone}
              setPhone={setPhone}
              setShowOtp={setShowOtp}
              getOTP={getOTP}
            />
          ) : (
            <OTPLogin />
          )}
        </div>
      </PageWrapper>
    </>
  );
};

export default Login;

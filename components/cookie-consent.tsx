"use client";

import React from 'react';
import CookieConsent from "react-cookie-consent";
import { CookiePreferences } from "./cookie-preferences";

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      cookieName="alexis-cookie-consent"
      style={{ background: "#f3f4f6", color: "#1f2937", padding: "1rem" }}
      buttonStyle={{
        background: "#4b5563",
        color: "#ffffff",
        fontSize: "14px",
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
      }}
      expires={150}
      enableDeclineButton
      declineButtonStyle={{
        background: "transparent",
        color: "#4b5563",
        fontSize: "14px",
        border: "1px solid #4b5563",
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
      }}
      declineButtonText="Customize"
      onDecline={() => {
        // This function will be called when the "Customize" button is clicked
        // You can add any additional logic here if needed
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <p className="mb-4 sm:mb-0 text-sm">
          We value your privacy. We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
          <a href="/privacy" className="underline">
            Learn more
          </a>
        </p>
        <div className="flex items-center space-x-4">
          <CookiePreferences
            onSave={(preferences) => {
              // Handle saving preferences
              console.log("Saved preferences:", preferences);
            }}
          />
        </div>
      </div>
    </CookieConsent>
  );
}
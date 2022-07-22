/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light mb-4">Home Sweet Private Home</h1>
      <iframe
        src="https://giphy.com/embed/uSYQsJQWEv6O4"
        width="480"
        height="361"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
}

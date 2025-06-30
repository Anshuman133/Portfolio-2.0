import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-4">Contact</h1>
        <p className="text-center text-gray-600 mb-8">
          Fill and submit the form below to contact
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

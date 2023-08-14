import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4" // h-screen
    >
      <form
        method="POST"
        action="https://getform.io/f/8c941688-d053-49cd-bda4-fa8b6400817a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Please submit the form or send me a email!- Talhakhan2028@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="email"
          name="Email"
        />

        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="message"
        ></textarea>

        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Lets collaborate
        </button>
      </form>
    </div>
  );
};

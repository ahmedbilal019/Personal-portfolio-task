import React from "react";

function Contact() {
  return (
    <section className="bg-gray-800 max-w-4 flex justify-center m-auto px-60 py-10">
      <form action="" className="flex flex-col gap-1.5">
        <div>
          <label htmlFor="" className="font-medium text-base">
            Name:
          </label>
          <br />
          <input
            type="text"
            name="yourName"
            id=""
            required
            className="inputField"
          />
        </div>

        <div>
          {" "}
          <label htmlFor="" className="font-medium text-base">
            Email:
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            required
            className="inputField"
          />
        </div>

        <div>
          <label htmlFor="" className="font-medium text-base">
            Message:
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="write your message here..."
            className="inputField"
            rows="6"
            
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-orange-700 px-2.5 py-1 rounded-3xl
               hover:bg-orange-500 "
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;

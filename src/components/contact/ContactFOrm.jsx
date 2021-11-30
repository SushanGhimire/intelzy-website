import React, { useState } from "react";
import InputFields from "../common/InputFields";
import input from "./input";
function ContactFOrm() {
  const [data, setData] = useState({
    name: "",
    contact: "",
    email: "",
    title: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { message } = data;
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-2 gap-6 font-lato"
      >
        {/* name  */}
        {input.map((val, index) => {
          return (
            <InputFields
              key={index}
              {...val}
              value={data[val.name]}
              handleChange={handleChange}
            />
          );
        })}
        {/* Message  */}
        <div className="lg:col-span-2">
          <label
            htmlFor=""
            className="text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Message
          </label>
          <div>
            <textarea
              className="input-style"
              placeholder="Enter your message.."
              name="message"
              id="mesage"
              rows="5"
              value={message}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>
        <div>
          <button className="text-white rounded-md py-2 px-6  bg-intelzy">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactFOrm;

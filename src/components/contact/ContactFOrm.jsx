import React from "react";

function ContactFOrm() {
  return (
    <div>
      <form action="" className="grid lg:grid-cols-2 gap-6 font-lato">
        {/* name  */}
        <div>
          <label
            htmlFor=""
            className="text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Name
          </label>
          <div>
            <input
              type="text"
              className="input-style"
              placeholder="Enter your name.."
            />
          </div>
        </div>
        {/* Contact  */}
        <div>
          <label
            htmlFor=""
            className="text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Contact
          </label>
          <div>
            <input
              type="number"
              className="input-style"
              placeholder="Enter your contact number.."
            />
          </div>
        </div>
        {/* Email  */}
        <div className="lg:col-span-2">
          <label
            htmlFor=""
            className="text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <div>
            <input
              type="email"
              className="input-style"
              placeholder="Enter your email address.."
            />
          </div>
        </div>
        {/* title  */}
        <div className="lg:col-span-2">
          <label
            htmlFor=""
            className="text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Title
          </label>
          <div>
            <input
              type="text"
              className="input-style"
              placeholder="Enter your contact number.."
            />
          </div>
        </div>
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
              placeholder="Enter your contact number.."
              name=""
              id=""
              rows="5"
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

"use client";

import React, { useEffect, useState } from "react";

function Register() {
  const districts = ["Bellingham Public Schools"];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let msg: string =
      pass === confirm
        ? `Account created with password: ${pass} and email: ${email}`
        : `Passwords do not match. Please try again.`;
    alert(msg);
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [district, setDistrict] = useState("Select district");
  const [bannerMsg, setBannerMsg] = useState("");
  const [bannerColor, setBannerColor] = useState("");

  useEffect(() => {
    if (pass !== "")
      setBannerMsg(
        pass == confirm ? "Passwords match!" : "Passwords don't match."
      );
    setBannerColor(
      pass == confirm ? "text-green-400 text-lg" : "text-red-500 text-lg"
    );
  }, [confirm]);

  return (
    <div className="select-auto w-screen h-screen">
      <form
        action="/send-data-here"
        method="post"
        onSubmit={handleSubmit}
        className="grid h-screen place-items-center"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col border-dotted hover:border-solid border-2 border-gray-200 w-fit rounded-lg p-3">
            <label htmlFor="email" className="text-gray-700">
              Enter Email:
            </label>
            <input
              value={email}
              type="email"
              placeholder="youremail@email.com"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-solid border-2 border-gray-100 rounded text-lg p-2 pl-3 pr-3"
              required
            />
          </div>
          <div className="flex flex-col border-dotted hover:border-solid border-2 border-gray-200 w-fit rounded-lg p-3">
            <label htmlFor="password" className="text-gray-700">
              Create Password:
            </label>
            <input
              value={pass}
              type="password"
              placeholder="******"
              id="password"
              name="password"
              onChange={(e) => setPass(e.target.value)}
              className="border-solid border-2 border-gray-100 rounded text-lg p-2 pl-3 pr-3"
              required
            />
          </div>
          <div className="flex flex-col border-dotted hover:border-solid border-2 border-gray-200 w-fit rounded-lg p-3">
            <label htmlFor="conf-password" className="text-gray-700">
              Confirm Password:
            </label>
            <input
              value={confirm}
              type="password"
              placeholder="******"
              id="conf-password"
              name="conf-password"
              onChange={(e) => setConfirm(e.target.value)}
              className="border-solid border-2 border-gray-100 rounded text-lg p-2 pl-3 pr-3"
              required
            />
          </div>
          <h1 className={bannerColor}>{bannerMsg}</h1>
          <select
            name="district"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="border-solid border-2 border-gray-300 bg-gray-200 w-fit p-1.5 rounded"
            required
          >
            {districts.map((dist) => (
              <option value={dist} key={dist}>
                {dist}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="self-start border-solid border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 p-2 hover:shadow rounded"
          >
            <h2>Create Account</h2>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;

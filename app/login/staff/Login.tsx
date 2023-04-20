"use client";
import React, { useState } from "react";
import Link from "next/link";

export const Login = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
    
  }

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="grid h-screen place-items-center">
      <form
        action="/send-data-here"
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col"
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
              Password:
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
          <button type="submit" className="self-start bg-gray-100">
            Log In
          </button>
          <p>Don&apost have an account yet?</p>
          <Link href="/register">Make one here</Link>
        </div>
      </form>
      <h1></h1>
    </div>
  );
};

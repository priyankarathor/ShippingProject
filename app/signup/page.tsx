"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    userName: "",
  });

  const onSignup = async () => {
    // signup logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Sign Up</h2>
      <hr />

      <label htmlFor="username">Username</label>
      <input
        className="border border-gray-300"
        id="username"
        type="text"
        value={user.userName}
        onChange={(e) =>
          setUser({ ...user, userName: e.target.value })
        }
      />

      <label htmlFor="email">Email</label>
      <input
        className="border border-gray-300"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
      />

      <label htmlFor="password">Password</label>
      <input
        className="border border-gray-300"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
      />

      <button className="p-2 mt-3 border border-gray-900 rounded-lg mb-4">
        Submit
      </button>
    </div>
  );
}

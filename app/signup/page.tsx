"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    userName: ""
  });

  const onSignup = async () => {
    // signup logic later
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Sign Up</h2>
      <hr />

      <label htmlFor="username">username</label>
      <input
        className="border border-gray-300"
        id="username"
        type="text"
        value={user.userName}
        onChange={(e) =>
          setUser({ ...user, userName: e.target.value })
        }
        placeholder="User Name"
      />

      <label htmlFor="email">email</label>
      <input
        className="border border-gray-300"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
        placeholder="Email"
      />

      <label htmlFor="password">password</label>
      <input
        className="border border-gray-300"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
        placeholder="Password"
      />

      <button
        onClick={onSignup}
        className="p-2 mt-3 border border-gray-900 rounded-lg mb-4"
      >
        Submit
      </button>

      <Link href="/login">Already have an account?</Link>
    </div>
  );
}

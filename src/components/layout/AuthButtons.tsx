"use client";

import { signIn, signOut, useSession } from "next-auth/react";

function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-sm text-gray-500">Loading...</p>;
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-sm text-white">Hello, {session.user.name}</p>
        <button
          className="h-10 w-20 !bg-blue-900 text-white !text-sm rounded-full cursor-pointer"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      className="h-10 w-20 !bg-blue-900 text-white !text-sm rounded-full cursor-pointer"
      onClick={() => signIn("click-up")}
    >
      Sign In
    </button>
  );
}

export default AuthButtons;

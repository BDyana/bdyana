"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Google from "../../public/google.png";
import Facebook from "../../public/fb.png";
import Image from "next/image";
export default function LoginWith() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
  <div className="bg-gray-150 border-gray-100 text-center gap-2 py-5">
  <>
    <p className="text-center mb-2">You can Login with</p>
      <div className="flex justify-center gap-3">
        <button className="flex border border-gray-300 rounded-sm px-5 py-2 gap-2" onClick={() => signIn("google")}><Image  src={Google} alt=""/>Google</button>
        <button className="flex border border-gray-300 rounded-sm px-5 py-2 gap-2" onClick={() => signIn("facebook")}><Image  src={Facebook} alt=""/>Facebook</button>
      </div>
  </>
</div>
  );
}

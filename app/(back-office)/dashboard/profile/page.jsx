import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
export default async function page() {
  const session = await getServerSession(authOptions);
<<<<<<< HEAD
=======
  // console.log(session);
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
  if (!session) return;
  const { user } = session;
  return (
    <div>
      <h2>Welcome {user?.name} </h2>
    </div>
  );
}
import NewFarmerForm from "@/components/backoffice/NewFarmerForm";
import { getData } from "@/lib/getData";
import React from "react";
export default async function page({ params: { id } }) {
  const user = await getData(`users/${id}`);
<<<<<<< HEAD
=======
  // console.log(user);
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
  return (
    <div className="flex flex-col gap-6 p-16">
      <div className="max-w-4xl p-4 mx-auto">
        <h2>Hello {user?.name}, Tell More About Your self</h2>
      </div>
      <NewFarmerForm user={user} />
    </div>
  );
}

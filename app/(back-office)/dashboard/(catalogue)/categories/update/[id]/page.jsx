import FormHeader from "@/components/backoffice/FormHeader";
import NewCategoryForm from "@/components/backoffice/Forms/NewCategoryForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateCategory({ params: { id } }) {
  const category = await getData(`categories/${id}`);
<<<<<<< HEAD
=======
  // console.log(category);
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
  return (
    <div>
      <FormHeader title="Update category" />
      <NewCategoryForm updateData={category} />
    </div>
  );
}

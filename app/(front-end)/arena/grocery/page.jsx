import CategoryList from "@/components/frontend/CategoryList";
import { getData } from "@/lib/getData";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import GroceryBanner from "../../../../public/banners/GroceryBanner.png";
import Image from "next/image";
export default async function Grocery() {
  const categoriesData = await getData("categories");
  const categories = categoriesData?.filter((category) => {
    return category.title === "Grocery" || category.title === "Dry Fruits" || category.title === "Moshla" || category.title === "Supplementary Food"});
  const session = await getServerSession(authOptions);
  return (
    <div>
    <div className="bg-gray-100 relative text-center mb-8">
        <Image src={GroceryBanner} alt="Grocery Banner" className=""/>
        <h2 className="text-4xl absolute inset-0 top-10 pt-2">Grocery</h2>
    </div>
      {categories.map((category, i) => {
        return (
          <div className="lg:pb-4 pb-2" key={i}>
            <CategoryList isMarketPage={false} category={category} />
          </div>
        );
      })}
    </div>
  );
}
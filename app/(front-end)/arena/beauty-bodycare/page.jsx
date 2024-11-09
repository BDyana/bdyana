import CategoryList from "@/components/frontend/CategoryList";
import { getData } from "@/lib/getData";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
export default async function BeautyBodycare() {
  const categoriesData = await getData("categories");
  const categories = categoriesData?.filter((category) => {
    return category.title === "Beauty & Bodycare"});
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="bg-gray-100 text-center items-center py-8">
          <h2 className="text-4xl">Beauty & Bodycare</h2>
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
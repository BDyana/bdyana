import CategoryList from "@/components/frontend/CategoryList";
import NewProducts from "@/components/frontend/NewProducts";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import CategoryGrid from "@/components/frontend/CategoryGrid";
export default async function Home() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter((category) => {
    return category.title === "Beauty & Bodycare" || category.title === "Women's & Girls' Fashion" || category.title === "Mother & Baby" || category.title === "Mens & Boys Fashion" || category.title === "Gadget & Accessories" || category.title === "Android Phone" || category.title === "Grocery" || category.title === "TV & Home Appliances" || category.title === "Computer & Hardware" || category.title === "Electrical & Electronics"});

  const trainings = await getData("trainings");
  const session = await getServerSession(authOptions);
  console.log(session?.user);
  return (
    <div className="min-h-screen">
      <Hero />
      <NewProducts />
      <CategoryGrid />
      {categories.map((category, i) => {
        return (
          <div className="py-4" key={i}>
            <CategoryList isMarketPage={false} category={category} />
          </div>
        );
      })}

      <MarketList />
      {/* <CommunityTrainings
        title="Featured Trainings"
        trainings={trainings.slice(0, 3)}
      /> */}
    </div>
  );
}

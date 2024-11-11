import CategoryList from "@/components/frontend/CategoryList";
import NewProducts from "@/components/frontend/NewProducts";
import Hero from "@/components/frontend/Hero";
import { getData } from "@/lib/getData";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import * as fbq from "../../lib/fpixel";
import CategoryGrid from "@/components/frontend/CategoryGrid";
import HalfBannerOne from "@/components/frontend/HalfBannerOne";
export default async function Home() {

  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 10 });
  };
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter((category) => {
    return category.title === "Three Pieces" || category.title === "Women Bag" || category.title === "Gadget & Accessories" || category.title === "Men's Shoes" || category.title === "Beauty & Bodycare" || category.title === "Grocery" || category.title === "Wool Thread" || category.title === "Lotions & Creams"});

  const trainings = await getData("trainings");
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen">
      <Hero />
      <NewProducts />
      <CategoryGrid />
      {/* <HalfBannerOne/> */}
      {categories.map((category, i) => {
        return (
          <div className="lg:pb-4 pb-2" key={i}>
            <CategoryList isMarketPage={false} category={category} />
          </div>
        );
      })}
      {/* <ArenaGrid/> */}
    </div>
  );
}

import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getPlacesByCategory,
  getSubcategories,
} from "../../../components/categories-data";
import CategoryHero from "../../../components/CategoryHero";
import CategoryPlacesClient from "../../../components/CategoryPlacesClient";

interface CategoryPageProps {
  params: { slug: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const places = getPlacesByCategory(category.slug);
  const subcategories = getSubcategories(category.slug);

  return (
    <div className="min-h-screen bg-black">
      <CategoryHero category={category} placeCount={places.length} />
      <CategoryPlacesClient places={places} subcategories={subcategories} />
    </div>
  );
};

export default CategoryPage;

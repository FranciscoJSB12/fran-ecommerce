import { CATEGORIES } from "@/utils/categories";
import NavigationItem from "./NavigationItem";

const categoriesToRender = Object.values(CATEGORIES);

export default function NavigationCategories() {
  return (
    <ul className="flex flex-col items-center gap-6 pb-5">
      <li className="hidden xlg:block">
        <h1 className="font-semibold italic text-lg text-gray-700 xlg:text-white">
          franStore
        </h1>
      </li>
      {categoriesToRender.map((c) => (
        <li key={c}>
          <NavigationItem
            text={c.replace(/\b\w/g, (l) => l.toUpperCase())}
            href={c === CATEGORIES.all ? "/" : "/" + c}
          />
        </li>
      ))}
    </ul>
  );
}

import db from "@/lib/db";
import { CategoryClient } from "./components/client";
import { CategoryColumn } from "./components/columns";

import { format } from 'date-fns'

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string}
}) => {
  const categories = await db.category.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      banner: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedCategories:CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    bannerLabel: item.banner.label,
    createdAt: format(item.createdAt, "MMM do, yyyy")
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;

import db from "@/lib/db";
import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({
    params
}: {
    params: {categoryId: string, storeId: string}
}) => {
    const category = await db.category.findUnique({
        where: {
            id: params.categoryId
        }
    })

    const banners = await db.banner.findMany({
        where: {
            storeId: params.storeId
        }
    })

    return ( 
        <div className="flex-col">
           <div className="flex-1 space-y-4 p-8 pt-6">
            <CategoryForm 
            banners={banners} 
            initialData={category} />
           </div>
        </div>
     );
}
 
export default CategoryPage;
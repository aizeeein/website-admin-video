import db from "@/lib/db";
import { ProductForm } from "./components/product-form";

const ProductPage = async ({
    params
}: {
    params: {productId: string, storeId: string}
}) => {
    const product = await db.product.findUnique({
        where: {
            id: params.productId
        },
        include: {
            images: true,
        },
    })

    const categories = await db.category.findMany({
        where: {
            storeId: params.storeId
        }
    })

    return ( 
        <div className="flex-col">
           <div className="flex-1 space-y-4 p-8 pt-6">
            <ProductForm initialData={product} categories={categories} />
           </div>
        </div>
     );
}
 
export default ProductPage;
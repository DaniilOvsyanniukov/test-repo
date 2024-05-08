import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const countAllProducts = async () => {
  const productsCount = await prisma.product.count();
  return productsCount;
};

export const getProductsOnWarehouse = async (uuid: string) => {
  const productsOnWarehouse = await prisma.warehouse.findUnique({
    where: { uuid },
    include: { products: true },
  });
  return productsOnWarehouse?.products;
};

export const countProductsOnWarehouse = async (uuid: string) => {
  const productsOnWarehouse = await prisma.productOnWarehouse.findMany({
    where: { warehouseId: { equals: uuid } },
  });
  const totalQuantity = productsOnWarehouse.reduce((acc, curr) => acc + curr.quantity, 0);
  return totalQuantity;
};

export const countProduct = async (sku: string) => {
  const product = await prisma.product.findUnique({ where: { sku } });
  return product;
};

export const countProductOnWarehouse = async (uuid: string, sku: string) => {
  const productOnWarehouse = await prisma.productOnWarehouse.findFirst({
    where: { warehouseId: uuid, productId: sku },
  });
  return productOnWarehouse?.quantity || 0;
};

export const countProductByCategory = async (slug: string) => {
  const productsByCategory = await prisma.category.findUnique({
    where: { slug },
    include: { products: true },
  });
  return productsByCategory?.products.length || 0;
};

export const countProductOnWarehouseByCategory = async (uuid: string, slug: string) => {
  const productsOnWarehouseByCategory = await prisma.productOnWarehouse.findMany({
    where: { warehouseId: uuid },
    include: { product: { where: { categories: { some: { slug } } } } },
  });
  const totalQuantity = productsOnWarehouseByCategory.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  return totalQuantity;
};

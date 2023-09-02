import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can insert many to many relation", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "asep",
        product_id: "P0001",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.info(like);
  });

  it("should can find one with many to many relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "budi",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(customer);
  });

  it("should can find many with many to many relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "Buku",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(JSON.stringify(customers));
  });
});

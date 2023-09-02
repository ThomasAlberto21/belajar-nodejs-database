import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can be insert & include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "budi",
        title: "Comment 5",
        description: "Description 5",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should can be insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "rina",
        name: "Rina",
        email: "rina@gmail.com",
        phone: "983238237",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Description 1",
              },
              {
                title: "Comment 2",
                description: "Description 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
  });

  it("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment 1",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customers);
  });
});

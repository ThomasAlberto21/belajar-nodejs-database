import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("Should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "thomas",
        customer_id: "thomas",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });

  it("Should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "budi",
        name: "Budi",
        email: "budi@gmail.com",
        phone: "3434332231",
        wallet: {
          create: {
            id: "budi",
            balance: 1000000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("Should can be find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "budi",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("Should can be find one to one with relation filter", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customers);
  });
});

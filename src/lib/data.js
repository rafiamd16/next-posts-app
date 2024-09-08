import prisma from "./prisma";

// ! Good Posts
export const getAllGoodPosts = async () => {
  try {
    const allGoodPosts = await prisma.goodpost.findMany();
    return allGoodPosts;
  } catch (error) {
    console.error("Error to fetching all good posts", error);
    throw new Error("Failed to fetching all good posts");
  }
};

export const getGoodPostById = async (id) => {
  try {
    const goodPost = await prisma.goodpost.findUnique({
      where: { id },
    });
    return goodPost;
  } catch (error) {
    console.error("Error to get good post", error);
    throw new Error("Failed to get good post");
  }
};

export const createGoodPost = async (data) => {
  try {
    const goodPost = await prisma.goodpost.create({
      data,
    });
    return goodPost;
  } catch (error) {
    console.error("Error to create good post", error);
    throw new Error("Failed to create good post");
  }
};

export const updateGoodPost = async (id, data) => {
  try {
    const updatedGoodPost = await prisma.goodpost.update({
      where: { id },
      data,
    });
    return updatedGoodPost;
  } catch (error) {
    console.error("Error to update good post", error);
    throw new Error("Failed to update good post");
  }
};

// ! Bad Posts
export const getAllBadPosts = async () => {
  try {
    const allBadPosts = await prisma.badpost.findMany();
    return allBadPosts;
  } catch (error) {
    console.error("Error to fetching all bad posts", error);
    throw new Error("Failed to fetching all bad posts");
  }
};

export const getBadPostById = async (id) => {
  try {
    const badPost = await prisma.badpost.findUnique({
      where: { id },
    });
    return badPost;
  } catch (error) {
    console.error("Error to get bad post", error);
    throw new Error("Failed to get bad post");
  }
};

export const createBadPost = async (data) => {
  try {
    const badPost = await prisma.badpost.create({
      data,
    });
    return badPost;
  } catch (error) {
    console.error("Error to create bad post", error);
    throw new Error("Failed to create bad post");
  }
};

export const updateBadPost = async (id, data) => {
  try {
    const updatedBadPost = await prisma.badpost.update({
      where: { id },
      data,
    });
    return updatedBadPost;
  } catch (error) {
    console.error("Error to update bad post", error);
    throw new Error("Failed to update bad post");
  }
};

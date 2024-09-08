import { createGoodPost, getAllGoodPosts } from "@/lib/data";

export async function GET() {
  try {
    const allGoodPosts = await getAllGoodPosts();
    return Response.json(allGoodPosts, { status: 200 }, { isGetted: true });
  } catch (error) {
    console.error("Error fetch all good posts", error);
    return Response.json(
      "Failed to fetch all good posts",
      { status: 500 },
      { isGetted: false }
    );
  }
}

export async function POST(req) {
  try {
    const { name, message } = await req.json();
    const data = { name, message };

    const newGoodPost = await createGoodPost(data);
    return Response.json(newGoodPost, { status: 201 }, { isCreated: true });
  } catch (error) {
    console.error("Error creating new post", error);
    return Response.json(
      "Failed to create new post",
      { status: 500 },
      { isCreated: false }
    );
  }
}

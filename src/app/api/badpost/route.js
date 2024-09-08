import { createBadPost, getAllBadPosts } from "@/lib/data";

export async function GET() {
  try {
    const allBadPosts = await getAllBadPosts();
    return Response.json(allBadPosts, { status: 200 }, { isGetted: true });
  } catch (error) {
    console.error("Error fetch all bad posts", error);
    return Response.json(
      "Failed to fetch all bad posts",
      { status: 500 },
      { isGetted: false }
    );
  }
}

export async function POST(req) {
  try {
    const { name, message } = await req.json();
    const data = { name, message };

    const newBadPost = await createBadPost(data);
    return Response.json(newBadPost, { status: 201 }, { isCreated: true });
  } catch (error) {
    console.error("Error creating new post", error);
    return Response.json(
      "Failed to create new post",
      { status: 500 },
      { isCreated: false }
    );
  }
}

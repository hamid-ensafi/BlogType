import { blog } from '@/data/data';

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const postDetailId = Number(url.searchParams.get("id"));
  console.log(postDetailId)
  const data = blog.find(item => item.id === postDetailId);
  try {
    if (data) {
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response(JSON.stringify({ message: "پست پیدا نشد " }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch  {
    return new Response(JSON.stringify({ message: "خطا در دریافت اطلاعات " }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

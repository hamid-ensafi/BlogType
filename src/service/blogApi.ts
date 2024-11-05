import { IError } from "@/interface/Login.User.Error.interface";
import axiosConfig from "@/lib/axiosConfig";

export async function fetchPosts() {
  try {
    const response = await axiosConfig.get("api/blog", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      const err: IError = new Error(
        error.message || "خطا در دریافت اطلاعات"
      ) as IError;
      throw err;
    }
    throw new Error("خطای ناشناخته");
  }
}

import { IPostError } from "@/interface/Error.Api.interface";
import axiosConfig from "@/lib/axiosConfig";

export async function fetchDetail(id:string) {
  try {
    const response = await axiosConfig.get(`/api/detail?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      const err: IPostError = new Error(
        error.message || "خطا در دریافت اطلاعات"
      ) as IPostError;
      throw err;
    }
    throw new Error("خطای ناشناخته");
  }
}
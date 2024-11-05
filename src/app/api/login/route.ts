import { ILogin } from "@/interface/Login.User.Interface";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const userSchema = z.object({
  username: z
    .string()
    .min(5, "نام کاربری نباید کمتر از 5 کاراکتر باشد")
    .max(20, "نام کاربری نباید بیشتر از 20 کاراکتر باشد"),
  password: z
    .string()
    .min(5, "رمز عبور نباید کمتر از 5 کاراکتر باشد")
    .max(20, "رمز عبور نباید بیشتر از 20 کاراکتر باشد"),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ILogin = await request.json();
    const validatedData = userSchema.safeParse(body);

    if (!validatedData.success) {
      const errorDetails = validatedData.error.flatten();
      return NextResponse.json(
        {
          message: "ورودی‌های شما معتبر نیستند",
          errors: errorDetails.fieldErrors,
        },
        { status: 400 }
      );
    }
    const { username, password } = body;

    if (username === "testuser" && password === "password123") {
      const token = "TestToken";
      const response = NextResponse.json({ message: "ورود موفقیت آمیز بود!" });
      response.cookies.set("token", token, {
        path: "/",
        maxAge: 60 * 60 * 24,
      });

      return response;
    }
    else {
      return NextResponse.json(
        { message: "نام کاربری یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }
  }
  catch {
    return NextResponse.json(
      { message: "خطای ناشناخته رخ داده است" },
      { status: 500 }
    );
  }
}

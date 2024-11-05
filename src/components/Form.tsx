"use client";

import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import { ILogin } from "@/interface/Login.User.Interface";

export default function Login() {
  const [login, setLogin] = useState<ILogin>({
    username: "",
    password: "",
  });
  const { username, password } = login;
  const { loginMutate, error: formError } = useLogin();
  console.log(formError);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" || password === "") return;
    loginMutate(login);
  };
  return (
    <form
      className="p-12 w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12 xl:max-w-[400px] rounded-2xl my-10 bg-dark_700 text-white"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-center text-3xl ">خوش آمدید</h3>
        <div className="flex flex-col">
          <label className="p-2 ">نام کاربری</label>
          <input
            className="rounded-lg p-3  border border-dark_600 "
            placeholder="نام کاربری را وارد کنید"
            type="text"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin((current) => ({ ...current, username: e.target.value }))
            }
          />
          <div className="text-[10px] h-[10px] py-2 text-red-500">
            {formError && <p>{formError?.errors?.username.join(" ")}</p>}
            {/* در این قسمت چون متن خطا بصورت ارایه برمیگردد میتوانیم از جوین هم استفاده کنیم  */}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="p-2 ">رمز عبور </label>
          <input
            className="rounded-lg p-3 border border-dark_600"
            placeholder="رمز عبور "
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin((current) => ({ ...current, password: e.target.value }))
            }
          />
          <div className="text-[10px] h-6 py-2 text-red-500">
            {formError && <p>{formError?.errors?.password}</p>}
          </div>
        </div>
        <div className="flex justify-between py-8">
          <div>
            <a
              className="text-blue_500 text-sm"
              target="_blank"
              href="https://otherpage.com"
            >
              رمز عبور را فراموش کردی ؟
            </a>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm" htmlFor="remember">
              مرا به خاطر بسپار
            </label>

            <input id="remember" type="checkbox" />
          </div>
        </div>
        <button
          className="bg-blue_500 rounded p-2 mt-2 font-bold"
          type="submit"
        >
          ورود
        </button>
      </div>
    </form>
  );
}

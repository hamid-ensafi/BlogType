"use client";
import { useRouter } from "next/navigation";
import { login } from "@/service/authApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { ILogin } from "@/interface/Login.User.Interface";
import { IError } from "@/interface/Login.User.Error.interface";
export function useLogin() {
  const router = useRouter();
  const { mutate: loginMutate, error } = useMutation<void, IError, ILogin>(
    {
      mutationFn: (userInfo) => login(userInfo),
      onError: (error) => {
        toast.error(error.message || "ورود ناموفق بود");
      },
      onSuccess: () => {
        toast.success("ورود موفقیت‌آمیز");
        router.replace("/blog");
      },
    }
  );
  return { loginMutate, error };
}

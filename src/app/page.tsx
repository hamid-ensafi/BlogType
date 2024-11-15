// import Login from "@/components/Form";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'ورود به حساب کاربری ',
  description:'برای دسترسی به امکانات سایت و مدیریت حساب کاربری خود وارد شوید.',
  keywords: "ورود, حساب کاربری, ورود به سایت, ورود به حساب, راهکار گستران",
  robots: "noindex, nofollow", // این صفحه نباید ایندکس شود هدف ما در این صفحه سعو نیست 
  openGraph: {
    title: "ورود به حساب کاربری | راهکار گستران", 
    description: "برای دسترسی به امکانات سایت و مدیریت حساب کاربری خود وارد شوید.",
    images: "", // در اینجا یک تصویر قرار میدهیم این تصویر زمانی که لینک سایت خود را به دیگران میفرستیم نمایش داده میشود 
    url: "http://localhost:3000/blog", // این هم ادرس سایت ما است  مثال است 
    locale: "fa_IR",
  },
};

export default function Home() {
  return (
    <section className="flex justify-center w-full h-full items-center">
      {/* <Login /> */}
      asghar jer zan 
    </section>
  );
}

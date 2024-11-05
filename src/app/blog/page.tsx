import BlogItem from "@/components/Blog";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "مقالات سایت | جدیدترین اخبار و مقالات",
  description:
    "در این صفحه شما می‌توانید جدیدترین مقالات و اخبار مربوط به صنعت، تکنولوژی، آموزش، و بلاگ‌های تخصصی را مطالعه کنید.",
  keywords: "مقالات, اخبار, تکنولوژی, بلاگ, مقالات تخصصی, صنعت, آموزش",
  authors: [
    {
      name: "نام نویسنده",
      url: "", 
    },
  ],
  openGraph: {
    title: "مقالات سایت | جدیدترین اخبار و مقالات",
    description:
      "بهترین مقالات سایت در زمینه‌های مختلف از جمله تکنولوژی، آموزش و صنعت را در این بخش مشاهده کنید.",
    images: "", // آدرس تصویر پیش نمایش برای مقالات
    url: "http://localhost:3000/blog", 
    siteName: "راهکار گستران",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "مقالات سایت | جدیدترین اخبار و مقالات",
    description:
      "تمامی مقالات و اخبار داغ سایت را در این صفحه مشاهده کرده و از جدیدترین مطالب مطلع شوید.",
    images: ["https://example.com/path/to/blog-image.jpg"], 
  },
};

export default function Posts() {
  return <BlogItem></BlogItem>;
}

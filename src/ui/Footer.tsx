import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center text-white ">
      <div className="w-full 2xl:container bg-dark_500 p-4">
        <div className="flex flex-wrap justify-between">
          <nav>
            <ul className="flex gap-2">
              <li>درباره ما </li>
              <li>تماس با ما</li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <p className="text-sm">ادرس: تبریز چهارراه منصور</p>
            <FaLocationDot color="#ff874b" size={14} />
          </div>
          <div className="w-full">
            <p className="text-sm text-center text-slate-100">
              تمام حقوق قالب و محتوا برای این وبسایت محفوظ است و هرگونه کپی
              برداری پیگرد قانونی دارد
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

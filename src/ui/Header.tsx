import { FaMountain } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex sticky top-0 justify-center items-center text-white ">
      <div className="w-full 2xl:container bg-dark_500 p-4">
        <div className="flex justify-between">
          <nav>
            <ul className="flex gap-2">
              <li>خانه</li>
              <li>درباره ما </li>
              <li>بلاگ</li>
            </ul>
          </nav>
          <div className="flex gap-3">
            <h1>راهکار گستران </h1>
            <FaMountain color="#ff874b" size={20}/>
          </div>
        </div>
      </div>
    </header>
  );
}

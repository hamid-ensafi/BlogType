import "./../styles/globals.css";
import ReactQueryProvider from "../lib/queryClient";
import { Toaster } from "react-hot-toast";
import Header from "@/ui/Header";
import Footer from '@/ui/Footer' 
export const metadata = {
  title: {
    template: "راهکار گستران %s",
    default: "راهکار گستران",
  },
  description:
    "شرکت راهکار گستران طراحی وبسایت در راهکار گسترون پیشرو در صنعت وب راهکار گستران تبریز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <ReactQueryProvider>
        <body dir="rtl">
          <Header/>
          <main className="min-h-[100vh]">
            {children}
            <Toaster position="top-right" />
          </main>
          <Footer />
        </body>
      </ReactQueryProvider>
    </html>
  );
}

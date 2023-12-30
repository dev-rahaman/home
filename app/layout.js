import { Inter } from "next/font/google";
import FeedHeader from "./feed/FeedComponents/FeedHeader";
import LeftSidebar from "./feed/FeedComponents/Sidebar/LeftSidebar";
import RightSidebar from "./feed/FeedComponents/Sidebar/RightSidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "all-madrasa bd ",
  description: "Bangladesh all madrasa here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <FeedHeader />
        <div className="w-full main flex justify-between">
          <div className="fixed left-0">
            <LeftSidebar />
          </div>
          <div className="lg:mx-[270px] px-10 mt-10 pt-10">{children}</div>
          <div className="fixed right-0">
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}

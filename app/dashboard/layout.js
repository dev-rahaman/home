import { Inter } from "next/font/google";
import "./globals.css";
import DashboardHeader from "./DashboardComponents/DashboardHeader";
import DashboardSidebar from "./DashboardComponents/DashboardSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard | All Madrasa",
  description: "Bangladesh all madrasa here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardHeader />
        <DashboardSidebar />
        <div className="ms-96 w-[900px] mt-24"> {children}</div>
      </body>
    </html>
  );
}

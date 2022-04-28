import {Navbar} from "./Navbar"
import { Sidebar } from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
 }
export default function Layout({children} : LayoutProps) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  )
}

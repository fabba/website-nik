import { Route, Routes } from "react-router-dom";
import Contact from "./routes/contact";
import Home from "./routes/home";
import Logo from "./routes/logo";
import Stories from "./routes/stories";
import Navbar, { type NavItem } from "./navigation/navBar";

const navItems: NavItem[] = [
  {
    label: "Logo's",
    href: `${import.meta.env.BASE_URL}#/logo`,
  },
  {
    label: "Stories",
    children: [
      { label: "Water", href: `${import.meta.env.BASE_URL}#/stories` },
    ],
  },
  {
    label: "Contact",
    href: `${import.meta.env.BASE_URL}#/contact`,
  },
];

export default function App() {
  return (
    <div className="h-dvh flex-col md:flex-row basis-full flex">
      <Navbar items={navItems} />
      <div className={`flex-90 flex-col page bg-emerald-100`}>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  )
}
import { Route, Routes } from "react-router-dom";
import Contact from "./routes/contact";
import Home from "./routes/home";
import Logo from "./routes/logo";
import Stories from "./routes/stories";

export default function App() {
  return (
    <div className="h-dvh flex-row basis-full flex">
      <div className="flex flex-10 flex-col bg-emerald-50 items-center">
        <a href="/" className="w-full block text-center p-4">
          <img
            src="/assets/home/Nik_hompage.png"
            alt="Nik homepage"
            className="w-full max-w-30 mx-auto object-contain"
          />
        </a>
        <a href="/logo" className="p-4 ml-2 mr-2 border-b border-gray-30">Logo's</a>
        <a href="/stories" className="p-4 ml-2 mr-2 border-b border-gray-30">Stories</a>
        <a href="/contact" className="p-4 ml-2 mr-2 border-b border-gray-30">Contact</a>
      </div>
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
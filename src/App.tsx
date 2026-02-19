import { Route, Routes } from "react-router-dom";
import Contact from "./routes/contact";
import Home from "./routes/home";
import Logo from "./routes/logo";
import Stories from "./routes/stories";
import NavigationBar from "./navigation/navigationbar";

export default function App() {
  return (
    <div className="h-dvh flex-row basis-full flex">
      <NavigationBar />
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
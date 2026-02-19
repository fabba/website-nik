export default function NavigationBar() {  
    return    <div className="flex flex-10 flex-col bg-emerald-50 items-center">
        <a href="/#/" className="w-full block text-center p-4">
          <img
            src="/home/Nik_hompage.png"
            alt="Nik homepage"
            className="w-full max-w-30 mx-auto object-contain"
          />
        </a>
        <a href="/#/logo" className="p-4 ml-2 mr-2 border-b border-gray-30">Logo's</a>
        <a href="/#/stories" className="p-4 ml-2 mr-2 border-b border-gray-30">Stories</a>
        <a href="/#/contact" className="p-4 ml-2 mr-2 border-b border-gray-30">Contact</a>
      </div>
}
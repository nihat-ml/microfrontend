export default function Navbar() {
  return (
    <nav className="bg-white/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          
          
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">T</div>
            <span className="font-extrabold text-2xl text-gray-950 tracking-tight">TechStore</span>
          </div>

          
          <div className="hidden sm:flex space-x-1">
            <a href="#" className="text-blue-600 font-semibold bg-blue-50 px-5 py-2.5 rounded-xl">Ana Səhifə</a>
            <a href="#" className="text-gray-600 hover:text-gray-950 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition-colors font-medium">Məhsullar</a>
            <a href="#" className="text-gray-600 hover:text-gray-950 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition-colors font-medium">Kompaniyalar</a>
            <a href="#" className="text-gray-600 hover:text-gray-950 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition-colors font-medium">Haqqımızda</a>
          </div>

         
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-gray-950 hover:bg-gray-800 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors shadow-sm">
              Giriş
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
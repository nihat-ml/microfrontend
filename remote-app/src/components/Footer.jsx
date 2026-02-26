export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
     
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">T</div>
            <span className="font-extrabold text-2xl text-gray-950 tracking-tight">TechStore</span>
          </div>
          <p className="text-gray-500 max-w-md">Müasir texnologiyalar və ən son məhsullar üçün vahid məkanınız. Biz keyfiyyət və innovasiyaya inanırıq.</p>
        </div>

        
        <div>
          <h4 className="font-bold text-gray-950 mb-4">Kompaniya</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Haqqımızda</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Vakansiyalar</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Bloq</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-bold text-gray-950 mb-4">Dəstək</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Əlaqə</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Çatdırılma</a></li>
          </ul>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 text-center text-sm mt-12 border-t border-gray-100 pt-8">
        © 2026 TechStore. Bütün hüquqlar qorunur. Remote App tərəfindən render edilir.
      </div>
    </footer>
  );
}
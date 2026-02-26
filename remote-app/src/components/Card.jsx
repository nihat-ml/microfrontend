export default function Card() {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col">
      
      {/* Şəkil və Endirim İkonu */}
      <div className="relative overflow-hidden aspect-w-16 aspect-h-10">
        <img 
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop" 
          alt="MacBook Pro" 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          -15%
        </span>
      </div>

      {/* Məzmun Hissəsi */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Noutbuklar</span>
            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Stokda var
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
            MacBook Pro 14" M3 Pro
          </h3>
          <p className="text-gray-600 text-base mb-5 line-clamp-2">
            İnanılmaz performans, möhtəşəm ekran və gün boyu davam edən batareya ömrü. İşiniz üçün mükəmməl seçim.
          </p>
        </div>

        {/* Qiymət və Düymə */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-5 mt-auto">
          <div>
            <span className="text-sm text-gray-500 line-through">₼3,299</span>
            <div className="text-3xl font-extrabold text-gray-950">
              ₼2,799
            </div>
          </div>
          <button className="flex items-center gap-2 bg-gray-950 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            Səbətə at
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
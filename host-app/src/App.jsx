import Navbar from './components/Navbar';
import Card from 'remoteApp/Card';
import Footer from 'remoteApp/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      
    
      <main className="flex-grow max-w-7xl mx-auto px-6 w-full py-16">
        
       
        <div className="text-center mb-20 bg-gray-950 p-16 rounded-[40px] shadow-xl relative overflow-hidden">
     
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
          </div>
          
          <span className="relative inline-block bg-blue-600/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-500/30">
            YENİ KOLLEKSİYA
          </span>
          <h1 className="relative text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Gələcəyin Texnologiyası <span className="text-blue-400">İndi Burada</span>
          </h1>
          <p className="relative mt-2 text-xl text-gray-300 max-w-2xl mx-auto">
            Microfrontend arxitekturası ilə yaradılmış bu müasir mağazada ən son MacBook modellərini kəşf edin.
          </p>
          <div className="relative mt-10 flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg">İndi kəşf et</button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-colors border border-white/20">Daha çox</button>
          </div>
        </div>

        <div className="mb-12 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-950 tracking-tight">
              Tövsiyə edilən məhsullar
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Bu kartlar <span className="font-semibold text-blue-600">Remote App</span>-dən render olunur.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors Group">
            Hamısını gör
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <Card />
          <Card />
          <Card />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;
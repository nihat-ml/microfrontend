import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      
     
      <main className="flex-grow max-w-7xl mx-auto px-6 w-full py-16">
        
        <div className="mb-16 text-center max-w-2xl mx-auto bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
          <h1 className="text-4xl font-extrabold text-gray-950 tracking-tight mb-4">
            Remote App <span className="text-blue-600">(Mikro Tətbiq)</span>
          </h1>
          <p className="text-lg text-gray-600">
            Bu səhifə yalnız komponentləri test etmək və inkişaf etdirmək üçündür. Host tətbiqə ötürüləcək komponentlərin nümayişi:
          </p>
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
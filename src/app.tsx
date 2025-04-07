import { useState } from 'preact/hooks';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Fresh Project with Vite</h1>
        <p className="text-gray-600">Edit <code className="text-blue-600">src/app.tsx</code> and save to test HMR</p>
      </header>
      
      <main className="p-4 text-center">
        <div className="mb-8">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Count is: {count}
          </button>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-500">
        <p>Powered by Preact + Vite + TailwindCSS</p>
      </footer>
    </div>
  );
}
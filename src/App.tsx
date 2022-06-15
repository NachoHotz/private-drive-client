import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-y-10 h-screen items-center justify-center bg-black text-white text-4xl">
      Vite React App
      <button
        className="border rounded-md py-1 px-12 text-center hover:bg-white hover:text-black transition ease-in-out duration-300"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
}

export default App;

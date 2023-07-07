import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Number from './components/Number';

function App() {
  const [formValue, setFormValue] = useState('');
  console.log('🚀 ~ file: App.js:7 ~ App ~ formValue:', formValue);
  return (
    <AppProvider>
      <div className="flex justify-center items-center w-screen h-screen gap-2">
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Insert name..."
            className="py-2 px-4 border border-red-400 rounded-md"
            onChange={(e) => setFormValue(e.target.value)}
            value={formValue}
          />
          <button
            className="py-2 px-4 border border-red-400 rounded-md"
            onClick={() => setFormValue('12345')}
          >
            change value
          </button>
        </div>
        <Number />
      </div>
    </AppProvider>
  );
}

export default App;

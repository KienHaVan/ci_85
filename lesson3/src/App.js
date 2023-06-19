import './App.css';
import Register from './components/register/Register';

function App() {
  const name = 'Kien';
  return (
    <div
      className="App"
      style={{
        backgroundColor: 'red',
      }}
    >
      <Register name="mindx" />
      <Register name="mindx2" />
      <Register name="mindx3" />
      <h2>{name}</h2>
    </div>
  );
}

export default App;

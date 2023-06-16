import logo from './logo.svg';
import './App.css';
import Card from './card';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Enter your task here" className="input" />
      <Card text="clean the house" />
      <Card text="wash the dishes1" />
      <Card text="wash the dishes2" />
      <Card text="wash the dishes3" />
    </div>
  );
}

export default App;

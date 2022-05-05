import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const compromissos = ['Estudar', 'Trabalhar', 'Treinar'];

function App() {
  return (
    <ul>
      {compromissos.map((compromisso) => Task(compromisso))}
    </ul>
  );
}

export default App;

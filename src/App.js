import Resultado  from './components/Resultado'
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles/style.css';

import api from './services/api';

function App(props) {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function handleSearch () {
    if (input === ''){
      alert("Preencha algum CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

    }catch{
      alert("Error");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
    
      <div className="containerInput">
        <input 
          type="text" 
          placeholder="Digite o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cep).length > 1 && (
       <Resultado/>
      )}
    </div>
  );
}

export default App;

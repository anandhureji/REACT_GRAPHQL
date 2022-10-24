
import './App.css';
import CharacterList from './Pages/CharacterList';
import {Routes,Route} from 'react-router-dom'
import Character from './Pages/Character';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<CharacterList />} />
    <Route path="/:id" element={<Character />} />
    </Routes>
    
     
    </div>
  );
}

export default App;

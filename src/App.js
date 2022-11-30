import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav  from './components/Nav';
import CreateNew from './pages/CreateNewPage/CreateNew'
import MyQuiz from './pages/MyQuizPage/MyQuiz'
import Home from './components/Home';
import Play from './pages/PlayQuizPage/Play';
import QuizGame from './pages/PlayQuizPage/QuizGame';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-new" element={<CreateNew/>}/>
        <Route path="/my-quiz" element={<MyQuiz/>} />
        <Route path="/play-quiz" element={<Play/>} />
        <Route path="/quiz" element={<QuizGame/>} />
      </Routes>
    </div>
  );
}

export default App;

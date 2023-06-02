
import './App.css';
import Board from './components/Board';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Board />
      <ToastContainer />
    </>
  );
}

export default App;

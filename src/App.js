import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase/firebase.init";

function App() {
  const auth = getAuth(app);
  return (
    <div className="App">

    </div>
  );
}

export default App;

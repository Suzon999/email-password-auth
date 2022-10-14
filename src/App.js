import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase/firebase.init";

function App() {
  const auth = getAuth(app);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  }
  const handleEmailBlur = (event) => {
    console.log(event.target.value)
  }
  const handlePasswordBlur = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder=" Your email" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder="Your Password" />
        <br />
        <button type="submit">Regester</button>
      </form>

    </div>
  );
}

export default App;

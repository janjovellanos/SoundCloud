import { Route } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";

function App() {
  return (
    <Route exact path='/'>
      <LoginFormPage />
    </Route>
  );
}

export default App;

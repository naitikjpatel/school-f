import { Route, Routes } from "react-router";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Loader/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

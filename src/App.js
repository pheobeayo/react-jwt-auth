import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { setAuthToken } from "./helpers/setAuthToken";

function App() {
  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute redirectPath="/login">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

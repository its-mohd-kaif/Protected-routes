import Login from "./components/Login";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoute } from "./components/Protected";
import NavbarComponent from "./components/Navbar";
import { AuthProvider } from "./customHooks/AuthProvider";
import Error from "./components/Error";
import SettingDisplay from "./components/SettingDisplay";
function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route errorElement={<Error />} path="/" element={<NavbarComponent />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route errorElement={<Error />} element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/settingDisplay" element={<SettingDisplay />} />
        </Route>
      </>
    )
  );
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;

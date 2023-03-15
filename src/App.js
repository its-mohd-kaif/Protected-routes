import Login from "./components/Login";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./components/Protected";
import NavbarComponent from "./components/Navbar";
import { AuthProvider } from "./customHooks/AuthProvider";
import Error from "./components/Error";
import SettingDisplay from "./components/SettingDisplay";
function App() {
  // Routing
  let router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarComponent />,
      errorElement: <Error />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/profile",
      errorElement: <Error />,
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/settings",
      errorElement: <Error />,
      element: (
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      ),
    },
    {
      path: "/settingDisplay",
      errorElement: <Error />,
      element: <SettingDisplay />,
    },
  ]);
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;

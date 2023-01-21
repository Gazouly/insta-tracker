import Login from "@views/Login";
import Dashboard from "@views/Dashboard";

export default [
  { element: <Dashboard />, isProtected: true, path: "/" },
  { element: <Login />, isProtected: false, path: "/login" },
];

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Error from "./pages/Error";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="*"  element={<Error/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

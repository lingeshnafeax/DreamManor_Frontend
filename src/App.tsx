import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar/Navbar";
import ListHomes from "./pages/ListHomes";
import HomeDetails from "./pages/HomeDetails";
import SellerProfile from "./pages/SellerProfile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProtectedRoute from "./components/ProtectedRoute";
import UpdateProfile from "./pages/UpdateProfile";
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <div className="min-h-screen bg-background font-lato antialiased md:px-24 lg:px-28">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/list" element={<ListHomes />} />
            <Route path="/list/:id" element={<HomeDetails />} />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<SellerProfile />} />}
            />
            <Route
              path="/profile/update"
              element={<ProtectedRoute element={<UpdateProfile />} />}
            />
          </Routes>
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import UsersPage from "./pages/admin/UsersPage";
import Product from "./pages/products/ProductPage";
import Products from "./pages/products/ProductsPage";
import ProductsPage from "./pages/admin/ProductsPage";
import PagesPage from "./pages/admin/PagesPage";
import CartPage from "./pages/products/CartPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/admin/users" element={<UsersPage />} />
            <Route path="/admin/products" element={<ProductsPage />} />
            <Route path="/admin/pages" element={<PagesPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

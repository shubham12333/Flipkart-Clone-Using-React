import { Profile } from "../Pages/Profile/Profile";
import { FlipkartPlus } from "../Pages/Plus/FlipkartPlus";
import { Orders } from "../Pages/Orders/Orders";
import { Wishlist } from "../Pages/Wishlist/Wishlist";
import { Rewards } from "../Pages/Rewards/Rewards";
import { GiftCard } from "../Pages/GiftCard/GiftCard";
import { Register } from "../Pages/Register/Register";
import App from "../App/App";
import { AddAddress } from "../Pages/Address/AddAddress";
import { Addresses } from "../Pages/Address/Addresses";
import { Product_Description } from "../Pages/Product_Description/Product_Description";
import { Checkout } from "../Pages/Checkout/Checkout";
import { Payment } from "../Pages/Payment Page/Payment";
import { SellerLogin } from "../Components/Forms/Seller/Login/SellerLogin";
import { Admin } from "../Admin_Dashboard/Pages/Home/Admin";
import { Seller_list } from "../Admin_Dashboard/Components/Seller_List/Seller_list";
import { User_list } from "../Admin_Dashboard/Pages/USER_LIST/User_list";
import { Product_List } from "../Admin_Dashboard/Pages/Product_List/Product_List";
import { Add_Product } from "../Admin_Dashboard/Pages/Add_Product/Add_Product";
import { Stats } from "../Admin_Dashboard/Components/Stats/Stats";
export const routes = [
    { path: "/profile", element: <Profile /> },
    { path: "/plus", element: <FlipkartPlus /> },
    { path: "/wishlist", element: <Wishlist /> },
    { path: "/rewards", element: <Rewards /> },
    { path: "/giftcard", element: <GiftCard /> },
    { path: "/orders", element: <Orders /> },
    { path: "/register", element: <Register /> },
    { path: "/", element: <App /> },
    { path: "/allAddresses", element: <Addresses /> },
    { path: "/address", element: <AddAddress /> },
    { path: "/productDescription", element: <Product_Description /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/payment", element: <Payment /> },
    { path: "/sellerLogin", element: <SellerLogin /> },
    { path: "/admin", element: <Admin /> },
    { path: "/sellerList", element: <Seller_list /> },
    { path: "/userList", element: <User_list /> },
    { path: "/productList", element: <Product_List /> },
    { path: "/addProduct", element: <Add_Product /> },
    { path: "/stats", element: <Stats /> },
  ];
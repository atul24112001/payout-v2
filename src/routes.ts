import HomeInActiveIcon from "./assets/icons/Name=HomeState=False";
import HomeActiveIcon from "./assets/icons/Name=HomeState=True";
import OrderInActive from "./assets/icons/Name=OrdersState=False";
import OrderActiveIcon from "./assets/icons/Name=OrdersState=True";
import PaymentInActiveIcon from "./assets/icons/Name=PaymentsState=False";
import PaymentActiveIcon from "./assets/icons/Name=PaymentsState=True";
import Home from "./components/pages/home";
import Payment from "./components/pages/payment";

// By adding routes we can scale the routed directly
export const routes = [
  {
    title: "Home",
    IconActive: HomeActiveIcon,
    IconInactive: HomeInActiveIcon,
    link: "/home",
    Component: Home,
  },
  {
    title: "Orders",
    IconActive: OrderActiveIcon,
    IconInactive: OrderInActive,
    link: "/orders",
    Component: Home,
  },
  // {
  //   title: "Products",
  //   IconActive: ProductsActiveIcon,
  //   IconInactive: ProductsInActive,
  //   link: "/products",
  //   Component: Home,
  // },
  {
    title: "Payment",
    IconActive: PaymentActiveIcon,
    IconInactive: PaymentInActiveIcon,
    link: "/payment",
    Component: Payment,
  },
];

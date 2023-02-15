import Header from "../header/Header";
import MainNavigation from "./MainNavigation";
import "./layout.css";

const Layout = (props) => {
  return (
    <div className="header-nav">
      <Header />
      <MainNavigation />
    </div>
  );
};
export default Layout;

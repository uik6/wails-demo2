import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Page2 from "../pages/page2";

const routes = [
  {
    key: "1",
    path: "/",
    element: <Home />,
    icon: <UserOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    path: "/page2",
    element: <Page2 />,
    icon: <VideoCameraOutlined />,
    label: <Link to="/page2">Page2</Link>,
  },
];

export default routes;

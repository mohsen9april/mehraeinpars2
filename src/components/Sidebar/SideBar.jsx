import { NavLink } from "react-router-dom";
import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
// import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
// import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "صفحه اصلی",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "چارت سازمانی",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "محصولات",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "خط جدید",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "گزارشات",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "تولید ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "مواد شیمیایی",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "تصفیه خانه",
        icon: <FaMoneyBill />,
      },
    ],
  },
  // {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  // {
  //   path: "/settings",
  //   name: "خط جدید",
  //   icon: <BiCog />,
  // },
  {
    path: "/saved",
    name: "درباره ما",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  مهرآیین پارس
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <TocRoundedIcon onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink to={route.path} key={index} className="link" activeClassName="active">
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main className="children_container">{children}</main>
      </div>
    </>
  );
};

export default SideBar;

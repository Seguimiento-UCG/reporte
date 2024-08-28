import { AnimatePresence, motion } from 'framer-motion';
import { FaFileExcel, FaRegEdit, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import { useState } from 'react';

const routes = [
  {
    path: '/',
    name: 'Panel de Adjuntación',
    icon: <FaFileExcel size={'1.3em'} />,
  },
  {
    path: '/datos',
    name: 'Actualizar Datos',
    icon: <FaRegEdit size={'1.3em'} />,
  },
];

export default function Sidebar({ children }) {
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
      width: 'auto',
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{ width: isOpen ? '200px' : '40px' }}
          className="sidebar"
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo-united"
                >
                  <h1 className="logo">SEG</h1>
                  <h3 className="logo zero">-</h3>
                  <h1 className="logo">UCG</h1>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars size={'1.6em'} onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="link">
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
            ))}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
}

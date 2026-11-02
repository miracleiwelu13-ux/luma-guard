import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = [
  { name: 'Home', path: '/' },
  { name: 'The Assessment', path: '/assessment' },
  { name: 'Features', path: '/features' },
  { name: 'Resources', path: '/resources' },
  { name: 'Pricing', path: '/pricing' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Top Header Bar */}
      <header className="navbar-header">
        <div className="navbar-inner">
          
          {/* LEFT SIDE: Menu + Logo */}
          <div className="nav-left">
            <button className="menu-btn" onClick={toggleMenu} aria-label="Open menu">
              <i className="bi bi-list"></i>
            </button>
            <Link to="/" className="nav-logo">
              <i className="bi bi-shield-lock-fill nav-logo-icon"></i> LUMA GUARD
            </Link>
          </div>

          {/* RIGHT SIDE: CTA Button */}
          <div className="nav-right">
            <Link to="/get-started" className="nav-cta">
              Get Started
            </Link>
          </div>

        </div>
      </header>

      {/* Slide-out Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed Overlay */}
            <motion.div 
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Drawer */}
            <motion.nav 
              className="nav-drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="drawer-header">
                <span className="drawer-logo">Luma Guard</span>
                <button className="close-btn" onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="drawer-links">
                {links.map((link) => (
                  <NavLink 
                    key={link.name} 
                    to={link.path}
                    onClick={toggleMenu}
                    className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="drawer-footer">
                <Link to="/get-started" className="btn-primary" onClick={toggleMenu}>
                  Add to Chrome
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
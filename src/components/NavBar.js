import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const navLinks = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Calculator',
      to: '/calculator',
    },
    {
      name: 'Quote',
      to: '/quote',
    },
  ];

  const styles = {
    navLink: {
      listStyle: 'none',
      marginRight: '1rem',
    },
  };

  return (
    <nav className="d-flex justify-content-between align-items-center my-4 text-start w-100">
      <h1>Math Magicians</h1>
      <ul className="list-group list-group-horizontal">
        {navLinks.map((link) => (
          <li key={`navlink-${link.name}`} style={styles.navLink}>
            <NavLink className="link-dark" to={link.to}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

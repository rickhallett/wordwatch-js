import '../css/components/components.header.css';
import logo from '../logo.svg';

export const Header = () => {
  return (
    <header className="app__header">
      <img src={logo} className="header__logo" alt="logo" />

      <a
        className="header__title"
        href="https://www.brandwatch.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>Wordwatch.js</h1>
      </a>
    </header>
  );
};

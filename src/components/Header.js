import logo from '../logo.svg';

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <a
        className="App-link"
        href="https://www.brandwatch.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>Wordwatch.js</h1>
      </a>
    </header>
  );
};

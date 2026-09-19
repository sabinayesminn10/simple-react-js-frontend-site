function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="/icon_logo.webp" alt="StackDiary logo" />
        <h2 className="logo">StackDiary</h2>
      </div>
      <nav className="container">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;

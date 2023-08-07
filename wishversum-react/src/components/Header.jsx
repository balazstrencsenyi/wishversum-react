function Header() {
  return (
  <div className="header-container">
      <h1>Wishversum</h1>
      <div className="menu-container">
        <div className="menu-item" onClick={() => {document.getElementById("first-page").scrollIntoView({ behavior: "smooth" });}}>
          Home
        </div>
        <div className="menu-item" onClick={() => {document.getElementById("second-page").scrollIntoView({ behavior: "smooth" });}}>
          About us
        </div>
        <div className="menu-item" onClick={() => {document.getElementById("third-page").scrollIntoView({ behavior: "smooth" });}}>
          Make a wish
        </div>
        <div className="menu-item" onClick={() => {document.getElementById("fourth-page").scrollIntoView({ behavior: "smooth" });}}>
          FAQ
        </div>
        <div className="menu-item" onClick={() => {document.getElementById("fifth-page").scrollIntoView({ behavior: "smooth" });}}>
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./style.css";

const navItems = [
  "Ana Sayfa", "Hakkımızda","Ürünler", "İletişim"
]

function NavBar() {
  return( 
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
      <ul>
        <li>Ana Sayfa</li>
        <li>Hakkımızda</li>
        <li>Ürünler</li>
        <li>İletişim</li>
      </ul>
      <hr />
  </nav>
 );
}

function Footer(){
  return (
    <footer>
    <hr />
    <nav> 
      <ul>
        <li>Ana Sayfa</li>
        <li>Hakkımızda</li>
        <li>Ürünler</li>
        <li>İletişim</li>
      </ul>
        <hr />
    </nav>
    </footer>
  );
}

function Main(){
  const user = {firstName: "Gülfidan", lastName: "Söylemez" };  
    return (
      <div>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
      </div>
    );
}


export default function App() {
  return (
    <div>
    <NavBar />
    <Main />
    <Footer />
    </div>
  );
}

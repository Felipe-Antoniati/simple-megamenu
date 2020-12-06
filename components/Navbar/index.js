import Link from "next/link";
import kanstyleLogo from "../../assets/logo-ks.svg";


function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><Link href="#"><a>Inicio</a></Link></li>
          <li><Link href="#"><a>Sobre</a></Link></li>
          <li className="dropdown">
            <Link href="#"><a>Catalogo</a></Link>
            <ul className="menu-area">
              <ul>
                <img src={kanstyleLogo} alt="Logo" />
              </ul>              <ul>
                <h4>Marcas</h4>
                <li><Link href="#"><a>Oakley</a></Link></li>
                <li><Link href="#"><a>Lacoste</a></Link></li>
                <li><Link href="#"><a>Polo Play</a></Link></li>
                <li><Link href="#"><a>Jhon Roger</a></Link></li>
              </ul>              <ul>
                <h4>Destaques</h4>
                <li><Link href="#"><a>Lançamentos</a></Link></li>
                <li><Link href="#"><a>Promoçoes</a></Link></li>
                <li><Link href="#"><a>Mais vendidos</a></Link></li>
              </ul>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;  
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav>
        <ul style={{ listStyleType: 'none', }}>
            <li>
                <Link to='/'>Home</Link> { '|' } <Link to='/pokemoncards'>All Pokemon Cards</Link> { '|' } <Link to='/pokemoncards/new'>Add a Pokemon Card</Link>
            </li>
        </ul>
      </nav>
    );
  }
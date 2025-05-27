import { Link } from 'react-router';

const NavBar = () => {
    
    return (
        <nav>
            <h3>Post Office Links</h3>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/mailboxes"}>Mailboxes</Link></li>
                <li><Link to={"/new"}>New Mailbox</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar
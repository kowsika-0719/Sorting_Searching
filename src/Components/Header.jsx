import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <nav className="navigation">
                    <div><Link to='/' className='home'>Home</Link></div>
                    <div><Link to="/student" className='stu'>Student</Link></div>
                </nav>
            </header>
        </>
    );
}

export default Header;

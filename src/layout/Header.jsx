import '../layout/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div>
                <div className='header' >Porkchain</div>
                <Link to="/">
                <button className='logout-header'>Logout</button>
                </Link>
                
            </div>

        </>

    )
}

export default Header
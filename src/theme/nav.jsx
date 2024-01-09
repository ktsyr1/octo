
// import { MantineLogo } from '@mantine/ds';
import Link from 'next/link';

export function NavHeader({ links }) {

    const items = links.map((link) => (
        <li className="nav-item p-3" key={link.label}>
            <Link key={link.label} href={link.link} className="page-scroll" >
                {link.label}
            </Link>
        </li>
    ));

    return (
        <header className="header">
            <div className="navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <Link className="navbar-brand mx-15" href="/">
                                    <img src="/images/logo.png" alt="Logo" />
                                </Link>

                                <div
                                    className="collapse navbar-collapse sub-menu-bar"
                                    id="navbarSupportedContent"
                                >
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        {items}
                                    </ul>
                                </div>
                                {/* <!-- navbar collapse --> */}
                            </nav>
                            {/* <!-- navbar --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </div>
            {/* <!-- navbar area --> */}
        </header>
    );
}
import Link from 'next/link'
import { useEffect } from 'react'

export default function RootLayout({ children }) {

    return (
        <>
            <Nav />

            <section >
                {children}
            </section>
        </>
    )
}
export function openMenu() {
    document.querySelector(".menu")?.classList.toggle('menu-delay')
}
export function Nav() {
    return (
        <nav >
            {/* menu icon */}
            <div className='box icon aitem menu-icon m-a' onClick={openMenu} >
                {/* <Icons src='menu' /> */}
                <img src="/icons/menu.svg" />
            </div>
            <div className="box space w-full aitem " >
                {/* logo */}
                <Link href={'/'} className='logo'>
                    <img src="/icons/logo.png" />

                    <b className='m-a'>السبيل</b>
                </Link>
                {/* menu */}

            </div>
            {/* logo */}
            <Link href={'/user/notification'} className='logo'>
                <img src="/icons/bell.svg" />
                {/* <b className='m-a'>السبيل</b> */}
            </Link>
            {/* search */}
        </nav>
    )
}

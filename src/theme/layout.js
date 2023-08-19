import Cookies from 'js-cookie'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavHeader } from './nav'

export default function RootLayout({ children }) {
    return (
        <>
            <NavHeader links={[
                { link: "/", label: "الصفحة الرئيسية" },
                { link: "/page/diploma", label: "الدبلومة" },
                { link: "/QA", label: "سؤال وجواب" },
                { link: "/admin", label: "لوحة التحكم", ok: true },
            ]

            } />
            <article >
                {children}
            </article>
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
            {/* <Icons src='menu' /> */}
            <div className="box space aitem " >
                {/* logo */}
                <img src="/icons/menu.svg" className='box icon aitem menu-icon m-a' onClick={openMenu} />
                <Link href={'/'} className='logo'>
                    <img src="/icons/logo.png" />
                </Link>
            </div>
            {/* menu */}
            <Menu />
            {/* logo */}
            <div className="box row">
                <Link href={"#"} > <img src="/icons/facebook.svg" /> </Link>
                <Link href={"#"} > <img src="/icons/instagram.svg" /> </Link>

            </div>
            {/* search */}
        </nav>
    )
}
function Menu() {
    let [token, setT] = useState("")
    useEffect(() => {
        let cookie = Cookies.get('token')
        setT(cookie)
    }, [])
    return (
        <div className="menu">
            {[
                { i: 1, u: "/", t: "الصفحة الرئيسية" },
                { i: 2, u: "/page/diploma", t: "الدبلومة" },
                { i: 3, u: "/QA", t: "سؤال وجواب" },
            ].map(a => (
                <Link href={a.u} key={a.i} >{a.t}</Link>
            ))}
            {token?.length > 20 ? <Link href="/admin" className="btn" >لوحة التحكم</Link> : <></>}
        </div>
    )

}
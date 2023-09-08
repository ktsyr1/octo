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

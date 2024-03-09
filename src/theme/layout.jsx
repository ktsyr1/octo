 
import { Footer } from './footer'
import { NavHeader } from './nav'

export default function RootLayout({ children }) {
    return (
        <>
            <NavHeader links={[
                { link: "/", label: "الصفحة الرئيسية" },
                { link: "/#service", label: "الخدمات" },
                { link: "/blog", label: "المدونة" },
                { link: "/cert", label: "الشهادات" },
                { link: "/admin", label: "لوحة التحكم", ok: true },
            ]

            } />
            <article >
                {children}
            </article>
            <Footer />
        </>
    )
} 
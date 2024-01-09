import { AuthServerSide } from '@/lib/app2'
import Link from 'next/link'

export async function getServerSideProps(ctx) {
    return AuthServerSide(ctx, () => ({}))
}

export default function adminHome() {
    return (
        <section className='  m-20' >
            <h1 className="m-20">لوحة التحكم</h1>
            <div className="m-10 box grid">
                {[
                    { title: "المستخدمين", url: "/admin/users", src: "/icons/users.svg" },
                    { title: "المنشورات", url: "/admin/posts", src: "/icons/posts.svg" },
                ].map((a) => (
                    <Link href={a.url} className="m-10 p-20 bord w-300 box rows aitem" key={a.src}  >
                        <img src={a.src} className="  ml-10" style={{width: '50px'}} />
                        <p>{a.title}</p>

                    </Link>
                ))
                }
            </div>

        </section>
    )
}

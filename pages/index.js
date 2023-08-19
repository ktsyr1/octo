import { SSRctx } from "@/lib/app2";
import { AuthServerSide } from "@/lib/app2";
import axios from "axios";
import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link"
import { useEffect, useState } from "react";


export default function Home() {

    return (
        <article className="box col aitem" >
            <Head>
                <title>تطبيق السبيل العالمية</title>
                <meta name="description" content="هو تطبيق لادارة عمليات التفاعل على منشورات على فيس وك" />
            </Head>
            <Hero />
            <AboutBots />
            <Service />
            <Contact />
        </article>
    )
}

function Hero() {
    function Btns() {
        let token = Cookies.get('token')
        if (token?.length > 20) return (
            <div className="box row">
                <Link href={"/user/tasks"} passHref >   تصفح المهام</Link>
            </div>
        )
        else return (
            <div className="box row">
                <Link href={"/auth/login"} >تسجيل الدخول</Link>
                <Link href={"/auth/signup"} >التسجيل  </Link>
            </div>
        )

    }
    return (
        <div className="hero">
            <img src="/icons/bg-action.png" />
            <div>
                <h2>نمي  التفاعل على منشورك </h2>
                <Btns />
            </div>
        </div>
    )
}
function AboutBots() {
    return (
        <div className="aboutBots">
            <h3>انظام الينا كمتفاعل</h3>
            <p>نوفر لكم واجهة سهلة ونظام نقاط يمكنك سحبها بشكل نقدي كل ما عليك هو التفاعل مع المنشورات </p>
        </div>
    )
}
function Service() {
    let [data, setData] = useState([])
    useEffect(async () => {
        let url = `${process.env.NEXT_PUBLIC_API}/client/service`
        let { data } = await axios.get(url);
        setData(data)
    }, [])
    return (
        <div className="Service">
            {data.map((a) => {
                return (
                    <div key={a}>
                        <img src={a?.image} />
                        <b>{a?.title}</b>
                        <p>{a?.content}</p>
                    </div>
                )
            })}
        </div>
    )
}
function Contact() {
    return (
        <div className="Contact" >
            <h3>تابعنا وتواصل معنا  </h3>
            <div className="box row">
                <a href={"#"} >
                    <img src="/icons/facebook.svg" />
                </a>
                <a href={"#"} >
                    <img src="/icons/tiktok.svg" />
                </a>
                <a href={"#"} >
                    <img src="/icons/whatsapp.svg" />
                </a>
                <a href={"#"} >
                    <img src="/icons/gmail.svg" />
                </a>
            </div>

        </div>
    )
}

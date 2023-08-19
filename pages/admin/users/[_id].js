"use client";
import axios from "axios";
import { useEffect, useState } from 'react';

import { AuthServerSide } from "@/lib/app2";
import { useRouter } from "next/router";
import { Alert } from "@/lib/app";

export async function getServerSideProps(ctx) {
        return await AuthServerSide(ctx, 'admin', async ({ NEXT_PUBLIC_API, query, config }) => {
                let url = `${NEXT_PUBLIC_API}/users/${query._id}`
                let { data } = await axios.get(url, config);
                return { data, config }
        })
}
export default function UserOne(props) {
        let [data, setData] = useState(props.data)
        let route = useRouter()
        function pv(e) {
                let a = data?.permissions?.find(b => b === e)
                return a ? true : false
        }
        let [Ads, setAds] = useState(pv("ads"))
        let [Admin, setAdmin] = useState(pv("admin"))
        let [Accounting, setAccounting] = useState(pv("accounting"))

        let URL_API = `${process.env.NEXT_PUBLIC_API}/users/${route.query._id}`

        function Send(e) {
                e.preventDefault()
                // send data to the server
                let body = { isAdmin: true, permissions: [] }
                if (data.isAdmin) {

                        body = { isAdmin: true, permissions: [] }

                        if (Ads) body.permissions.push("ads")
                        if (Admin) body.permissions.push("admin")
                        if (Accounting) body.permissions.push("accounting")
                } else body = { isAdmin: false, permissions: [] }

                return axios.put(URL_API, body, props.config)
                        .then(({ data }) => {
                                Alert("تمت الترقية")
                                location.reload()
                        })

        }
        function upgrade(e) {
                Send(e)
                setData({ ...data, isAdmin: !data.isAdmin })
        }
        function isBlock() {
                setData({ ...data, isBlock: !data.isBlock })
                axios.patch(URL_API, {}, props.config)
                Alert(`لقد تم ${data.isBlock ? " الغاء " : ""} حظر هذا المستخدم`)

        }
        function send2(e) {
                console.log(22);
                e.preventDefault()
                let body = { isAdmin: true, permissions: [] }
                if (data.isAdmin) {
                        console.log(data.isAdmin);
                        body = { isAdmin: true, permissions: [] }
                        if (Ads) body.permissions.push("ads")
                        if (Admin) body.permissions.push("admin")
                        if (Accounting) body.permissions.push("accounting")
                } else body = { isAdmin: false, permissions: [] }
                console.log(body)
        }
        return (
                <main>
                        {/* header */}
                        <div className="box col aitem bord m-a w-300 h-200 space">
                                <h1>{data?.fullname}</h1>
                                <p>{data?.email}</p>
                                <p>{data?.wa}</p>
                                <div className="m-a box space w-full">
                                        <button onClick={upgrade}>{data?.isAdmin ? "الغاء ال" : ""}ترقية   </button>
                                        <button onClick={isBlock}>{data?.isBlock ? "الغاء ال" : ""}حظر  </button>
                                </div>
                        </div>
                        {/* form */}
                        {data?.isAdmin ?
                                <form className="m-a">

                                        <Checkbox title="معلن" name="ads" defaultValue={Ads} onChange={() => setAds(!Ads)} />
                                        <Checkbox title="ادمن" name="admin" defaultValue={Admin} onChange={() => setAdmin(!Admin)} />
                                        <Checkbox title="محاسب" name="accounting" defaultValue={Accounting} onChange={() => setAccounting(!Accounting)} />
                                        <button onClick={Send} className="mt-20">اضافة</button>

                                </form>
                                : ""}
                </main>
        );
}
function Checkbox(props) {
        return (
                <div className="box row">
                        <input type="checkbox"  {...props} />
                        <p className="ml-10">{props.title}</p>
                </div>
        )
}
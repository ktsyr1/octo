import { ITS } from "@/lib/app"
import { message } from "antd";
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form";
import { AuthServerSide } from "@/lib/app2";

export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, async ({ query, config }) => ({ config, query }))
}

export default function AddPost({ config, query }) {
    let route = useRouter()
    // let [Data, setData] = useState({})
    const { register, handleSubmit } = useForm();
    const onSubmit = res => {
        axios.post('/api/admin/certificates', res, config)
            .then(({ data }) => {
                // alert
                message.success("تم اضافة المنشور")
                route.push('/admin/certificates')
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form" >
                <h1>اضافة الشهادة</h1>
                <label htmlFor="code"  >الكود</label>
                <input type="text" id="code" {...register("code")} />

                <label htmlFor="url"  >الرابط   </label>
                <input type="text" id="url" {...register("url")} />

                <div className="box mt-20 mx-0 row space w-full">
                    <button onClick={(e) => {
                        e.preventDefault()
                        route.back()
                    }} className="ml-10 btn p-10 m-0 off" style={{ width: '45%' }}   >عودة </button>
                    <button type="submit" style={{ width: '45%' }} >اضافة</button>
                </div>
            </form>
        </div>
    )
}






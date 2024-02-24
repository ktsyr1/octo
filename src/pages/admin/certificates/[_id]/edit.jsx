import axios from "axios"
import { useState } from "react"

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { message } from "antd";
import { AuthServerSide } from "@/lib/app2";

export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, async ({ NEXT_PUBLIC_API, config }) => {
        let url = `${NEXT_PUBLIC_API}/admin/certificates/${ctx.query._id}`
        let { data } = await axios.get(url, config);

        return { data, config, query: ctx.query }
    })
}

export default function AddPost({ data, config, query }) {
    const { register, handleSubmit } = useForm({ defaultValues: data });
    let route = useRouter()
    const onSubmit = res => {
        const file = res.image//.files[0];
        let image = null
        function send(image) {
            console.log(image);
            let data = { ...res, image }
            axios.put(`/api/admin/certificates/${query._id}`, data, config)
                .then(({ data }) => {
                    message.success(data.msg)
                    route.push("/admin/certificates")
                })
        }
        if (file.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => send(reader.result)
            reader.readAsDataURL(file[0]);
        } else send(image)

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form" >
            <h1>تعديل الشهادة</h1>
            <label htmlFor="code"  >الكود</label>
            <input type="text" id="code" {...register("code")} />

            <label htmlFor="url"  >الرابط   </label>
            <input type="text" id="url" {...register("url")} />
 
            <div className="box mt-20 mx-0 row space w-full">
                <button onClick={(e) => {
                    e.preventDefault()
                    route.back()
                }} className="ml-10 btn p-10 m-0 off" style={{ width: '45%' }}   >عودة </button>
                <button type="submit" style={{ width: '45%' }} >تحديث</button>
            </div>
        </form>
    )
}






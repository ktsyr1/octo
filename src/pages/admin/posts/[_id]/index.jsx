import axios from "axios"
import { useState } from "react"

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { message } from "antd";
import { AuthServerSide } from "@/lib/app2";    
import PageBlogOne from "@/theme/pageBlog";

export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, async ({ NEXT_PUBLIC_API, query, config }) => {
        let url = `${NEXT_PUBLIC_API}/admin/posts/${ctx.query._id}`
        let { data } = await axios.get(url, config);

        return { data, config, query: ctx.query }
    })
}

export default function AddPost({ data, config, query }) {
    const { register, handleSubmit } = useForm({ defaultValues: data });
    let route = useRouter()
    let [view, setView] = useState()
    const onSubmit = res => {
        const file = res.image//.files[0];
        let image = null
        function send(image) {
            // console.log(image);
            let {create_at , ...body} = res
            let data = { ...body, image }
            axios.put(`/api/admin/posts/${query._id}`, data, config)
                .then(({ data }) => {
                    message.success(data.msg)
                    // route.push("/admin/posts")
                })
        }
        if (file.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => send(reader.result)
            reader.readAsDataURL(file[0]);
        } else send(image)

    }
    return (
        <div className="box grid" >

            <form onSubmit={handleSubmit(onSubmit)} className="form" onChange={e => setView({ ...view, [e.target.name]: e.target.value })} >
                <h1>تعديل منشور</h1>
                <label htmlFor="title"  >العنوان</label>
                <input type="text" id="title" {...register("title")} />

                <label htmlFor="url"  >الرابط   </label>
                <input type="text" id="url" {...register("url")} />

                <label htmlFor="cat"  >التصنيف   </label>
                <input type="text" id="cat" {...register("cat")} />

                <label htmlFor="image"  >الصورة   </label>
                <input type="file" id="image" {...register("image")} />

                <label htmlFor="bio"  >الوصف   </label>
                <input type="text" id="bio" {...register("bio")} />

                <label   >المحتوى   </label>
                <textarea {...register("content")} className="h-200 " >  </textarea>

                <div className="box mt-20 mx-0 row space w-full">
                    <button onClick={(e) => {
                        e.preventDefault()
                        route.back()
                    }} className="ml-10 btn p-10 m-0 off" style={{ width: '45%' }}   >عودة </button>
                    <button type="submit" style={{ width: '45%' }} >تحديث</button>
                </div>
            </form>
            {/* <PageBlogOne data={view} /> */}
        </div>
    )
}
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
        const file = res.image//.files[0];
        let image = null
        function send(image) {
            let data = { ...res, image }
            axios.post('/api/admin/posts', data, config)
                .then(({ data }) => {
                    // alert
                    message.success("تم اضافة المنشور")
                    route.push('/admin/posts')
                })
        }
        if (file.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => send(reader.result)
            reader.readAsDataURL(file[0]);
        } else send(image)

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form" >
                <h1>اضافة منشور</h1>
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
                <textarea {...register("content")} className="h-200">  </textarea>


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






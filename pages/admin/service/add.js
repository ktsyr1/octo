import { Alert, Input, setChange } from "@/lib/app"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { AuthServerSide } from "@/lib/app2";

export async function getServerSideProps(ctx) {
        return await AuthServerSide(ctx, 'ads',
                async ({ query, config }) => ({ config, query })
        )
}

export default function AddPost({ config, query }) {
        let route = useRouter()
        let [Data, setData] = useState({})
        let set = e => setChange(e, Data, setData)
        const [imageString, setImageString] = useState('');
        useEffect(() => {
                setData({ ...Data, image: imageString })
        }, [imageString])
        function send(e) {
                e.preventDefault()
                // send data to the server
                axios.post('/api/service', Data, config)
                        .then(({ data }) => {
                                // alert
                                Alert("تم اضافة خدمة")
                                route.push('/admin/service')

                                // redirect to home page admin or user page

                        })
        }
        const ImageToText = (event) => {
                const file = event.target.files[0];
                if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setImageString(reader.result)
                        reader.readAsDataURL(file);
                }
        };
        return (
                <form onChange={set}   >
                        <h1>اضافة منشور</h1>
                        <Input title="العنوان" name='title' />
                        <Input title="التصنيف" name='cat' />
                        <p>يجب ان تكون ابعاد الصورة 300*150 لكي لا تتسبب في مشاكل في التصميم .</p>
                        <Input title="الصورة" type="file" name='image' onChange={ImageToText} />
                        <p>الوصف</p>
                        <textarea className="my-10" name="content" style={{ minHeight: "80px" }} ></textarea>
                        <button onClick={send} className="mt-20">اضافة</button>
                </form>
        )
}






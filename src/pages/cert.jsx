import Card from '@/theme/card';
import axios from 'axios';
import { useState } from 'react';


export default function Home() {
    let [data, setData] = useState({})
    let [code, setCode] = useState("")

    function Send(e) {
        e.preventDefault();

        axios.post(`${process.env.NEXT_PUBLIC_API}/client/certificates`, { code })
            .then(({ data }) => {
                console.log(data);
                if (data?.code) {
                    data.url = data.url?.replace("view", "preview")//.split("?")[0]
                }
                setData(data);
            })

    }
    return (
        <div className='box col j aitem minHeight' >
            <h1>الشهادات</h1>
            <p>  بامكانك الوصول لشهادتك وتحميلها من هذه الصفحة فقط ضع كود الشهادة </p>
            <br />
            <form className='box flex j m-auto rows w-100 my-4' >
                <input type='text' placeholder="ادخل الكود الخاص بك" onChange={e => setCode(e.target.value)} />
                <input type='submit' value="عرض الشهادة " className='mx-2' onClick={Send} />
            </form>
            {data?.code && <iframe src={data?.url} style={{ maxWidth: 640, width: "100%", height: 480, margin: 10 }} allow="autoplay"></iframe>}
            {data?.msg && <p>{data.msg}</p>}
            <br />
            <p>في حال واجهت اي مشكلة تواصل معنا عبر <a href='mailto:octotech.suupport@gmail.com'> octotech.suupport@gmail.com</a></p>
            <br />
        </div>
    )
} 

import Card from "@/theme/card";
import axios from "axios";
import MarkdownIt from 'markdown-it'
import Link from "next/link";
import { useState } from "react";

export async function getStaticPaths() {
    let api = `${process.env.NEXT_PUBLIC_API}/client/posts`
    let { data } = await axios.get(`${api}`);
    let paths = data.map(App => ({ params: { slug: App.url } }))
    return { paths, fallback: true }
}

// get static props
export async function getStaticProps(ctx) {
    let api = `${process.env.NEXT_PUBLIC_API}/client/posts`
    let { data } = await axios.get(`${api}/${encodeURI(ctx.params.slug)}`);
    return { props: { data }, revalidate: 10 * 60 }
}

export default function PageOne({ data: propsData }) {
    let [data, setData] = useState(propsData)
    let md = new MarkdownIt()
    return (
        <div className="box col m-20 p-20 " style={{ maxWidth: '700px', margin: 'auto' }} >
            <img src={data?.image} alt={data?.title} style={{ borderRadius: '20px' }} />

            <h1 className="py-10">{data?.title}</h1>
            <div className=" box rows">
                {/* icon date 
                <span>{new Date(data.create_at).toDateString()}</span>*/}
                {/* icon cat */}
                {data?.cat?.map(App => <Link href={`/blog/cat/${App}`} key={App} className="mx-10">{App}</Link>)}
            </div>
            <p className="p-10 my-10" style={{ backgroundColor: '#eee', borderRadius: '10px' }}>{data?.bio}</p>
            {/*   <div dangerouslySetInnerHTML={{ __html: md.render(data.content || " ") }} />  */}
            <hr />
            <h2 >مقالات ذات صلة</h2>
            <div className="box grid">
                {data.reletad?.map(post => <Card data={post} key={post._id} />)}

            </div>
        </div>
    )
}

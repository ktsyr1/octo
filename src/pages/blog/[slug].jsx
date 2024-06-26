import SEO from "@/theme/SEO";
import Card from "@/theme/card";
import { IconTag, Iconclock } from "@/theme/icons";
import axios from "axios";
import MarkdownIt from 'markdown-it'
import Link from "next/link";
import { useState } from "react";



export async function getServerSideProps(ctx) {
    let api = `${process.env.NEXT_PUBLIC_API}/client/posts`
    let { data } = await axios.get(`${api}/${encodeURI(ctx.params.slug)}`);
    // let { data } = await axios.get(url, config);

    return { props: { data, query: ctx.query } }

}
// export async function getStaticPaths() {
//     let api = `${process.env.NEXT_PUBLIC_API}/client/posts`
//     let { data } = await axios.get(`${api}`);
//     let paths = data.map(App => ({ params: { slug: App.url } }))
//     return { paths, fallback: true }
// }

// // get static props
// export async function getStaticProps(ctx) {
//     let api = `${process.env.NEXT_PUBLIC_API}/client/posts`
//     let { data } = await axios.get(`${api}/${encodeURI(ctx.params.slug)}`);
//     // let md = new MarkdownIt()
//     // data.content = md.render(data.content || " ")
//     // data.create_at = new Date(data?.create_at).toDateString()
//     return { props: { data }, revalidate: 1 }
// }

export default function PageOne({ data: propsData }) {
    let [data, setData] = useState(propsData)

    let md = new MarkdownIt()
    data.content = md.render(data.content || " ")
    data.create_at = new Date(data?.create_at).toDateString()
    return (
        <div className="box col m-20 p-20 " style={{ maxWidth: '700px', margin: 'auto' }} >
            <SEO title={data?.title} description={data?.des} image={data?.image} />

            <img src={data?.image} alt={data?.title} style={{ borderRadius: '20px' }} />

            <h1 className="py-10">{data?.title}</h1>
            <div className=" box rows aitem">
                <Iconclock size={20} />
                {/* icon date  */}
                <span className="mx-10">{data?.create_at}</span>
                {/* icon cat */}
                {data?.cat?.map(App => <Link href={`/blog/cat/${App}`} key={App} className="mx-10 box rows aitem">
                    <IconTag size={20} />
                    <p className="mx-10">{App}</p>
                </Link>)}
            </div>
            <p className="p-10 my-10" style={{ backgroundColor: '#eee', borderRadius: '10px' }}>{data?.bio}</p>
            <div dangerouslySetInnerHTML={{ __html: data?.content }} />
            <hr />
            <h2 >مقالات ذات صلة</h2>
            <div className="box grid">
                {data?.reletad?.map(post => <Card data={post} key={post._id} />)}
            </div>
        </div>
    )
}

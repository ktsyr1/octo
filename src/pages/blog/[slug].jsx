import axios from "axios";
import MarkdownIt from 'markdown-it'

let api = `${process.env.NEXT_PUBLIC_API}/client/posts`
export async function getStaticPaths() {
    let { data } = await axios.get(`${api}`);
    let paths = data.map(App => ({ params: { slug: App.url } }))
    return { paths, fallback: true }
}

// get static props
export async function getStaticProps(ctx) {
    let { data } = await axios.get(`${api}/${encodeURI(ctx.params.slug)}`);
    return { props: { data }, revalidate: 10 * 60 }
}

export default function PageOne({ data }) {
    let md = new MarkdownIt()
    let dddd = {
        "cat": ["اعلان"],
        "create_at": 1704743697091,
    }
    return (
        <div className="box col m-20 " style={{ maxWidth: '700px', margin: 'auto' }} >
            <img src={data?.image} alt={data?.title} style={{ borderRadius: '20px' }} />

            {/* content */}
            <h1 className="py-10">{data?.title}</h1>
            <p className="p-10 my-10" style={{ backgroundColor: '#eee', borderRadius: '10px' }}>{data?.bio}</p>
            {/* view md  */}
            <div dangerouslySetInnerHTML={{ __html: md.render(data?.content) }} />
        </div>
    )
}

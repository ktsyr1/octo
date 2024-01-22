import Link from "next/link";

export default function Card({ data }) {
    return (
        <Link href={`/blog/${data.url}`} style={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            margin: '10px'
        }}>
            <img src={data.image} alt={data.title} style={{ borderRadius: '20px' }} />
            <b className="p-10  ">{data.title}</b>
        </Link>
    )
}
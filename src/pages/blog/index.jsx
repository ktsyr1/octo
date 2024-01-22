import axios from 'axios';
import Link from 'next/link'; 

export const getStaticProps = async ({ query }) => {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/client/posts`);
    return { props: { data } }
}
export default function Home({ data }) {
    return  (
        <div >
            <h1>b</h1>
        </div>
    )
} 
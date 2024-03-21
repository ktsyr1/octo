import axios from 'axios';
import Link from 'next/link';
import { Landing } from '../theme/Landing';
import Head from 'next/head';
import SEO from '@/theme/SEO';

// export const getStaticProps = async ({ query }) => {
//     let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/client`);
//     return { props: { data } }
// }
export async function getServerSideProps() {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/client`);
    return { props: { data } }
}
export default function Home({ data }) {
    return (
        <div>
            <SEO />
            <Landing data={data} />
        </div>
    )
} 
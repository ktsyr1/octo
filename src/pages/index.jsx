import axios from 'axios';
import Link from 'next/link';
import { Landing } from '../theme/Landing';

export const getStaticProps = async ({ query }) => {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/client`);
    return { props: { data } }
}
export default function Home({ data }) {
    return <Landing data={data} />
} 
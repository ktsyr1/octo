import Card from '@/theme/card';
import axios from 'axios';
import Link from 'next/link';

export const getStaticProps = async ({ query }) => {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/client/posts`);
    return { props: { data } }
}
export default function Home({ data }) {
    return (
        <div className='box col j aitem' >
            <h1>المقالات</h1>
            <p> افضل المقالات المختارة بعناية المخصصة لك من كل العلوم برمجة وتصميم و الاخبار التقنية  والكثير لك </p>
            <br />
            <div className="box grid j m-20">
                {data.map(post => <Card data={post} />)}
            </div>
        </div>
    )
} 
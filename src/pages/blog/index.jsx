import SEO from '@/theme/SEO';
import Card from '@/theme/card';
import axios from 'axios';

export async function getServerSideProps() {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/client/posts`);
    return { props: { data } }
}

export default function Home({ data }) {
    let init = {
        title: 'المقالات',
        des: "افضل المقالات المختارة بعناية المخصصة لك من كل العلوم برمجة وتصميم و الاخبار التقنية  والكثير لك "
    }
    return (
        <div className='box col j aitem' >
            <SEO title={init?.title} description={init?.des} />

            <h1>{init?.title}</h1>
            <p>{init?.des} </p>
            <br />
            <div className="box grid j m-20">
                {data.map(post => <Card data={post} key={post?.slug} />)}
            </div>
        </div>
    )
} 

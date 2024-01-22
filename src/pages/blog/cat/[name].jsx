import Card from '@/theme/card';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogCat() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    let { query } = useRouter()
    useEffect(() => {
        let API = `/api/client/posts/cat/${query.name}`
        axios.get(API).then(({ data }) => {
            setData(data)
            setLoading(false)
        })
    },[query])
    // console.log(data .length);
    function List() {
        if (isLoading) return <p>Loading...</p>
        if ( !data && data?.length > 0) return <p>لا توجد نتائج</p>
        return data.map((item) => <Card data={item} key={item._id} />)
    }
    return (
        <div className='box col m-20'>
            <h1>  تصنيف :  {query.name} </h1>
            <div className='box grid'>
                <List />
            </div>
        </div>
    )
} 
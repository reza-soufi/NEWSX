import React, {FC} from 'react';

interface Props {
    data: any;
    params : any;
}

const PostDetail:FC<Props> = ({data}) => {
    return (
        <div>
            <h1> { data.title }</h1>
            <h2> { data.body }</h2>
        </div>
    );
};

export async function getServerSideProps(ctx: { query: any; }) {
    const params = ctx.query;
    console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    return {
        props : {
            data
        }
    }
}

export default PostDetail;
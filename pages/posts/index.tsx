import React, {FC} from 'react';
import Link from "next/link";

interface Props {
    data : any;
}

const PostPage:FC<Props> = ({data}) => {
    return (
        <div>
            <h1> this is post page </h1>
            {
                data.map((item: any) =>
                  <Link href={`/posts/${item.id}`}>
                      <a>
                          <h2> {item.title} </h2>
                      </a>
                  </Link>
                )
            }
        </div>
    );
};

export async function getStaticProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props : {
            data
        }
    }
}

export default PostPage;
import Link from 'next/link';
import Head from 'next/head';

function PostList({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <h3>
                {post.id} {post.title}
              </h3>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}

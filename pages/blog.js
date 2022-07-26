import { getSession } from 'next-auth/react';

function blog({ data }) {
  return <h1>Blog Page - {data}</h1>;
}

export default blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  //console.log(session);
  return {
    props: {
      data: session ? 'List of personalized content' : 'List of free content',
    },
  };
}

import useSWR from 'swr';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR('dashboard', fetcher);
  const { data: session, status } = useSession();

  if (error) return 'An error has occurred';
  if (!data || status === 'loading') return 'Loading...';
  if (status === 'unauthenticated') {
    return <h2>Access Denied</h2>;
  }
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome, {session.user.name}</h1>

        <h1>Dashboard</h1>
        <Image
          src={`${session.user.image}`}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(300, 300)
          )}`}
          width={300}
          height={300}
        />
        {session.user.email && <h2>Email - {session.user.email}</h2>}
        <h2>posts - {data.posts}</h2>
        <h2>comments - {data.comments}</h2>
        <h2>Likes - {data.likes}</h2>
        <h2>Followers - {data.followers}</h2>
        <h2>Following - {data.following}</h2>
      </div>
    </>
  );
}

export default DashboardSWR;

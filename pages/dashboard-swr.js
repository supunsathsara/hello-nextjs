import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) return 'An error has occurred';
  if (!data) return 'Loading...';

  return (
    <>
      <h1>Dashboard</h1>
      <h2>posts - {data.posts}</h2>
      <h2>comments - {data.comments}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </>
  );
}

export default DashboardSWR;

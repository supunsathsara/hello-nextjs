import { useState, useEffect } from 'react';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [DashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>posts - {DashboardData.posts}</h2>
      <h2>comments - {DashboardData.comments}</h2>
      <h2>Likes - {DashboardData.likes}</h2>
      <h2>Followers - {DashboardData.followers}</h2>
      <h2>Following - {DashboardData.following}</h2>
    </>
  );
}

export default Dashboard;

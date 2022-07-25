import User from '../../components/user';

function users({ users }) {
  return (
    <>
      <h1>Users list</h1>
      <h3>Logged in as {process.env.NEXT_PUBLIC_UID}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default users;

export async function getStaticProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(`connecting with user: ${user} password: ${password}`);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

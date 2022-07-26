import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const session = await getSession({ req });
  //console.log(session);
  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
  } else {
    res.status(200).send({ message: 'success', session });
  }
};

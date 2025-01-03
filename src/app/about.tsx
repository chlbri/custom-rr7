import { useLoaderData } from 'react-router';
import type { loader } from './layout.server.js';

export default function About() {
  const data = useLoaderData<typeof loader>();
  return <h1>{data.message}</h1>;
}

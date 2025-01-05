import { jsx as _jsx } from "react/jsx-runtime";
import { useLoaderData } from 'react-router';
export default function About() {
    const data = useLoaderData();
    return _jsx("h1", { children: data.message });
}

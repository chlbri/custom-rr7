import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, Link, Outlet, useLoaderData } from 'react-router';
export default function Layout() {
    const data = useLoaderData();
    return (_jsxs("html", { children: [_jsx("head", { children: _jsx("title", { children: "React Router Custom Framework" }) }), _jsxs("body", { children: [_jsxs("div", { children: [_jsx("h1", { children: "React Router Custom Framework" }), _jsxs(Form, { method: 'post', children: [_jsxs("p", { children: ["Message: ", _jsx("i", { children: data.message })] }), _jsxs("fieldset", { children: [_jsx("input", { name: 'message', placeholder: 'Enter a new message' }), ' ', _jsx("button", { type: 'submit', children: "Update" })] })] }), _jsxs("p", { children: [_jsx(Link, { to: '/', children: "Home" }), " | ", _jsx(Link, { to: '/about', children: "About" })] }), _jsx("hr", {}), _jsx(Outlet, {})] }), _jsx("script", { defer: true, src: '/js/entry.client.js' })] })] }));
}

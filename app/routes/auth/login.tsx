import type { Route } from "./+types/login";
   
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function login() {
  return <div className="card-body"></div>;
}

import {Home} from "../home/home";
import type { Route } from "./home/+types/home";
   
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function home() {
  return <Home />;
}

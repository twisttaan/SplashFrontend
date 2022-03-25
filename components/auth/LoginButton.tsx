import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { APIMe } from "../../types";

export default function LoginButton() {
  const [user, setUser] = useState<APIMe | null>(null);
  useEffect(() => {
    axios
      .get(`${process.env.API_URL}/user/me`, {
        withCredentials: true
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <Link href={user ? `/${user.username}` : "/auth/login"}>
        <a className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-gray-400">
          {user ? user.username : "Login"}
        </a>
      </Link>
    </>
  );
}

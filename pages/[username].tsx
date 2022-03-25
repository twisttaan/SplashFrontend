import axios from "axios";
import { NextPage } from "next";
import UserHero from "../components/user/UserHero";
import { APIUser } from "../types";

export async function getServerSideProps(context: {
  query: { username: string };
}) {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/user/${context.query.username}`,
      {
        withCredentials: true
      }
    );

    return {
      props: {
        user: res.data.user,
        username: context.query.username
      }
    };
  } catch (err) {
    return {
      props: {
        user: null,
        username: context.query.username
      }
    };
  }
}

interface Props {
  user: APIUser | null;
  username: string;
}

const User: NextPage = (props) => {
  const { user, username } = props as Props;

  while (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-transparent text-7xl bg-clip-text bg-gradient-to-tr from-[#0011ff] to-[#00aeff] hover:text-[#ffffff] transition-all">
          Page not found.
        </span>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-cover">
        <UserHero user={user} />
      </div>
    </div>
  );
};

export default User;

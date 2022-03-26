import axios from "axios";
import { NextPage } from "next";
import UnkownPage from "../components/branding/UnkownPage";
import Slate from "../components/messages/Slate";
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

const User: NextPage<Props> = ({ user, username }) => {
  function onChange(value: string) {
    console.log(value);
  }

  while (!user) {
    return <UnkownPage />;
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-cover">
        <UserHero user={user} />
        <Slate
          onReturn={() => console.log("return")}
          onChange={onChange}
          label={`Message @${user.username}`}
        />
      </div>
    </div>
  );
};

export default User;

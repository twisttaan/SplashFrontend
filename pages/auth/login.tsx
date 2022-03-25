import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../../context/UserProvider";
import sendToast from "../../utils/sendToast";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useUser();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLoginPress = () => {
    setLoading(true);

    axios
      .post(
        `${process.env.API_URL}/auth/login`,
        {
          username: email,
          password
        },
        {
          withCredentials: true
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        sendToast("Logged in!", "success");
        setUser(res.data.user);
        router.push(`/${res.data.user.username}`);
      })
      .catch((err) => {
        sendToast("Username or email and password combo wrong", "error");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-cover">
        <div className="p-5 bg-zinc-800 my-44 flex flex-col rounded-xl drop-shadow-2xl">
          <input
            type="text"
            placeholder="Email or Username"
            id="email"
            className="p-2 w-96 mx-2 mt-6 bg-zinc-800 text-white placeholder-gray-400 border-2 rounded-lg border-zinc-700"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-2 w-96 mx-2 mt-6 bg-zinc-800 text-white placeholder-gray-400 border-2 rounded-lg border-zinc-700"
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 mt-6 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex flex-col items-center justify-center"
            onClick={onLoginPress}
          >
            {loading ? (
              <div className="animate-spin items-center rounded-full h-5 w-5 border-t-2 border-b-2 border-blurple drop-shadow-2xl" />
            ) : (
              "Log in"
            )}
          </button>
          <br />

          <span className="text-sm text-shadow text-center">
            Don&apos;t have an account?{" "}
            <a
              className="text-white text-center"
              onClick={() => {
                setOpen(true);
              }}
            >
              <span className="text-blue-500 hover:cursor-pointer hover:underline">
                Sign up
              </span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

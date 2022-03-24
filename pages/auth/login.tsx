import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);

  const onLoginPress = () => {
    console.log("logging in!");
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
        axios
          .get(`${process.env.API_URL}/user/${res.data.user.id}`, {
            withCredentials: true
          })
          .then((res) => {
            console.log("user", res);
          });
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-cover">
        <div className="p-5 bg-zinc-800 my-44 flex flex-col rounded-xl drop-shadow-2xl">
          <h1 className="text-3xl font-medium">Login</h1>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-5 bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-7"
            onClick={onLoginPress}
          >
            Log in
          </button>
          <br />
          <a
            className="text-white text-center"
            onClick={() => {
              setOpen(true);
            }}
          >
            <span className="text-sm text-shadow text-center hover:cursor-pointer hover:underline">
              Don&apos;t have an account?{" "}
              <span className="text-blue-500">Sign up</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

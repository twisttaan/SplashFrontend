import { useState } from "react";
import { FakePost } from "../mockups";
import { APIPost } from "../types";

export default function Explore() {
  const [posts, setPosts] = useState<APIPost[]>([FakePost]);
  return <div className="h-screen"></div>;
}

import { APIPost, APIUser } from "./types";

export const FakeUser: APIUser = {
  id: "1",
  username: "user1",
  displayName: "User 1",
  createdAt: "2020-01-01",
  staff: false,
  followers: [],
  following: []
};

export const FakePost: APIPost = {
  id: "1",
  imageurl: "https://picsum.photos/id/1/200/200",
  title: "Post 1",
  content: "This is post 1",
  createdAt: "2020-01-01",
  user: FakeUser
};

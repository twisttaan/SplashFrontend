export interface APIUser {
  id: string;
  username: string;
  displayName: string;
  createdAt: string;
  staff: boolean;
  followers: APIUser[];
  following: APIUser[];
}

export interface APIPost {
  id: string;
  imageurl: string;
  title: string;
  content: string;
  createdAt: string;
  user: APIUser;
}

export interface APIMe extends APIUser {
  email: string;
}

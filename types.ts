export interface APIUser {
  id: string;
  username: string;
  displayName: string;
  createdAt: string;
  staff: boolean;
  inviteUsed: string;
  followers: APIUser[];
  following: APIUser[];
}

export interface APIMe extends APIUser {
  email: string;
}

export interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
}

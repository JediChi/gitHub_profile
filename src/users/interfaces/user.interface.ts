export interface IUser {
  id?: number;
  slack_name: string;
  password?: string;
  current_day: string;
  utc_time: string;
  track: string;
  github_file_url: string;
  github_repo_url: string;
}

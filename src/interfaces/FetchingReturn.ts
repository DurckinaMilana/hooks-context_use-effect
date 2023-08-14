import { UserDetails } from "./UserDetails";
import { Users } from "./Users";

export interface FetchingReturn {
  data: Users[] | UserDetails | null,
  loading: boolean,
  error: string
}
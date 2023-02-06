
import type { IUser } from "@/components/Users/User.interface";
import axios from "axios";

axios.defaults["baseURL"] = "https://jsonplaceholder.typicode.com";

export const UserServices = {
  async getAll() {
    try {
      const { data } = await axios.get<IUser[]>("/users");
      return data;
    } catch (e) {
      alert(e);
    }
  },
  async getOne(id: string) {
    try {
      const { data } = await axios.get<IUser>("/users/" + id);
      return data;
    } catch (e) {
      alert(e);
    }
  },
};

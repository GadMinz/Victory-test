import type { IUser } from "@/components/Users/User.interface";
import { UserServices } from "@/services/user.service";
import type { ActionContext } from "vuex";
import type { IRootState } from "@/store";

export interface IUsersState {
  all: IUser[];
  current: IUser | null;
  loading: boolean;
}

// initial state
const state: IUsersState = {
  all: [],
  current: null,
  loading: false,
};

// getters
const getters = {};

// actions
const actions = {
  async getUsers({ commit }: ActionContext<IUsersState, IRootState>) {
    commit("setLoading", true);
    const users = await UserServices.getAll();
    commit("setUsers", users);
    commit("setLoading", false);
  }
};

// mutations
const mutations = {
  setUsers(state: IUsersState, payload: IUser[]) {
    state.all = payload;
  },
  setLoading(state: IUsersState, payload: boolean) {
    state.loading = payload;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

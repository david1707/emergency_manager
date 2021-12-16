import { createStore } from "vuex";

import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      if (res) context.commit("updateUser", res.user);
      else throw new Error("Error while registering a new user.");
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
  },
  modules: {},
});

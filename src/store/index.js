import { createStore } from "vuex";

import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      if (res.user.uid) context.commit("updateUser", res.user);
      else throw new Error("Error while registering a new user.");
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      
      if (res.user.uid) context.commit("updateUser", res.user);
      else throw new Error("Error while login.");
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
  },
  modules: {},
});

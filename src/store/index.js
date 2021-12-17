import { createStore } from "vuex";

import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";

export default createStore({
  state: {
    user: null,
    ambulances: [],
    firetrucks: [],
    policecars: [],
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
    async loadVehicle(context, vehicleName) {
      const q = query(collection(db, vehicleName));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const vehicleList = [];
        querySnapshot.forEach((doc) => {
          vehicleList.push({ ...doc.data(), id: doc.id });
        });
        context.commit("updateVehicle", {
          vehicleName: vehicleName,
          vehicleList: vehicleList,
        });
      });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    updateVehicle(state, { vehicleName, vehicleList }) {
      state[vehicleName] = vehicleList;
    },
  },
  modules: {},
});

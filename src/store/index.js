import { createStore } from "vuex";

import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
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
      const vehicleList = [];

      const querySnapshot = await getDocs(collection(db, vehicleName));
      querySnapshot.forEach((doc) =>
      vehicleList.push({ ...doc.data(), id: doc.id })
      );
      context.commit("updateVehicle", {
        vehicleName: vehicleName,
        vehicleList: vehicleList,
      });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    updateVehicle(state, { vehicleName, vehicleList }) {
      console.lo
      state[vehicleName] = vehicleList;
    },
  },
  modules: {},
});

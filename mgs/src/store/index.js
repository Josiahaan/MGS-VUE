import { createStore } from 'vuex'
import Vue from 'vue';
import Swal from "sweetalert2";
import axios from "axios";
let url = " http://159.223.57.121:8090/"

export default createStore({
  state: {
    isLogged: false,
  },
  getters: {
  },
  mutations: {
    CHANGE_ISLOGGED(state, payload) {
      state.isLogged = payload;
    },
    FETCH_ITEM(state, payload) {
      state.itemList = payload;
    },
    FETCH_SUPPLIER(state, payload) {
      state.supplierList = payload;
    }
  },
  actions: {
    async registerHandler(context, payload) {
      try {
        await axios.post(`${url}auth/register`, {
          username: payload.username,
          password: payload.password,
          profileName: payload.profileName,
        }, { headers: {
          "content-type": "application/json"
        }});
        Swal.fire({
          icon: "success",
          title: "Register",
          text: "Register Berhasil!",
        });
        return true
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Register Gagal!",
        });
      }
    },
    async loginHandler({ commit }, payload) {
      try {
        const response = await axios.post(`${url}auth/login`, {
          username: payload.username,
          password: payload.password,
        }, { headers: {
          "content-type": "application/json"
        }});
        // console.log(response)
        let a = response.data
        let b = a.data
        localStorage.setItem("token", b.token);
        localStorage.setItem("username", payload.username);
        commit("CHANGE_ISLOGGED", true);
        Swal.fire({
          icon: "success",
          title: "Login",
          text: `Login Berhasil!`,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Gagal!",
        });
      }
    },
    async fetchAllItems({ commit }) {
      let errorStatus = false;
      let data = [];
      try {
        const response = await axios.get(`${url}barang/find-all?limit=20&offset=1`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          }
        });
        let a = response.data
        let b = a.data
        data = b
        // console.log(data)
      } catch (error) {
        console.log(error)
        errorStatus = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "fetch error",
        });
      }
      finally {
       if(errorStatus === false) {
         commit("FETCH_ITEM", data)
       }
      }
    },
    async fetchAllSuppliers({ commit }) {
      let errorStatus = false;
      let data = [];
      try {
        const response = await axios.get(`${url}supplier/find-all?limit=20&offset=1`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          }
        });
        let a = response.data
        let b = a.data
        data = b
        // console.log(data)
      } catch (error) {
        console.log(error)
        errorStatus = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "fetch error",
        });
      }
      finally {
       if(errorStatus === false) {
         commit("FETCH_SUPPLIER", data)
       }
      }
    },
    async addHandler(context, payload) {
      console.log(payload)
      try {
        await axios.post(`${url}barang/create`, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "content-type": "application/json"
          }
        })
        Swal.fire({
          icon: "success",
          title: "Add Item",
          text: `Add Berhasil!`,
        });
      } catch(error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "ADD GAGAL",
        });
      }
    },
    async editHandler(context, payload) {
      try {
        await axios.put(`${url}barang/update/${payload.id}`, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "content-type": "application/json"
          }
        })
        Swal.fire({
          icon: "success",
          title: "Edit Item",
          text: `Edit Berhasil!`,
        });
      } catch(error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "EDIT GAGAL",
        });
      }
    },
    async delete(context, payload) {
      // console.log(payload);
      try {
        await axios.delete(`${url}barang/delete/${payload.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "content-type": "application/json"
          }         
        })
        Swal.fire({
          icon: "success",
          title: "Delete",
          text: `Delete Berhasil!`,
        });
      } catch(error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "DELETE GAGAL",
        });
      }
    }
  },
  modules: {
  }
})

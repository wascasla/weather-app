import api from "./api";

export default {
  getDevices(params) {
    return api.get(`current/`);
  },
};

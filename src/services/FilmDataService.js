import http from "../http-common";

class FilmDataService {
  getAll() {
    return http.get("/films");
  }

  get(id) {
    return http.get(`/films/${id}`);
  }

  create(data) {
    return http.post("/films", data);
  }

  update(id, data) {
    return http.put(`/films/${id}`, data);
  }

  delete(id) {
    return http.delete(`/films/${id}`);
  }

  deleteAll() {
    return http.delete(`/films`);
  }

  findByName(name) {
    return http.get(`/films?name=${name}`);
  }
}

export default new FilmDataService();
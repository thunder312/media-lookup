import http from "../http-common";

class RatingDataService {
  getAll() {
    return http.get("/ratings");
  }

  get(id) {
    return http.get(`/ratings/${id}`);
  }

  create(data) {
    return http.post("/ratings", data);
  }

  update(id, data) {
    return http.put(`/ratings/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ratings/${id}`);
  }

  deleteAll() {
    return http.delete(`/ratings`);
  }

  findByName(name) {
    return http.get(`/ratings?name=${name}`);
  }
}

export default new RatingDataService();
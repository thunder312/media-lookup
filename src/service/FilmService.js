import http from ".Http-comman";  
class FilmService {  
     
    getAll() {  
        return http.get("/api/FilmInfo/Getfilminfo");  
      }  
        
}  
export default new FilmService();  
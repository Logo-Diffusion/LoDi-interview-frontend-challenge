import Axios from "../lib/axiosInterceptor";

class TutorialDataService {
    create(data) {
        return Axios.post("/questionnaire/", data);
    }
    get(id) {
        return Axios.get(`/questionnaire/${id}/`);
    }
}

export default new TutorialDataService();

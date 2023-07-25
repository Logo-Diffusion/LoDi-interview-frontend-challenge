import QuestionnaireModal from "./components/QuestionnaireModal";
import { Provider } from "react-redux";
import store from "./lib/store";

localStorage.setItem("user", "mkt@narola.email"); // Set user here

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <QuestionnaireModal />
            </div>
        </Provider>
    );
}

export default App;

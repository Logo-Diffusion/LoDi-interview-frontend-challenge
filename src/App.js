import QuestionnaireModal from './components/QuestionnaireModal'

localStorage.setItem('user', 'example@gmail.com') // Set user here

function App() {
  return (
    <div className="App">
      <QuestionnaireModal />
    </div>
  );
}

export default App;

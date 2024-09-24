

import React from 'react';

import setupInterceptors from './utils/axiosInterceptors';


import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllQuestionsPage from "./components/Viewers/AllQuestionsPage";
import ExamCreationForm from "./components/Forms/ExamCreationForm";
import QuestionBank from "./components/Viewers/QuestionBank";


function App() {
  const App: React.FC = () => {
    React.useEffect(() => {
      setupInterceptors();
    }, []);
  
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={ExamCreationForm} />
          <Route path="/all-questions" component={AllQuestionsPage} />
          <Route path="/question-bank" component={QuestionBank} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

import './App.css';

import Student from './Student/Student';

   const students = [
    {
      "name": "Prajakta",
      "roll": "1",
      "mobile": "9674352321",
      "isRegular": true
    },
    {
      "name": "Suraj",
      "roll": "2",
      "mobile": "9674352321",
      "isRegular": false
    },
    {
      "name": "Vaishnavi",
      "roll": "3",
      "mobile": "9674352321",
      "isRegular": true
    },
    {
      "name": "Anand",
      "roll": "4",
      "mobile": "9674352321",
      "isRegular": false
    }
  ]
  function App() {
  return (
    <>
     {
       students.map((student, index) => {
         return (<Student key={index} student={student}/>);
       })
     }
     
    </>
  );
}

export default App;

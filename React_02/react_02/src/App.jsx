
// component ? => function

import Person from "./components/Person";

//component = fn that returns JSX 
function App(){
  return (
    <div className="bg-blue-600 text-2xl border-2">
      {/* <h1>Hello Samarth Vohra</h1>
      <h1>Hello Code Baithak</h1> */}
      <Person />
    </div>
  )
}

export default App;






import Person from "./components/Person";
import Product from "./components/Product";

function App(){
  return(
    <div>
      {/* <Person name="Samarth" age={21} color="blue" gender={true} />
      <Person name="Code Baithak" age={1} color="orange" gender={true} />
      <Person name="Maverick" age={4} color="brown" gender={false} /> */}
      <Product name="Jhadu" price={100} desc="badiya se pitai pakki" img="https://images.unsplash.com/photo-1705951442994-1e3533a15058?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb29tfGVufDB8fDB8fHww"  />
    </div>
  )
}

export default App;
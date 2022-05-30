import logo from './logo.svg';
import './App.css';


function SecretComponent() {
  return <h1>Super secret information only for the authorized users</h1>;
}

function RegularComponent() {
  return <h1>Regular information for all the users</h1>;
}
function App({ authorized }) {
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;

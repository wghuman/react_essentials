import logo from './logo.svg';
import './App.css';
import burgerImage from "./burger.svg";





function Header(props){
  return(
<header>
<h1> {props.name} Sverige </h1>
</header>
  );
}

function Main(props){
  
  return(
    <section>
      <p> We deliver the products with {props.adjective} and service in mind</p>
      <img src = {burgerImage} height={200}/>
      <ul>
      {props.services.map((service) => 
      <li key={service.id}>
        {service.title}

      </li>)}
      </ul>
    </section>
  );
}

function Footer(props){
  return(
    <footer>Copyrights {props.year}</footer>
  );
}

const services = [
  "Home Delivery",
  "Home Delivery and montering",
  "Home Delivery, montering and emblage",
  "Home Delivyer, montering, emblage and old furniture",
  "and more",
  "what else"
]

const serviceObjects = services.map((service, i) => ({id: i, title: service})) 
//console.log(serviceObjects);

//services.map((service) => console.log(service));


//services.map( (service) => console.log(service))
function App() {
  return (
    <div className="App">
      <Header name="Mittra"/>
      <Main adjective="quality" services={serviceObjects}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;

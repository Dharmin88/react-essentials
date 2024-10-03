// import logo from './logo.svg';
import './App.css';
import coreConcepts from './assets/react-core-concepts.png';

import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';


const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {

  const description = reactDescription[getRandomInt(2)];
  
  return (
    <header>
      <img src={coreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title="Components" 
              description="The core YI building block."
              image={componentsImg}
            />
            <CoreConcept 
              title="Props"
              description=""
              image={propsImg}
            />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

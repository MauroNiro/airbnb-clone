import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'

function App() {
  const dataprop = data.map(item => {
    return (<Card
      key={item.key}
      {...item}
    />)
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className='cards-list'>
        {dataprop}
      </section>


    </div>
  );
}

export default App;

import grid from '../images/grid-foto.png'

export default function Hero() {
    return (
        <section className='hero-section'>
            <img src={grid} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
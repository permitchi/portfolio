import Carousel from './carousel';

function About() {
  return (
    <section id="About" className="relative h-screen snap-start flex items-center justify-center carousel-bg">
      <div className="text-center px-4 max-w-4xl">
        <h1 className='mt-20 font-bold'>About Me</h1>
        <Carousel />
      </div>
    </section>
    ); 
}

export default About;
import './components.css'

function Hero() {
  return (
  <><div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide overflow-x-hidden">
    <div id="Hero"  class="bg-radial from-lime-100 to-[var(--seagrass)] to-90% relative h-screen w-full snap-start flex items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed">        
      
      <div className='flex items-center justify-center'>
        <div className="ml-20 max-w-130 gap-6 flex flex-col">
          <h1 className='font-semibold'>A <span style={{ color:'white'}}>junior developer</span> with a knack for arts</h1>
        <p className=''>Hello! My name is <span style={{ color:'white'}}>Micka Vallery</span> and I'm a computer science student in Indonesia. Aside from that I do other art related stuff and aspire to create my own game one day!</p>

        {/* <div className="mt-8 flex gap-8">
          <button>Download CV</button>
          <button>See my work</button>
        </div> */}
        </div>

        <div className='mx-20 h-full'>
          <img src='/white-tri.png' className='flex items-center' />
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Hero;
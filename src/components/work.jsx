function Work() {
  const workItems = [
    { title: 'Craft Cycle', 
      imgUrl: 'dist/craftcyclee.png',
      description: 'A catalog website for my small business that sells handmade crafts.',
      tags: ['HTML', 'CSS', 'JavaScript', 'JSON'],
      link: 'https://github.com/craftcyclee/craftcyclee.github.io', 
      addLink: 'https://craftcyclee.github.io'
    },
    { title: 'Minaci Accesorries', 
      imgUrl: 'dist/minaci.jpeg',
      description: 'A personal character sheet web app for Dungeons and Dragonns.',
      tags: ['Laravel', 'React', 'Tailwind CSS'],
      link: 'https://github.com/permitchi/RPLism'
    },
    { title: 'BattleSweeper', 
      imgUrl: 'dist/godot.jpg',
      description: 'A WIP game that combines BattleShips and Mindsweeper.',
      tags: ['Godot', 'GDScript', 'Pixel Art'],
      link: 'https://github.com/permitchi/BattleSweeper' 
    },
  ]

  return (
    <section id="Work" className="relative h-screen w-full flex items-center justify-center">
      <div>
        <h1 className='p-4 text-center font-semibold'>My Work</h1>

        <div className="flex gap-12 text-center p-4 flex-wrap">
          {workItems.map((item, index) => (
            <div key={index} className="flex-col work-card p-4 shadow-xl rounded-lg gap-2 ">
              <div className="flex items-center justify-center">
                <img src={item.imgUrl} className="h-36" />
              </div>

              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-m font-thin">{item.description}</p>
              
              <div className="flex gap-2 flex-wrap">
                {(item.tags || []).map((tag, i) => (
                  <span key={i} className="text-xs italic px-2 py-1 rounded-md bg-lime-100/20 hover:text-lime-100 border bg-lime-100/40">
                    {tag}
                  </span>

                ))}
              </div>

              <div className="flex gap-3 items-center mt-auto">  
                <a href={item.link} target="_blank" className="text-black border-black rounded-md p-2 w-40 bg-lime-100 shadow-md hover:bg-lime-300 transition-all">Go to Project ›</a>
                {item.addLink && (
                  <a href={item.addLink} target="_blank" title="Visit website">
                    <img src="/web.svg" className="mx-4 w-10 h-10 invert" />
                  </a>
                )}
              </div>
              </div>
          ))}
        </div>
      </div>
      
      
    </section>
  );
}

export default Work;
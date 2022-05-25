import img from '../public/assets/images/react.png';
import { useState } from 'react';
import Modal from './app/Modal';
function Projects() {
  const [isOpen, setOpen] = useState(true);
  const [project, setProject] = useState(null);
  const githubAcc = 'https://github.com/olegas-sev/';
  const data = [
    {
      title: 'Wiki League',
      slug: 'wiki-league',
      color: 'bg-red-600',

      technologies: [
        'Vue 3',
        'Composition API',
        'Javascript',
        'Tailwind',
        'External Libraries',
      ],
      description:
        "One of the recent projects I've been working with. I enjoy a game called League of Legends therefore decided to make a web application about it using their API.\nI used Vue 3 and Composition API here to gain knowledge about it since I've worked only with Vue 2 and options API before.",
      img: '/assets/images/projects/wiki-league-cover.png',
      imgs: [
        '/assets/images/projects/wiki-league-1.png',
        '/assets/images/projects/wiki-league-2.png',
      ],
      github: githubAcc + 'wiki-league',
      demo: 'https://wiki-lol.vercel.app',
    },
    {
      title: 'Money CRM',
      slug: 'money-crm',
      color: 'bg-[#F7BF4F]',
      technologies: ['Vue 3', 'Javascript', 'Firebase', 'External Libraries'],
      description:
        "A hard project I've built for my last year in NTI High School, my goal was to learn Vue and its features.\nThe application was built with Vue 2 and makes it easy for you to take care of your economy/finances.",
      img: '/assets/images/projects/money-crm-cover.png',
      imgs: [
        '/assets/images/projects/money-crm-1.png',
        '/assets/images/projects/money-crm-2.png',
      ],
      github: githubAcc + 'money-crm',
      demo: 'https://money-crm.vercel.app',
    },
    {
      title: 'Natours',
      slug: 'natours',
      color: 'bg-gray-100',
      technologies: ['Express.js', 'MongoDB', 'Mongoose', 'External Libraries'],
      description:
        "One of the harder projects I've built, it included working with databases, geospatial data and authentication.\nI've built a RESTful API using Express.js and MongoDB. I've also used pug templating engine to render some views and showcase the API.",
      img: '/assets/images/projects/natours-cover.png',
      imgs: [
        '/assets/images/projects/natours-1.png',
        '/assets/images/projects/natours-2.png',
      ],
      github: githubAcc + 'natours',
      demo: '',
    },
    {
      title: 'Forkify',
      slug: 'forkify',
      color: 'bg-gray-100',
      technologies: ['Javascript', 'External Libraries'],
      description:
        'Purely front end project, built with Vanilla JavaScript.\nI followed MVC architecture patterns to build this application and its about searching recipes over 1000 recipes adding your own ones and saving the ones you need.',
      img: '/assets/images/projects/forkify-cover.png',
      imgs: [
        '/assets/images/projects/forkify-1.png',
        '/assets/images/projects/forkify-2.png',
      ],
      github: githubAcc + 'forkify',
      demo: 'https://forkify-olegas-sev.netlify.app',
    },
  ];

  const modalHandler = (projectObj) => {
    setOpen(true);
    setProject(projectObj);
  };
  return (
    <section className="section-padding">
      <div className="container-default">
        <div className="mb-10">
          <h2 className="section-title">Projects</h2>
        </div>

        {/* <div className="mb-8">
                    <h2 className="section-title">Vanila</h2>
                    <div className="flex flex-row justify-between">
                        <div className="w-1/2">
                            <img src={img.src} alt="" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="section-title">Title</h1>
                            <h3 className="section-subtitle">Type</h3>
                            <p className="">Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam labore delectus rerum quia, rem a deleniti minima dolorem iusto inventore.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="section-title">React</h2>
                    <div className="h-48 w-48 bg-gray-500"></div>
                </div>
                <div className="mb-8">
                    <h2 className="section-title">Vue</h2>
                    <div className="h-48 w-48 bg-gray-500"></div>
                </div> */}
        <div className="grid  sm:grid-cols-2 gap-5">
          {/* Loop over project list */}
          {data.map((project, i) => (
            <div key={i} className="project-block col-span-1 rounded-md">
              <div>
                <div
                  className={
                    'flex justify-center items-center h-52 rounded-md cursor-pointer overflow-hidden ' +
                    project.color
                  }
                  onClick={() => modalHandler(project)}
                >
                  <img
                    className="max-h-48 max-w-[80%] scale-95 hover:scale-105 transition ease-out duration-300 "
                    src={project.img}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If project state exists */}
        {project ? (
          <Modal
            isOpen={isOpen}
            close={() => setOpen(false)}
            setOpen={setOpen}
            project={project}
            key={project.title}
          ></Modal>
        ) : null}
      </div>
    </section>
  );
}

export default Projects;

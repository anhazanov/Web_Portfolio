import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    fiver,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    django,
    djangorest,
    python,
    postgresql,
    celery,
    redis,
    crm,
    deepfake,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Django Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "DjangoRest",
      icon: djangorest,
    },
     {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Celery",
      icon: celery,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Redis",
      icon: redis,
    },    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "PosgreSQL",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Freelance",
      company_name: "Fiver, Upwork",
      icon: fiver,
      iconBg: "#383E56",
      date: "November 2021 - April 2022",
      points: [
        "Data scraping using Queries libraries, Beautifulsoup, Selenium.",
        "Creating telegram bots using the Aiogramm library.",
      ],
    },
    {
      title: "Python / Full Stack Developer",
      company_name: "Profit Info",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Present ",
      points: [
        "Creating a backend of web application using Django Framework.",
        "Creating API services using Django Rest Framework.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Creating models using Machine Learning.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Service for creating DeepFake videos",
      description:
        "The basic was an open source project. The task was to create a project that was as easy to use as possible. Therefore, I had to partialy rewrite the model training code. To understand how the program works, I stuied Machine Learning theory. I used Django to manage the model training. Additionally, I used ffmpeg-python, and OpenCV fo video processing. To create task queues, I used Celery + Redis.",
      tags: [
        {
          name: "django",
          color: "pink-text-gradient",
        },
        {
          name: "jQuery",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },        
      ],
      image: deepfake,
      source_code_link: "https://github.com/anhazanov/DeepFake_videocreate",
    },
    {
      name: "CRM system",
      description:
        "A web application that runs as a CRM system. The service communicates with several external services via APIs, allows you to register domains, add data to the system and get statistics on the results of activities. It is planned to implement an internal chat room.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "djangorestapi",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
      ],
      image: crm,
      source_code_link: "https://github.com/anhazanov/API_tasks",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
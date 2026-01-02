export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "References", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I focus on learning and continuous improvement. Teamwork and open communication are essential for success.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/computer.avif",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am available to work remotely in different time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am continually learning to improve my:",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for data analysis.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a full-stack React Native Uber Clone Application",
    description: "What's new?",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's connect and collaborate on exciting projects together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Airbnb Listings Data Analysis",
    des: "Explore data to understand pricing, demand, and neighbourhood trends.",
    img: "/project1.png",
    iconLists: ["/python.png", "/pandas.png", "/matplotlib.png", "/seaborn.png", "/colab.png"],
    link: "https://colab.research.google.com/drive/1Hi8XXk1GVdXN4R78jDY3f2KZgaQLjjQz?authuser=1",
  },
  {
    id: 3,
    title: "Diabetes Prediction AI Model",
    des: "Predicts diabetes from patient data: 77% accurate! (Python + Scikit-learn)",
    img: "/project3.png",
    iconLists: ["/python.png", "/pandas.png", "/numpy.png", "/scikitlearn.png", "/colab.png"],
    link: "https://colab.research.google.com/drive/1dMibLTpflEFi5h0HPg2onee4DaET0QJ9?authuser=1#scrollTo=IhG9vN5mhCli",
  },
  {
    id: 4,
    title: "Gold Price Prediction AI Model",
    des: "Forecasts GLD prices from market data 98% R² accuracy w/ Random Forest",
    img: "/project4.png",
    iconLists: ["/python.png", "/pandas.png","/numpy.png", "/matplotlib.png", "/seaborn.png", "/scikitlearn.png"],
    link: "https://colab.research.google.com/drive/1yEbTnvRKcr6HgyBFbgLOESkB-SYXM_EM?authuser=1#scrollTo=dK-IhyMYBiqB",
  },
  {
    id: 5,
    title: "Marathon Running Data Analysis",
    des: "Analyzed ultra-marathon speeds by age, gender, season",
    img: "/project5.png",
    iconLists: ["/python.png", "/pandas.png","/numpy.png", "/matplotlib.png", "/seaborn.png", "/scipy.png"],
    link: "https://colab.research.google.com/drive/1G-fN6EwIXIJuQK-ECDRe3mx67HP7lXHv?authuser=1",
  },
  
  
];

export const testimonials = [
  {
    quote:
      "Working alongside Carla has always been inspiring. She bring a unique blend of creativity and precision to every project, and her willingness to take on new challenges is truly admirable. Even in high-pressure situations, Carla remained calm, communicated clearly, and supported the team. I am excited to see her pursue a career in data analysis. I am confident that her strong work ethic and passion for learning will lead to great success in this new field. Anyone would be fortunate to have Carla on their team.",
    name: "Nicolas Schiaffino",
    title: "Project and Construction engineer",
    img: "/profile1.jpg", 
  },
  {
    quote:
      "I've had the pleasure of working with Carla on several civil engineering projects, and I can confidently say that her analytical thinking and dedication to problem-solving are second to none. Carla consistently demonstrated a strong ability to learn new concepts quickly and adapt to changing project requirements. I have no doubt that these qualities, combined with their collaborative spirit and attention to detail, will make her an excellent data analyst. I wholeheartedly support her transition into the tech industry.",
    name: "Sandra Albiol",
    title: "Project and Construction engineer",
    img: "/profile2.jpg", 
  },
  {
    quote:
      "I have had the privilege of working with Carla on multiple projects throughout college, always with a very good disposition and discipline, providing innovative solutions to different projects. Carla consistently demonstrated strong leadership skills and a collaborative spirit, making her an invaluable member of any team. Her attention to detail and ability to adapt to new challenges ensured the success of our projects, even under tight deadlines. I am confident that she will continue to excel and make significant contributions in her future endeavors.",
    name: "Sebastian Virdo",
    title: "Project and Construction engineer",
    img: "/profile3.jpg", 
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Higher Diploma in Science in Computing (Software Development)",
    desc: "National College of Ireland, Dublin, Ireland",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
    link: "https://www.ncirl.ie/",
  },
  {
    id: 2,
    title: "The Odin Project Bootcamp",
    desc: "Self-directed online learning",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.png",
    link: "https://www.theodinproject.com/",
  },
  {
    id: 3,
    title: "Specialization in Management Engineering (MBA)",
    desc: "National Technological University, Mendoza, Argentina",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.png",
    link: "https://www.utn.edu.ar/es/",
  },
  {
    id: 4,
    title: "Civil Engineer",
    desc: "National University of Cuyo, Mendoza, Argentina",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
    link: "https://www.uncuyo.edu.ar/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/carla58-58?tab=repositories",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/carla-brenda-tasinazzo-albiol-147783169/",
  },
];

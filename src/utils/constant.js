const walaundry = import.meta.glob(
  '../assets/images/my-projects/walaundry/*.png',
  {
    eager: true,
  }
);
const lancangkuning = import.meta.glob(
  '../assets/images/my-projects/lancangkuning/*.png',
  {
    eager: true,
  }
);
const echowallig = import.meta.glob(
  '../assets/images/my-projects/echowallig/*.png',
  {
    eager: true,
  }
);
const sismara = import.meta.glob('../assets/images/my-projects/sismara/*.png', {
  eager: true,
});
const buszilla = import.meta.glob(
  '../assets/images/my-projects/buszilla/*.png',
  {
    eager: true,
  }
);
const sipeje = import.meta.glob('../assets/images/my-projects/sipeje/*.png', {
  eager: true,
});

const walaundryImgs = Object.values(walaundry).map((img) => img.default);
const lancangkuningImgs = Object.values(lancangkuning).map(
  (img) => img.default
);
const echowalligImgs = Object.values(echowallig).map((img) => img.default);
const sismaraImgs = Object.values(sismara).map((img) => img.default);
const sipejeImgs = Object.values(sipeje).map((img) => img.default);
const buszillaImgs = Object.values(buszilla).map((img) => img.default);

export const menus = [
  { name: 'Introduction', href: '#introduction' },
  { name: 'Projects', href: '#my-projects' },
  { name: 'Skills', href: '#my-skills' },
  // {
  //   name: 'Services',
  //   href: '#',
  //   menus: [
  //     { name: 'Service 1', href: '#' },
  //     { name: 'Service 2', href: '#' },
  //     { name: 'Service 3', href: '#' },
  //   ],
  // },
];
export const projects = [
  {
    name: 'Walaundry',
    image: walaundryImgs,
    desc: 'A web app for managing laundry businesses, built with React.js, Express.js, and MongoDB during my internship at PT Garuda Cyber Indonesia.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Bootstrap'],
  },
  {
    name: 'lancangkuning.com',
    image: lancangkuningImgs,
    desc: 'An information platform for the Nusantara community. I worked as a frontend developer using Nuxt.js and Bootstrap during the Kampus Merdeka internship.',
    stack: ['Nuxt.js', 'Bootstrap', 'OpenAPI'],
  },
  {
    name: 'EchoWallIG',
    image: echowalligImgs,
    desc: 'A web app for tracking Instagram activity, from unfollowers to blocked accounts, all in one place. Built with Vue.js and Tailwind CSS for a smooth user experience.',
    stack: ['Vue.js', 'Tailwind CSS'],
  },
  {
    name: 'Sismara',
    image: sismaraImgs,
    desc: 'An event portal and management system for the Faculty of Engineering at Universitas Islam Riau. Built with Next.js, Tailwind CSS, Material UI, and Firebase for seamless event organization.',
    stack: ['Next.js', 'Tailwind CSS', 'Material UI', 'Firebase'],
  },
  {
    name: 'Si Peje',
    image: sipejeImgs,
    desc: 'A scheduling system for meal responsibilities. Built with React.js and styled with Tailwind CSS, I focused on frontend development.',
    stack: ['React.js', 'Tailwind CSS', 'Express.js', 'MySQL'],
  },
  {
    name: 'Buszilla - Ticket Booking',
    image: buszillaImgs,
    desc: 'A bus ticket booking app built with React.js and Material UI, featuring Google OAuth for secure authentication.',
    stack: ['React.js', 'Material UI', 'Google OAuth'],
  },
];

export const skills = [
  {
    name: 'html',
    image: 'https://api.iconify.design/ci:file-html.svg',
    class: 'w-[11%] absolute top-[12%] left-[45%]',
  },
  {
    name: 'css',
    image: 'https://api.iconify.design/ci:file-css.svg',
    class: 'w-[11%] absolute top-[11%] left-[69.5%]',
  },
  {
    name: 'nodejs',
    image: 'https://api.iconify.design/bx:bxl-nodejs.svg',
    class: 'w-[6.9%] absolute top-[12.5%] sm:left-[89.3%] left-[89.3%]',
  },
  {
    name: 'javascript',
    image: 'https://api.iconify.design/mdi:language-javascript.svg',
    class: 'w-[11%] absolute top-[34%] left-[7.8%]',
  },
  {
    name: 'typescript',
    image: 'https://api.iconify.design/mdi:language-typescript.svg',
    class: 'w-[11%] absolute top-[49%] left-[7.8%]',
  },
  {
    name: 'reactjs',
    image: 'https://api.iconify.design/ri:reactjs-fill.svg',
    class: 'w-[14%] absolute top-[36%] left-[26.8%]',
  },
  {
    name: 'vuejs',
    image: 'https://api.iconify.design/iconoir:vue-js.svg',
    class: 'w-[11%] absolute top-[45%] left-[47.8%]',
  },
  {
    name: 'nextjs',
    image: 'https://api.iconify.design/tabler:brand-nextjs.svg',
    class: 'w-[15%] absolute top-[38.7%] left-[66.8%]',
  },
  {
    name: 'mysql',
    image: 'https://api.iconify.design/devicon-plain:mysql.svg',
    class: 'w-[8%] absolute top-[44%] left-[87.7%]',
  },
  {
    name: 'nuxtjs',
    image: 'https://api.iconify.design/cib:nuxt-js.svg',
    class: 'w-[11%] absolute top-[76%] left-[13%]',
  },
  {
    name: 'git',
    image: 'https://api.iconify.design/bi:git.svg',
    class: 'w-[14%] absolute top-[74%] left-[45.2%]',
  },
  {
    name: 'mongodb',
    image: 'https://api.iconify.design/teenyicons:mongodb-outline.svg',
    class: 'w-[8%] absolute top-[71%] left-[74%]',
  },
  {
    name: 'expressjs',
    image: 'https://api.iconify.design/lineicons:expressjs.svg',
    class: 'w-[9%] absolute top-[83%] left-[86%]',
  },
];

export const socials = [
  {
    name: 'Github',
    href: 'https://github.com/Waal28',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/wal-husna-faizul-18aa73179',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/waal_28',
  },
];

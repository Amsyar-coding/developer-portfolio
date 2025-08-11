export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Minecraft Clone',
    description: 'A near 1:1 clone of an early alpha build of the famous game Minecraft, entirely in Python. Able to import base 36 maps from the alpha and with added functionality such as user teleportation, to aid world traversal.',
    technologies: ['Python', "OpenGL"],
    image: 'https://i.imgur.com/AvAtr.jpeg?w=800&q=80',
    githubUrl: 'https://github.com/Amsyar-coding/minecraft-clone',
    featured: true
  },
  {
    id: '2',
    title: 'JLox Interpreter',
    description: 'A basic interpreter based off the Lox Language.',
    technologies: ['Java'],
    image: 'https://www.open.edu.au/-/media/blog/2023/10-october/learn-how-to-code.jpg?h=477&iar=0&w=715&rev=27fd8b9e501e49bd9722ac012f5336ce&hash=04367A2B2E4D8A637C76FBEB4DEDBF9A?w=800&q=80',
    githubUrl: 'https://www.youtube.com/watch?v=twC-qa7xdSA',
    featured: true
  },
  {
    id: '3',
    title: 'C interpreter',
    description: 'A more comprehensive and in depth form of the JLox interpreter with added QOL changes.',
    technologies: ['C'],
    image: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=800&q=80',
    githubUrl: 'https://www.youtube.com/watch?v=twC-qa7xdSA',
    featured: false
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    githubUrl: 'https://github.com/Amsyar-coding/developer-portfolio',
    featured: true
  }
];

export const skills = [
  'Java',
  'TypeScript',
  'React',
  'Python',
  'C',
  'JUnit',
  'TailwindCSS',
  'Git',
];
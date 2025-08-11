import MazesImg from "../assets/mazes.png";
import FlickrImg from "../assets/flickr.png";
// Add more imports as needed for other project images

export const projects = [
  {
    title: "Maze Generator and Solver",
    image: MazesImg,
    description: "Mazes is a maze generation application that runs in a jar file.",
    techStack: ["Java", "Gradle"],
    github: "https://github.com/ctanakaa/mazes",
    demo: "#",
    challenges: "Describe a key challenge and how you solved it.",
  },
  {
    title: "Flickr Sentiment Analysis",
    image: FlickrImg,
    description: "Used the Flickr api to pull comment meta data and python to generate insights.",
    techStack: ["Python", "Netlify"],
    github: "https://github.com/ctanakaa/Flickr-Sent",
    demo: "https://info492-jkqbbxtg3tfkvuappfbran.streamlit.app/",
    challenges: "Describe a key challenge and how you solved it.",
  },
  {
    title: "Lightrail Parking Project",
    image: "https://via.placeholder.com/400x200?text=Project+Three",
    description: "A project that uses AWS and google mapsto create a parking tracking system for light rail stations in the greater Seattle Area.",
    techStack: ["Typescript", "AWS", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-three",
    demo: "#",
    challenges: "Describe a key challenge and how you solved it.",
  },
  {
    title: "Commuter Companion",
    image: "https://via.placeholder.com/400x200?text=Project+Four",
    description: "A design project focused on gamifying commuter experiences and promiting public transportation for UW students.",
    techStack: ["Figma"],
    github: "",
    demo: "https://www.figma.com/proto/ixo0LxNvirSvUv5y8j6QqH/Commuter-Companion?node-id=0-1&t=ypT97LQ4qOngXlWm-1",
  },
  {
    title: "Trail Tales",
    image: "https://via.placeholder.com/400x200?text=Project+Four",
    description: "A web application that allows users to save, share, and discover trails in the greater Seattle area.",
    techStack: ["Javascript", "React", "Firebase", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/ctanakaa/trail-tales",
    demo: "https://www.figma.com/proto/ixo0LxNvirSvUv5y8j6QqH/Commuter-Companion?node-id=0-1&t=ypT97LQ4qOngXlWm-1",
  }
]; 
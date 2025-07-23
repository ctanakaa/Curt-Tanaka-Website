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
    description: "A third project with a unique feature or accomplishment.",
    techStack: ["Typescript", "AWS", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-three",
    demo: "#",
    challenges: "Describe a key challenge and how you solved it.",
  },
]; 
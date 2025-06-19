import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "swiper/css";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "icons/reactjs.svg", language: "ReactJS" },
  { icon: "icons/vite.svg", language: "Vite" },
  { icon: "icons/jest-svgrepo-com.svg", language: "Jest" },
  { icon: "icons/javascript.svg", language: "JavaScript" },
  { icon: "icons/typescript-icon-svgrepo-com.svg", language: "TypeScript" },
  { icon: "icons/tailwind.svg", language: "Tailwind CSS" },
  { icon: "icons/laravel.svg", language: "Laravel" },
  { icon: "icons/nodejs.svg", language: "Node JS" },
  { icon: "icons/express-svgrepo-com.svg", language: "Express JS" },
  { icon: "icons/postgresql-svgrepo-com.svg", language: "PostgreSQL" },
  { icon: "icons/mysql-svgrepo-com.svg", language: "MySQL" },
  { icon: "icons/mongodb.svg", language: "MongoDB" },
  { icon: "icons/vercel.svg", language: "Vercel" },
  { icon: "icons/docker-svgrepo-com.svg", language: "Docker" },
  { icon: "icons/aws-svgrepo-com.svg", language: "AWS" },
];

const projectData = [
  {
    id: "1",
    title: "Stoxify",
    description: "Smart Algorithmic Trading. Automate, Predict, Profit – Powered by AI",
    img:'images/StoxifyLogo.png',
    link:'https://www.stoxify.trade/',
  },
  {
    id: "2",
    title: "Cronos",
    description: "Decentralized application that enables users to create custodial crypto wallets, deposit cryptocurrency, transfer tokens to other wallet addresses, and withdraw funds securely",
    img:'images/cronos.png',
    link:'https://backend-7jop.vercel.app/',
    github:'https://github.com/AliAlYaman/Backend/tree/main/Web3'
  },
  {
    id: "6",
    title: "Chess Game",
    description: "Players can join or create chess rooms and play against each other in real time. This frontend integrates with a WebSocket-powered Express backend and a MongoDB database for live gameplay state synchronization.",
    img:'images/chess.png',
    link:'https://backend-sigma-ashy-77.vercel.app/',
    github:'https://github.com/AliAlYaman/Backend/tree/main/Web-Sockets'
  },
  {
    id: "3",
    title: "Wisebet",
    description: "An AI-powered sports betting predictor that analyzes real-time data and historical trends to deliver high-probability picks with 72% proven accuracy.",
    img:'images/wisebet.png',
    link:'https://wisebet-frontend.vercel.app/',
    github:'https://github.com/AliAlYaman/Wisebet-Frontend'
  },
  {
    id: "4",
    title: "Estatein",
    description: "A responsive real estate portal built with React and Laravel",
    img:'images/estatein.png',
    link:'https://estatein-frontend.vercel.app/',
    github:'https://github.com/AliAlYaman/Estatein-Frontend'
  },
  {
    id: "5",
    title: "Boxcars",
    description: "A sleek car gallery that elegantly displays vehicle collections with intuitive browsing and instant inquiry capabilities.",
    img:'images/boxcars.png',
    link:'https://boxcars-frontend.vercel.app/',
    github:'https://github.com/AliAlYaman/Boxcars-Frontend'
  }
];

const certificateData = [
  // { name: "Certificate A", issuedBy: "Organization A", year: 2023 },
  // { name: "Certificate B", issuedBy: "Organization B", year: 2024 },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setProjects(projectData);
    setCertificates(certificateData);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s",
                padding: "20px 0",
                margin: "8px",
                borderRadius: "12px",
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
            }}
          >
            <Tab icon={<Code />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <CardProject id={project.id} Img={project.img} Description={project.description} Link={project.link} Title={project.title} githubLink={project.github}/>
            ))}
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((certificate, index) => (
              <Certificate key={index} certificate={certificate} />
            ))}
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStacks.map((stack, index) => (
              <TechStackIcon
                key={index}
                TechStackIcon={stack.icon}
                Language={stack.language}
              />
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

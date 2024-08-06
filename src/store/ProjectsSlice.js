import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;

export const fetchProjects = () => async (dispatch) => {
  // const response = await fetch('https://prantoshb.github.io/Portfolio-Backend/portfolio.json');
  const data = [

    {
      "project_name": "Deivison L. Biography",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/dlbiography.png",
      "description": "O site DHR Company oferece uma biografia detalhada de Deivison Lorenzo, o CEO da DHR Company. Utilizando um layout com elementos modernos seguindo uma leve modificação na paleta de cores atuais da empresa.",
      "source_link": "https://github.com/jsa-eriques/RSM-Mathematics-Exhibition-2022",
      "live_link": "https://prantoshb.github.io/RSM-Mathematics-Exhibition-2022/",
      "tech_stack": ["HTML","CSS","JavaScript"]
    },
  
    {
      "project_name": "Megazap Business v1",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/mz-main2.png",
      "description": "Website completo de uma plataforma de gestão de atendimentos que centraliza a comunicação entre empresas e seus clientes, oferecendo uma solução integrada para otimizar o atendimento ao cliente. Contendo API De Conversão do facebook integrada além de captações de Urchin Tracking Module - UTM",
      "source_link": "https://github.com/PrantoshB/HandyMate-Frontend",
      "live_link": "https://deploy--fabulous-horse-dfd6cb.netlify.app/",
      "tech_stack": ["React","Tailwind","CSS", "Light & Dark Mode"]
    },
  
    {
      "project_name": "Megazap Business Franquias v1",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/mz-franquias.png",
      "description": "O site oferece venda de franquia da plataforma megazap para ajudar as empresas a implementarem chatbots e outras ferramentas de automação de atendimento, visando tornar a comunicação com os clientes mais eficiente e personalizada​.",
      "source_link": "https://github.com/jsa-eriques/Food-On-Rails",
      "live_link": "https://food-on-rail.onrender.com/",
      "tech_stack": ["React","Tailwind","CSS"]
    },

    {
      "project_name": "DHR Company",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/dhrcompany.png",
      "description": "Site de biografia contando a historia do CEO da Megazap.",
      "source_link": "https://github.com/jsa-eriques/Space-Tourism",
      "live_link": "https://jsa-eriques.github.io/Space-Tourism/",
      "tech_stack": ["HTML","CSS","JavaScript","JSON","Figma"]
    },
  
    {
      "project_name": "Monito Pet Store",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/mz-option-2.0.png",
      "description": "Monito Pet Store is an e-commerce store for pets and pet-items.",
      "source_link": "N/A",
      "live_link": "N/A",
      "tech_stack": ["Vite + React","Ruby on Rails","SCSS"]
    },
  
    {
      "project_name": "Know Your Buddies",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/kyb.png",
      "description": "A web application where users can check if someone whom they are following on GitHub is following them back or not. It uses GitHub API to fetch data.",
      "source_link": "https://prantoshb.github.io/Know-Your-Buddies",
      "live_link": "https://prantoshb.github.io/Know-Your-Buddies",
      "tech_stack": ["React","CSS","JavaScript","GitHub API"]
    },
  
    {
      "project_name": "Adidas Clone",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/adidas.png",
      "description": "A design clone of the Adidas website. Static website built with React and CSS.",
      "source_link": "N/A",
      "live_link": "N/A",
      "tech_stack": ["React","CSS","JavaScript"]
    },
  
    {
      "project_name": "PVR Mobile App",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/pvr.png",
      "description": "A mobile application to book movie tickets. It has stripe payment gateway for online transactions. It also has a QR code scanner to scan the ticket.",
      "source_link": "https://github.com/PrantoshB/PVR-React-Native",
      "live_link": "https://github.com/PrantoshB/PVR-React-Native",
      "tech_stack": ["React Native","Express","Firebase","Stripe"]
    },
  
    {
      "project_name": "Envira Direct",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/envira-direct.png",
      "description": "Envira Direct is a leading supplier of water treatment systems and components for the residential, commercial, and industrial markets. It uses stripe split payment method for online transactions.",
      "source_link": "N/A",
      "live_link": "N/A",
      "tech_stack": ["WordPress","CSS","JavaScript","Woocommerce","Stripe"]
    },
  
    {
      "project_name": "BMI Calculator",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/bmi.png",
      "description": "A web application to calculate BMI. It uses the BMI formula to calculate the BMI.",
      "source_link": "https://github.com/PrantoshB/BMI-Calculator",
      "live_link": "https://github.com/PrantoshB/BMI-Calculator",
      "tech_stack": ["Flutter","Dart"]
    },
  
    {
      "project_name": "PokéDex",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/pokedex.png",
      "description": "A web application to get information about Pokémons. It uses PokéAPI to fetch data.",
      "source_link": "https://github.com/PrantoshB/JavaScript-Capstone",
      "live_link": "https://prantoshb.github.io/JavaScript-Capstone/dist/",
      "tech_stack": ["HTML","CSS","JavaScript","Webpack","Jest","PokéAPI"]
    },
  
    {
      "project_name": "CRP Academy",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/crp.png",
      "description": "CRP Academy is a mobile application for a popular edtech company. It has live class, live chat with instructors, Inbuilt video player and PDF reader and many more features.",
      "source_link": "N/A",
      "live_link": "N/A",
      "tech_stack": ["Flutter","Dart","Firebase","YouTube API","OpenSignal API"]
    },
  
    {
      "project_name": "FixOn",
      "image_url": "https://prantoshb.github.io/Portfolio-Backend/assets/fixon.png",
      "description": "FixOn is a mobile application for a startup company. It is a platform where users can book services like plumbing, electrician, carpenter, etc. It has Razorpay payment gateway for online transactions.",
      "source_link": "N/A",
      "live_link": "N/A",
      "tech_stack": ["Flutter","Dart","Firebase","Razorpay"]
    }
  
]
  dispatch(setProjects(data));
};

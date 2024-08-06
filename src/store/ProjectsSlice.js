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
      "description": "Este site é um dos braços do site da DHR Company que nessa rota oferece uma biografia detalhada de Deivison Lorenzo, o CEO da DHR Company. Utilizando um layout com elementos modernos seguindo uma leve modificação na paleta de cores atuais da empresa.",
      "source_link": "https://github.com/jsa-eriques/deivison-lorenzo-biography",
      "live_link": "https://dhrcompany.com.br/dlbiography",
      "tech_stack": ["React","Tailwind","JavaScript"]
    },
  
    {
      "project_name": "Megazap Business (Hot Site v1)",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/mz-main2.png",
      "description": "Website completo de uma plataforma de gestão de atendimentos que centraliza a comunicação entre empresas e seus clientes, oferecendo uma solução integrada para otimizar o atendimento ao cliente. Contendo API De Conversão do facebook integrada além de captações de Urchin Tracking Module - UTM",
      "source_link": "https://github.com/jsa-eriques/ads-pixel-test",
      "live_link": "https://ads-pixel-test.vercel.app/",
      "tech_stack": ["React","Tailwind","CSS", "Light & Dark Mode"]
    },
  
    {
      "project_name": "Megazap Business Franquias v1",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/mz-franquias.png",
      "description": "O site oferece venda de franquia da plataforma megazap para ajudar as empresas a implementarem chatbots e outras ferramentas de automação de atendimento, visando tornar a comunicação com os clientes mais eficiente e personalizada​.",
      "source_link": "https://github.com/jsa-eriques/parceiros-jsa",
      "live_link": "https://megazap.com/parceiros/",
      "tech_stack": ["React","Tailwind","CSS", "Light & Dark Mode"]
    },

    {
      "project_name": "MegaZap Business (Hot Site v2)",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/mz-main-2.0.png",
      "description": "Website completo de uma plataforma de gestão de atendimentos que centraliza a comunicação entre empresas e seus clientes, oferecendo uma solução integrada para otimizar o atendimento ao cliente. Contendo API De Conversão do facebook integrada além de captações de Urchin Tracking Module - UTM.",
      "source_link": "https://github.com/jsa-eriques/megazap-ads-news2",
      "live_link": "https://ads-news-2.vercel.app/",
      "tech_stack": ["Vite + React","Ruby on Rails","SCSS"]
    },

    {
      "project_name": "DHR Company",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/dhrcompany.png",
      "description": "Site da DHR Company é a base das empresas do grupo MZ, daqui irá destrinchar todos os investimentos, biografias e feitos do grupo.",
      "source_link": "https://github.com/jsa-eriques/Space-Tourism",
      "live_link": "https://jsa-eriques.github.io/Space-Tourism/",
      "tech_stack": ["HTML","CSS","JavaScript","JSON","Figma"]
    },
  
    {
      "project_name": "MegaZap Business (Institucional v0.2)",
      "image_url": "https://raw.githubusercontent.com/jsa-eriques/json-database/main/assets/mz-option-2.0.png",
      "description": "Website completo de uma plataforma de gestão de atendimentos que centraliza a comunicação entre empresas e seus clientes, oferecendo uma solução integrada para otimizar o atendimento ao cliente. Contendo API De Conversão do facebook integrada além de captações de Urchin Tracking Module - UTM.",
      "source_link": "https://github.com/jsa-eriques/MZ/tree/main/Sites/mz-main/mz-ads-idea-01",
      "live_link": "https://mz-ads-eriques-andrade.vercel.app/",
      "tech_stack": ["Vite + React","React","CSS"]
    },

    
    
]
  dispatch(setProjects(data));
};

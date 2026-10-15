import type { Resources } from "../types";

export const _pages: Resources["_pages"] = {
  routes: {
    home: "Inicio",
    features: "¿Qué hago?",
    about: "Acerca de Mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  notFound: {
    goHome: "Ir al inicio",
    body: "No se encuentra la página",
  },
  home: {
    hero: {
      name: "Sito",
      role: "Desarrollador web fullstack",
      text: "Combino desarrollo fullstack y diseño para crear experiencias web y móviles.",
      viewWork: "Ver mis proyectos",
      viewCv: "Ver mi CV",
      social: {
        github: "Github",
        instagram: "Instagram",
        twitter: "Twitter",
        linkedin: "LinkedIn",
      },
      meet: "Puedes encontrarme en:",
    },
    about: {
      title: "Acerca de mí",
      subtitle: "pero mi nombre real es Carlos Andrés Mora González",
      me: {
        title: "Acerca de mí",
        text: "Me gusta programar 👨🏻‍💻",
        more: "y aprender cosas nuevas 📚",
        content: [
          {
            Type: "Title",
            Content: "Programar es una de mayores pasiones",
          },
          {
            Type: "Text",
            Content:
              "Soy hijo de dos Masters en Ciencia de la Computación, así que la programación se mueve através de mis venas. Comencé a escribir mis primeras líneas de código al entrar en la universidad, estudiando Ciencia de la Computación, durante todo mi proceso de estudio estuve desarrollando aplicaciones de escritorio con Qt y C++.",
          },
          {
            Type: "Images",
            Content: [
              {
                Source: "qt-logo",
                Alt: "qt-logo",
              },
              {
                Source: "cpp-logo",
                Alt: "cpp-logo",
              },
            ],
          },
          {
            Type: "Text",
            Content:
              "Al llegar a segundo año de la carrera un profesor me comentó que es posible el desarrollo de páginas web y servidores solo con JavaScript, en ese mismo instante busqué cursos para aprender dicho lenguaje. En la actualidad soy desarrollador de páginas web, usando herramientas como ReactJs, NodeJs, JavaScript, MaterialUi, NextUi, Firebase, MongoDB",
          },
          {
            Type: "Images",
            Content: [
              {
                Source: "react-logo",
                Alt: "react-logo",
              },
              {
                Source: "node-logo",
                Alt: "node-logo",
              },
              {
                Source: "js-logo",
                Alt: "javascript-logo",
              },
              {
                Source: "mui-logo",
                Alt: "materialui-logo",
              },
              {
                Source: "nextui-logo",
                Alt: "nextui-logo",
              },
              {
                Source: "firebase-logo",
                Alt: "firebase-logo",
              },
              {
                Source: "mongodb-logo",
                Alt: "mongodb-logo",
              },
            ],
          },
        ],
      },
      freeTime: {
        title: "En mi tiempo libre",
        text: "Me gusta escuchar música 🎶",
        more: "tocar al piano 🎹 y hacer fotos 📷",
        content: [
          {
            type: "title",
            content: "La música y el piano",
          },
          {
            type: "text",
            content:
              "Estudié música en la escuela comunitaria Lauro Fuentes, en Santiago de Cuba. Comencé estudiando piano por cuatro años, con un teclado eléctrico estudiaba en casa y me distraía, después tuve que cambiar para percusión.",
          },
        ],
      },
      design: {
        text: "Actualmente estudiando 📝",
        more: "diseño gráfico 🎨, UI/UX",
      },
    },
    features: {
      title: "Competencias principales",
      cards: {
        uiUx: {
          title: "Diseño UI/UX",
          body: "Diseño interfaces claras e intuitivas, centradas en las necesidades de las personas.",
          tags: ["Figma", "Prototipado"],
        },
        web: {
          title: "Desarrollo web",
          body: "Creo experiencias web adaptables y rápidas con herramientas modernas de frontend.",
          tags: ["React", "TypeScript", "Tailwind"],
        },
        mobile: {
          title: "Desarrollo móvil",
          body: "Desarrollo aplicaciones móviles para Android e iOS con herramientas modernas.",
          tags: ["React Native", "Kotlin"],
        },
      },
    },
    projects: {
      title: "Proyectos Profesionales",
      text: "Ven y échale un ojo a mi ",
      seeMore: "GitHub",
      projects: {
        "m2g-fotos": {
          title: "M2G Fotos",
          text: "Sitio web oficial M2G Fotos. Estudio de Fotografía en Santiago de Cuba",
        },
        "descubre-trinidad": {
          title: "Descubre Trinidad",
          text: "Déjate llevar por el encanto de la Ciudad de Encuentros.",
        },
        "sito-library": {
          title: "Sito library",
          text: "Web con todos mis recursos, identidad de marca, bibliotecas y proyectos",
        },
      },
    },
    skills: {
      title: "Mis Habilidades",
      body: "Como desarrollador de Frontend desarrollando de aplicaciones web por [year] años he potenciado las siguientes habilidades:",
      age: " años de experiencia",
      other: "Otras habilidades",
    },
    contact: {
      title: "Ponerse en contacto",
      body: "Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible para responderte!",
      button: "Di hola 👋",
      downloadCV: "Descargar CV",
    },
  },
  footer: {
    SitoLib: "Documentación de ",
  },
};

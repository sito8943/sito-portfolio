import type { Resources } from "../types";

export const _pages: Resources["_pages"] = {
  routes: {
    home: "Inicio",
    features: "¿Qué hago?",
    about: "Acerca de Mí",
    skills: "Stack",
    projects: "Proyectos",
    contact: "Contacto",
  },
  notFound: {
    goHome: "Ir al inicio",
    body: "No se encuentra la página",
  },
  home: {
    hero: {
      name: "Hola, soy Sito",
      role: "Desarrollador fullstack",
      text: "Diseño y construyo productos web y móviles, desde el primer boceto hasta producción.",
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
        title: "De ideas a código",
        text: "Me encanta convertir ideas en código 👨🏻‍💻",
        more: "y aprender algo nuevo cada día 📚",
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
        title: "Más allá del código",
        text: "Me encontrarás disfrutando de la música 🎶",
        more: "tocando el piano 🎹 o capturando momentos 📸",
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
        title: "Siempre evolucionando",
        text: "Combino código y creatividad 🎨",
        more: "a través del diseño gráfico y UI/UX.",
      },
    },
    features: {
      title: "Competencias principales",
      cards: {
        uiUx: {
          title: "Diseño UI/UX",
          body: "Diseño interfaces claras e intuitivas, centradas en las necesidades de las personas.",
        },
        web: {
          title: "Desarrollo web",
          body: "Creo experiencias web adaptables y rápidas con herramientas modernas de frontend.",
        },
        mobile: {
          title: "Desarrollo móvil",
          body: "Desarrollo aplicaciones móviles para Android e iOS con herramientas modernas.",
        },
      },
    },
    projects: {
      title: "Trayectoria",
      lead: "Tres etapas: de construir para otros a construir mis propios productos.",
      stageLabel: "Etapa {{number}}",
      visit: "Visitar sitio",
      labels: {
        role: "Rol",
        period: "Periodo",
        place: "Lugar",
        kind: "Proyecto",
        status: "Estado",
      },
      universe: {
        name: "Sito Universe",
        tagline: "Mis productos",
        about:
          "De la idea al despliegue: productos propios, diseñados y construidos por mí.",
        kind: "Proyectos personales",
        status: "En producción",
        products: {
          sitoWallet: {
            title: "Sito Wallet",
            kind: "Finanzas personales",
            text: "Organiza tu dinero, ahorra más y decide mejor, en web y en móvil.",
          },
          sitoNotas: {
            title: "Sito Notas",
            kind: "Notas",
            text: "Notas rápidas y privadas, también sin conexión.",
          },
          sitoDeck: {
            title: "Sito Presentation Deck",
            kind: "Presentaciones",
            text: "Presentaciones que tu agente de IA escribe directamente en la biblioteca de tu equipo.",
          },
        },
      },
      stages: {
        inmersoft: {
          name: "Inmersoft",
          tagline: "Transformación e Innovación",
          about:
            "Turismo creativo y sostenible con tecnología, desde Santiago de Cuba.",
          period: "Jun 2021 — Oct 2023",
          place: "Santiago de Cuba · Híbrido",
        },
        harbourSpace: {
          name: "Harbour.Space",
          tagline: "The State-of-the-Art Institute",
          about: "Tecnología, emprendimiento y diseño en Barcelona y Bangkok.",
          period: "Sep 2025 — Actualidad",
          place: "Barcelona · Prácticas",
        },
      },
      products: {
        descubreTrinidad: {
          title: "Descubre Trinidad",
          kind: "Web turística",
          text: "La guía de Trinidad de Cuba: experiencias, rutas, sabor local y su propia app, en varios idiomas.",
        },
        inmersoftWeb: {
          title: "Inmersoft",
          kind: "Landing page",
          text: "La web de la propia Inmersoft: soluciones digitales para ciudades, museos y hoteles.",
        },
        harbourSpaceWeb: {
          title: "Harbour.Space",
          kind: "Web institucional",
          text: "La web pública de Harbour.Space: programas, admisiones y cursos para estudiantes de todo el mundo.",
        },
      },
    },
    skills: {
      title: "Con qué construyo",
      experience: "años de experiencia",
      production: "productos en producción",
      hint: "Elige un stack para ver sus herramientas",
      stacks: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps",
        mobile: "Móvil",
        design: "Diseño",
      },
    },
    contact: {
      title: "Hablemos",
      body: "Mi bandeja siempre está abierta: propuestas, preguntas o solo para saludar.",
      write: "Escríbeme",
      downloadCV: "Descargar CV",
      also: "También en",
    },
  },
  footer: {
    SitoLib: "Documentación de ",
  },
};

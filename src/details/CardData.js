const cardData = [
  {
    id: 18,
    url: "images/papergeneration.png",
    name: "GMRIT paper generation",
    tech: ["React Js", "Node Js", "Express Js", "MYSQL", "Tailwindcss"],
    link: "",
    type: "fullstack",
    youtubelink:
      "https://www.youtube.com/embed/fYwPcn2_tIU?si=bvHiyOFIPbDC-x3Z",
    sourcecode1: "",
    sourcecode2: "",
    description: {
      des: "It is a full stack application where the question papers of the college can be generated. ",
      features:
        "key features includes Authentication, Branch management, Question Management, Paper Generation modules",
    },
  },
  {
    id: 17,
    url: "images/shopforyou.png",
    name: "Shop4U",
    tech: [
      "React Js",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Bootstrap",
      "Redux Toolkit",
      "Razorpay",
    ],
    link: "https://shop4-u-delta.vercel.app/",
    type: "fullstack",
    youtubelink:
      "https://www.youtube.com/embed/w6lXm9Memvw?si=4xiDgrRmLGxXdBLv",
    sourcecode1: "https://github.com/B-L-SARATH/shop4U",
    sourcecode2: "https://github.com/B-L-SARATH/shop4Ubackend",
    description: {
      des: "It is a full stack Ecommerce application.",
      features:
        "key features includes Authentication, Pagination, search, filter, cart management, myorders section,Payment using razorpay,Profile management, Admin dashboard to manage users,products and orders",
    },
  },
  {
    id: 16,
    url: "images/promptsforyou.png",
    name: "Prompts for you",
    tech: ["NextJs", "MongoDB", "NextAuth", "Tailwindcss"],
    link: "https://prompts4-u.vercel.app/",
    type: "fullstack",
    youtubelink:
      "https://www.youtube.com/embed/kgVUTY8uAmQ?si=K9fgXYTPuPaAH2Wn",
    sourcecode1: "https://github.com/B-L-SARATH/prompts4U",
    sourcecode2: "",
    description: {
      des: "It is a full stack application where user can discover the new prompts and can create their own prompts and share with others",
      features:
        "key features include Oauth Authentication,user can see the prompts,create a prompt,edit and delete the prompt,Search the prompt by name or tag",
    },
  },
  {
    id: 15,
    url: "images/stepcone.png",
    name: "GMRIT Stepcone 2024",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap", "php", "mysql"],
    link: "https://gmrit.edu.in/stepcone/",
    type: "fullstack",
    youtubelink:
      "https://www.youtube.com/embed/_gR1HDIyXow?si=BIbxpL7S_rG5UK2i",
    sourcecode1: "",
    sourcecode2: "",
    description: {
      des: "It is a full stack application of GMRIT'S Biggest event stepcone ,where user can discover events and can register for the events",
      features:
        "key features includes Authentication,Event Discovery,Register for the events, Admin dashboard",
    },
  },

  {
    id: 14,
    url: "images/gpstracker.png",
    name: "4G Gps Tracker",
    tech: ["Boostrap", "js", "php", "mysql"],
    link: "https://wisenet.in/gps",
    type: "fullstack",
    sourcecode1: "",
    sourcecode2: "",
    youtubelink:
      "https://www.youtube.com/embed/YDls63i__uE?si=bnCpUuIxBspHSmyC",
    description: {
      des: "It is a Full Stack web Application where user can track their vechiles live location",
      features:
        "key features include Authentication,  device statistics ,device live location,playback speed (travelled locations path),device distance travalled graphs",
    },
  },
  {
    id: 13,
    url: "images/getfood.png",
    name: "Get Food",
    tech: [
      "React Js",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Redux Tool Kit",
      "Bootstrap",
    ],
    link: "https://foodappfrontend.vercel.app/",
    type: "fullstack",
    youtubelink:
      "https://www.youtube.com/embed/Fjqg8D5MUgw?si=Eo-AvxbwUMsj--sE",
    sourcecode1: "https://github.com/B-L-SARATH/getfoodfrontend",
    sourcecode2: "https://github.com/B-L-SARATH/foodappbackend",

    description: {
      des: "It is a full stack Food Ordering web application ",
      features:
        "key features include Authentication ,add to cart and buy the food items,my orders page",
    },
  },

  {
    id: 12,
    url: "images/papermanager.png",
    name: "Paper Manager",
    tech: ["React Js", "Node Js", "Express Js", "MongoDB", "Bootstrap"],
    link: "https://papermern.vercel.app/",
    type: "fullstack",
    youtubelink:
      "https://www.youtube.com/embed/KFiFK0hzcTk?si=jxLabXaUp1ckjhfA",
    sourcecode1: "https://github.com/B-L-SARATH/papermern",
    sourcecode2: "https://github.com/B-L-SARATH/papermernbackend",
    description: {
      des: "It is a fullstack paper management Application",
      features:
        "key features includes authentication,view papers, add paper, update paper, delete paper",
    },
  },

  {
    id: 11,
    url: "images/keeper.png",
    name: "Keeper app",
    tech: ["React Js", "Bootstrap"],
    link: "https://b-l-sarath.github.io/keeper/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/akfvww6C7cE?si=x4bQzEwL2PBFaFoA",
    sourcecode1: "https://github.com/B-L-SARATH/keeper",
    sourcecode2: "",
    description: {
      des: "It is a idea saving website where we can keep our ideas as cards",
      features:
        "key features includes Add idea, Edit idea, Delete idea .The stored items will be stord using localstorage of the browser",
    },
  },
  {
    id: 10,
    url: "images/todolist.png",
    name: "Todo list",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://b-l-sarath.github.io/todolist/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/MJBdNObAbq4?si=uYI7uyzdufNC58Zd",
    sourcecode1: "https://github.com/B-L-SARATH/todolist",
    sourcecode2: "",
    description: {
      des: "It is a simple todo list management website used to manage the daily tasks",
      features:
        "key features includes add a todo item and delete the item. The stored items will be stord using localstorage of the browser",
    },
  },
  {
    id: 9,
    url: "images/pleasantvibe.png",
    name: "Music player",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://b-l-sarath.github.io/pleasantvibe/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/0AgBwT-eumE?si=w81DLjYi5cCdiDFi",
    sourcecode1: "https://github.com/B-L-SARATH/pleasantvibe",
    sourcecode2: "",
    description: {
      des: "This is a simple music player website ",
      features:
        "The  key features include play and pause the songs ,next and previous song feature",
    },
  },
  {
    id: 8,
    url: "images/todolistreact.png",
    name: "Todo list",
    tech: ["React Js", "Bootstrap"],
    link: "https://b-l-sarath.github.io/todolist-react/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/pJ1ZrS5hwbU?si=81zdQSpyM0X2xlv_",
    sourcecode1: "https://github.com/B-L-SARATH/todolist-react",
    sourcecode2: "",
    description: {
      des: "It is a simple todo list management website used to manage the daily tasks",
      features:
        "key features include add a todo item and delete the item. The tasks are stored using localstorage of the browser",
    },
  },
  {
    id: 7,
    url: "images/contact.png",
    name: "Contact Management",
    tech: ["React Js", "Bootstrap"],
    link: "https://contactapp-steel.vercel.app/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/jZ1DvvKobn0?si=QVJAaRuphL6XIBrS",
    sourcecode1: "https://github.com/B-L-SARATH/contactapp",
    sourcecode2: "",
    description: {
      des: "This is the website which is used to manage contacts.",
      features:
        "key features includes add a contact,view the contact details,edit and delete the contact info .Saved contacts are stored using localstorage",
    },
  },
  {
    id: 6,
    url: "images/spotify.png",
    name: "Music player",
    tech: ["React Js", "React routing", "Bootstrap"],
    link: "https://musicplayer-sable.vercel.app/",
    type: "frontend",
    youtubelink: "",
    sourcecode1: "https://github.com/B-L-SARATH/musicplayer",
    sourcecode2: "",
    description: {
      des: "This is a simple music player website .The main thing focused in this project is user authentication and react routing",
      features:
        " The key features includes Authentication, play and pause the songs ,next and previous songs",
    },
  },
  {
    id: 5,
    url: "images/drumstick.png",
    name: "Drum player",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://b-l-sarath.github.io/drumkit/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/6R64gvIYXUM?si=BHgfhdfPjY0UHv_J",
    sourcecode1: "https://github.com/B-L-SARATH/drumkit",
    sourcecode2: "",
    description: {
      des: "It is instrumental based website which we can use to play different musical instruments",
      features:
        "some of the musical instruments are available which can be played by clicking on it or using key board keys.",
    },
  },
  {
    id: 4,
    url: "images/weather.png",
    name: "Weather predictor",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://b-l-sarath.github.io/weatherapp/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/YKEZLHPFxCk?si=JGHumPsI-Y1tCvkr",

    sourcecode1: "https://github.com/B-L-SARATH/weatherapp",
    sourcecode2: "",
    description: {
      des: "it is a simple weather predictor website used to predict the weather of a particular city",
      features:
        "By giving the name of a particular place we can get the temperature in celsius and realted weather image",
    },
  },
  {
    id: 3,
    url: "images/diceroller.png",
    name: "Dice roller",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://b-l-sarath.github.io/diceroller/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/M_tMdLDRh-I?si=TvfprCMcuaSOAXwl",
    sourcecode1: "https://github.com/B-L-SARATH/diceroller",
    sourcecode2: "",
    description: {
      des: "dice roller is a simple dynamic website ,a simple dice roller game",
      features:
        "It can be played for winner selection between two players based on the result of the dice",
    },
  },
  {
    id: 2,
    url: "images/dog.png",
    name: "Dog World",
    tech: ["HTML", "Bootstrap"],
    link: "https://b-l-sarath.github.io/getthedog/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/hPZOpAxl-h0?si=3atCip8ktgjfq8Pm",
    sourcecode1: "https://github.com/B-L-SARATH/getthedog",
    sourcecode2: "",
    description: {
      des: "It is a static website with friendly userinterface.",
      features:
        "Website contains different sections like testimonials,pricing and contact sections.",
    },
  },
  {
    id: 1,
    url: "images/ecommerce.png",
    name: "Flipkart clone",
    tech: ["HTML", "CSS"],
    link: "https://b-l-sarath.github.io/my-ecommerce-website/",
    type: "frontend",
    youtubelink:
      "https://www.youtube.com/embed/4l1av2OVS1c?si=W8TwiHAyrc3Gsjhc",
    sourcecode1: "https://github.com/B-L-SARATH/my-ecommerce-website",
    sourcecode2: "",
    description: {
      des: "As this is my first project .I have done a small ecommerce static website where different sections of products are displayed using unsplash cdn to get random products.",
      features:
        "it is a static design of the ecommerce website,the images of the products will be dynamically changes",
    },
  },
];

export default cardData;

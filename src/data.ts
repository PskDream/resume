export const fullVersionLink = "https://resume.narze.live"
export const sourceLink = "https://github.com/narze/resume"
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"

export const introData = {
  name: "Pongsakorn Samothai",
  nickname: "Dream",
  phone: "",
  email: "p.samothai@outlook.com",
  github: "PSKdream",
  linkedin: "pongsakornn",
  location: "Bangkok, Thailand",
  // website: "narze.live",
}

export const technologies = [
  {
    section: "Languages:",
    details:
      "C, C#, Python, Java, JavaScript, TypeScript, SQL",
  },
  {
    section: "Frameworks:",
    details:
      "ReactJS, NextJS, SvelteJS, TailwindCSS, Bootstrap, Tensorflow, Keras, Torch, Openai Gym",
  },
  {
    section: "Tools:",
    details:
      "Git, Docker, Robot Framework, Selenium, Arduino",
  },
  {
    section: "Other:",
    details:
      "Firebase, Vercel, Netlify, DigitalOcean, Hadoop, MongoDB atlas",
  },
]

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: "Panyapiwat Institute of Management, TH. 2019-Current (GPA 3.96 - 6 Semester)",
  },
]

export const workExperiences = [
  {
    position: "Internship Student",
    company: "MFEC Public Company Limited",
    url: "https://www.mfec.co.th/",
    years: ["Nov 2020", "Apr 2021"],
    details: [
      "Designed and Developed ETL flow to process the data before sending it for analysis.",
      "Designed dashboards for data visualization.",
    ],
  },
  {
    position: "Full-stack Developer",
    company: "Brainergy Company Limited",
    url: "https://brainergy.digital/",
    years: ["Jun 2022", "Current"],
    details: [
      "Designed, developed and maintained several core services for website (Face Detection, Reporting, APIs, etc.) stack Django, Angular.",
      "Designed, developed and maintained A back-end system that manages documents and sends emails (Concurrency Service) to customers using Django, Celery.",
      "Designed and developed back-end systems to support migration of cloud services from Google Cloud to AWS.",
    ],
  },
  {
    position: "Full-stack Developer",
    company: "Outsource",
    years: ["Jun 2022"],
    details: [
      "Designed, developed a system for borrowing books in the library with UHF RFID on the Kiosk Touch Screen and installing equipment.",
      "Designed, developed and maintained website (Book rental, Payment, Face Detection, Reporting, APIs, etc.).",
      "Develop a membership system using face identification to verify identity using a Thai national ID card.",
      "Design and installation of on-site network systems using Kiosk Touch Screen.",
      "Researched & introduced modern technologies to the team, such as SvelteJS, TailwindCSS, Vite, Hardware for Kiosk, etc."
    ],
  },
]

export const projects = [
  {
    name: "Analysis of Modern Image Classification Platforms for Bone Fracture Detection",
    details:"In the process of developing this research We present the use of the RL algorithm with FaceNet on masked face recognition and evaluate its performance as compared to the other classification algorithms including ANN, KNN and SVM. Present in The 6th International Conference on Information Technology 2022  (37th# InCIT 2022).",
  },
  {
    name: "	Evaluation of Masked Face Recognition of FaceNet Implemented With Machine Learning Algorithms",
    details:"In the process of developing this research We present a model selection between YOLO-X and YOLO-R, a highly efficient neural network. Present in The 6th International Conference on Information Technology 2022  (37th# InCIT 2022).",
  },
  {
    name: "Fracture Detection and Localization for long bones by X-ray images in JPEG format",
    details:"In the process of developing this research We present a model selection between YOLO-X and YOLO-R, a highly efficient neural network. Present in The 37th International Technical Conference on Circuits/System, Computers and Communications (37th# ITC CSCC 2022).",
  },
  {
    name: "Banana Weight Measurement By Using Image",
    details:"This is a model used to estimate the weight of a banana from an image using convolutional neural networks. This project uses the Tensorflow and Sklearn library in Python and SQLite.",
    url: "github.com/PSKdream/CE59423/blob/main/project/banana_cnn.ipynb",
  },
  {
    name: "Prommanusorn school’s enrollment system",
    details:"The system was created as a replacement for the existing enrollment system to accommodate more people. This project made me learn to use new web frameworks such as React, Firestore, and Netlify (Hosting).",
    // url: "manoonchai.com",
  },
  {
    name: "Prommanusorn school’s recruitment system",
    details: "The system reads information from the applicant's ID card. And the system will automatically arrange the exam room and seat number. This project uses the Tkinter library in Python and SQLite.",
    // url: "thwordle.narze.live",
  },
]

export const researchs = [
  {
    name: "Fracture Detection and Localization for long bones by X-ray images in JPEG format",
    details:"In this paper, we comprehensively study the performance of YOLO-X and YOLO-R under fracture bone X-ray images to locate the fracture locations.",
    present: 'The 37th International Technical Conference on Circuits/System, Computers and Communications'
  },
  {
    name: "Investigation of Multi-agent reinforcement learning on merge ramp for avoiding car crash on highway",
    details:"In this paper, we take the as length of prohibiting area and length of entrance area into the account to evaluate the performance of MARL. As a result, the MARL can avoid the car crashing effectively while achieve high rewards and high vehicle speed.",
    present: 'The 37th International Technical Conference on Circuits/System, Computers and Communications'
  }
]

export const references = [
  {
    name: "Assoc. Prof. Parinya Sanguansat",
    details: [  
      "Department of Computer Engineering",
      "Panyapiwat Institute of Management",
      "Nonthaburi, Thailand",
    ]
  },
  {
    name: "Asst. Prof. Adisorn Kheaksong",
    details: [  
      "Department of Computer Engineering",
      "Panyapiwat Institute of Management",
      "Nonthaburi, Thailand",
    ]
  },
  {
    name: "Asst. Prof. Kanabadee Srisomboon",
    details: [  
      "Department of Electrical and Computer Engineering",
      "King Mongkut's University of Technology North Bangkok",
      "Bangkok, Thailand",
    ]
  },
]

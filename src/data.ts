export const fullVersionLink = "https://resume.narze.live"
export const sourceLink = "https://github.com/PSKdream/resume"
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"

export const introData = {
  name: "Pongsakorn Samothai",
  nickname: "Dream",
  phone: "+66 80-652-8198",
  email: "p.samothai@outlook.com",
  github: "PSKdream",
  linkedin: "pongsakornn",
  location: "Bangkok, Thailand"
}

export const technologies = [
  {
    section: "Languages:",
    details:
      "Python, Java, Scala, JavaScript, TypeScript, SQL, Shell script",
  },
  {
    section: "Frameworks:",
    details:
      "Angular, SvelteJS, Bootstrap, Springboot",
  },
  {
    section: "AI Frameworks:",
    details:
      "Tensorflow, Keras, OpenCV",
  },
  {
    section: "Tools:",
    details:
      "Git, Docker, Zsh, Markdown",
  },
  {
    section: "Other:",
    details:
      "CI/CD, CloudFlare, Amazon Web Services",
  },
]

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: "Panyapiwat Institute of Management, TH. 2019-2022 (GPA 3.96)",
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
    position: "Internship Student",
    company: "Brainergy Company Limited",
    url: "https://brainergy.digital/",
    years: ["Jun 2022", "Dec 2022"],
    details: [
      "Designed, developed and maintained several core services for website (Face Detection, Reporting, APIs, etc.) stack Django, Angular.",
      "Designed, developed and maintained A back-end system that manages documents and sends emails (Concurrency Service) to customers using Django, Celery.",
      "Designed and developed back-end systems to support migration of cloud services from Google Cloud to AWS.",
    ],
  },
  {
    position: "Sr. Full-stack Developer",
    company: "Brainergy Company Limited",
    url: "https://brainergy.digital/",
    years: ["Dec 2022", "Current"],
    details: [
      "Designed, developed and maintained e-tax service (Generate Document, Sending data to Revenue Department).",
      "Optimized the performance of the system to be able to handle more than 20,000,000 transection per month.",
      "Developed Cryptographic Service to encrypt and decrypt the data in the system using Hardware security modules (HSM).",
      "Developed PDF Certificate Generator Service to generate PDF certificate for customers.",
    ],
  },
]

export const projects = [
  // {
  //   name: "Analysis of Modern Image Classification Platforms for Bone Fracture Detection",
  //   details:"In the process of developing this research We present a comprehensive evaluation of the YOLO-X, YOLO-R and YOLOv7 performance under bone fracture X-ray images. Present in The 6th International Conference on Information Technology 2022  (37th# InCIT 2022).",
  // },
  // {
  //   name: "Evaluation of Masked Face Recognition of FaceNet Implemented With Machine Learning Algorithms",
  //   details: "In the process of developing this research We present the use of the RL algorithm with FaceNet on masked face recognition and evaluate its performance as compared to the other classification algorithms including ANN, KNN and SVM. Present in The 6th International Conference on Information Technology 2022  (37th# InCIT 2022).",
  // },
  // {
  //   name: "Fracture Detection and Localization for long bones by X-ray images in JPEG format",
  //   details:"In the process of developing this research We present a model selection between YOLO-X and YOLO-R, a highly efficient neural network. Present in The 37th International Technical Conference on Circuits/System, Computers and Communications (37th# ITC CSCC 2022).",
  // },
  // {
  //   name: "Banana Weight Measurement By Using Image",
  //   details:"This is a model used to estimate the weight of a banana from an image using convolutional neural networks. This project uses the Tensorflow and Sklearn library in Python and SQLite.",
  //   url: "github.com/PSKdream/CE59423/blob/main/project/banana_cnn.ipynb",
  // },
  // {
  //   name: "Prommanusorn school’s enrollment system",
  //   details:"The system was created as a replacement for the existing enrollment system to accommodate more people. This project made me learn to use new web frameworks such as React, Firestore, and Netlify (Hosting).",
  //   // url: "manoonchai.com",
  // },
  // {
  //   name: "Prommanusorn school’s recruitment system",
  //   details: "The system reads information from the applicant's ID card. And the system will automatically arrange the exam room and seat number. This project uses the Tkinter library in Python and SQLite.",
  //   // url: "thwordle.narze.live",
  // },
]

export const researchs = [
  {
    name: "The Evaluation of Bone Fracture Detection of YOLO Series",
    details:"In this paper, we comprehensively study the performance of YOLO-X and YOLO-R under fracture bone X-ray images to locate the fracture locations.",
    present: 'The 37th International Technical Conference on Circuits/System, Computers and Communications',
    url: "ieeexplore.ieee.org/document/9895016/",
  },
  {
    name: "Investigation of Multi-agent reinforcement learning on merge ramp for avoiding car crash on highway",
    details:"In this paper, we take the as length of prohibiting area and length of entrance area into the account to evaluate the performance of MARL. As a result, the MARL can avoid the car crashing effectively while achieve high rewards and high vehicle speed.",
    present: 'The 37th International Technical Conference on Circuits/System, Computers and Communications',
    url: "ieeexplore.ieee.org/document/9895011/",
  },
  {
    name: "Analysis of Modern Image Classification Platforms for Bone Fracture Detection",
    details: `in this paper, we present a
    comprehensive evaluation of the YOLO-X, YOLO-R
    and YOLOv7 performance under bone fracture X-ray
    images. From the simulation results, according to the
    head decoupled process, anchor-free and Mosaic and
    MixUp augmentation strategies, the YOLO-X presents
    the better detection performance than the YOLO-R
    and YOLOv7 whose detected fracture according to the
    implicit and explicit knowledge extraction. Moreover,
    YOLO-X presents faster convergence speed than
    YOLO-R and YOLOv7 significantly determined by
    the training curves.`,
    present: '2022 6th International Conference on Information Technology (InCIT)',
    url: "ieeexplore.ieee.org/document/10067836",
  },
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

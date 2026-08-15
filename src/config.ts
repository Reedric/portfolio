export const siteConfig = {
  name: "Roderic Parson",
  title: "Aspiring Software Professional",
  description: "Portfolio website of Roderic Parson",
  accentColor: "#ff2400",
  social: {
    email: "rodericparson@gmail.com",
    linkedin: "https://www.linkedin.com/in/rodericparson2/",
    github: "https://github.com/Reedric",
  },
  aboutMe:
    "Hi! I am Roderic Parson, a Master's Student at Georgia Tech. I am pursuing a degree in Computer Science with a specialization in Computer Graphics. I have completed 2 internships: 1 in Business Development and the other in Data Engineering. I have also worked on a dozen games through VGDev, Georgia Tech's award-winning video game development club. In my free time, I play the euphonium in the Georgia Tech Symphonic Band, I exercise, and I play video games. If you would like to know more about me, feel free to connect with me!",
  skills: ["Python", "Java", "C#", "JavaScript", "HTML", "CSS", "Google Cloud Platform", "Unity", "Godot"],
  projects: [
    {
      name: "Birdbrain Bash",
      description:
        "Ability-based co-op sports game. Play as different birds and team up with friends to take out the competition. Co-lead that oversaw audio and programming for the game. Attended DreamHack Atlanta 2026 to showcase the game. Mainly did systems programming and QA work in addition to team management tasks.",
      link: "https://github.com/Reedric/BIRDBRAIN-BASH",
      skills: ["Unity", "C#", "Netcode for GameObjects", "Game System Programming"],
    },
    {
      name: "Shiftscape",
      description:
        "2D-Puzzle game where world shifts around you as you move. Served as a Level Designer with 15+ of my designed levels in the game.",
      link: "https://github.com/DragonSproutling/Shiftscape_Code",
      skills: ["GameMaker", "Level Design"],
    },
    {
      name: "Hospital Days: Code Gacha",
      description:
        "3D psychological horror game where you gamble to earn collectible prizes that may too closely resemble real life objects. Worked as a Programmer on game logic and the main gambling game mode for the game. Earned an award for outstanding work.",
      link: "https://github.com/Tvandersall1244/Hospital-Days",
      skills: ["Unity", "C#", "Game Design"],
    },
    {
      name: "TerraTune",
      description:
        "Tractor diagnostics tool. Developed over the course of a semester in a team of 4 as part of a Capstone course. Performed market research, product design, and product implementation. Full-Stack developer for the mobile application, but strong emphasis on backend engineering.",
      link: "https://github.com/Reedric/CREATE-X-Group-11",
      skills: ["Node.js", "React Native", "Google Firebase"],
    },
    {
      name: "Yelp Review Predictor",
      description:
        "Machine learning project that predicted a user's review about a restaurant based on its other reviews. Worked in a team of 5 as part of a final project for a course. Was 1 of 2 undergraduate groups to receive outstanding project award. Primarily performed backwards feature elimination to purge dataset of useless features and helped tune one of our Neural Networks.",
      skills: ["PyTorch", "Python", "NumPy"],
    },
  ],
  experience: [
    {
      company: "Savanna River Mission Completion",
      title: "Business Systems Developer Intern",
      dateRange: "May 2024 - Aug 2024",
      bullets: [
        "Developed and tested a full-stack application responsible for CRUD operations for over 100 software licenses handed to Savannah River Site employees that reduced fiscal inventory checking time by 60%",
        "Constructed over 15 complex SQL queries used by the application across multiple tables and databases to show detailed information on different application components",
        "Designed a SQL Server report to show the fiscal history of a facility dynamically through user input and presented it in a concise manner",
      ],
    },
    {
      company: "Georgia Tech College of Computing",
      title: "Teaching Assistant",
      dateRange: "Aug 2024 - May 2025",
      bullets: [
        "Grade 25+ homeworks and exam assignments weekly to reduce overall assignment grading time",
        "Co-taught 75-minute recitation weekly to students seeking deeper understanding of course material",
        "Instructed 100+ students in office hours on course topics like Lists, Trees, and Sorting algorithms",
      ],
    },
    {
      company: "Gordon Food Service",
      title: "Data Engineering Intern",
      dateRange: "May 2025 - Aug 2025",
      bullets: [
        "Accelerated file upload pipeline using bash scripts, Google Cloud Platform, and SFTP server calls to ingest data based on overwritable tables",
        "Designed file splitting logic for master files using Python to allow automatic separation of data into their respective table",
        "Instructed 50+ students on course topics like Lists, Trees, and Sorting algorithms to reinforce their learning",
      ],
    },
    {
      company: "Georgia Tech College of Computing",
      title: "Senior Teaching Assistant",
      dateRange: "May 2025 - May 2026",
      bullets: [
        "Graded 300+ homework or exam assignments for efficiency and correctness to aid professors in course assessment markings",
        "Organized exam logistics by compiling, printing, collating, administering, scanning, and uploading exams for over 750+ students a semester",
        "Designed 10+ exam questions to accurately assess student understanding of course material",
      ],
    },
    {
      company: "Georgia Tech College of Computing",
      title: "Head Teaching Assistant",
      dateRange: "May 2026 - Present",
      bullets: [
        "Aided professor with student and faculty requests",
        "Led team of 5 teaching assistants to efficiently perform responsibilities",
        "Oversaw every component of course to ensure smooth course operations",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "Graduated Highest Honors with 3.9 GPA",
        "Dean's List all semesters",
        "Earned Georgia Tech College of Computing Instructional Scholarship for $1.2k",
        "Completed 2 Internships",
        "Contributed to over a dozen student-made games, 1 of which I co-led"
      ],
    },
    {
      school: "Georgia Institute of Technology",
      degree: "Master of Science in Computer Science",
      dateRange: "2026 - 2027",
      achievements: [
        "Yet to come..."
      ],
    },
  ],
};

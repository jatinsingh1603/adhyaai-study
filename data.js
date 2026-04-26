const CAREERS = {
  "doctor": "Doctor (Medicine)",
  "engineer": "Engineer (Tech/Core)",
  "ias": "Civil Services (IAS/IPS)",
  "ca": "Chartered Accountant / Finance",
  "designer": "UI/UX & Product Design",
  "coder": "Software Developer",
  "teacher": "Educator / Professor",
  "lawyer": "Corporate Lawyer / Advocate",
  "scientist": "Research Scientist",
  "businessman": "Entrepreneur / Business",
  "creator": "Digital Content Creator",
  "dontknow": "I need help exploring options"
};

const CAREER_OVERVIEWS = {
  "doctor": { looks_like: "A demanding but highly respected profession. Involves diagnosing illnesses, treating patients, and continuous lifelong learning. Long shifts are common.", difficulty: "Extremely Hard", reality: "Takes 5.5 years for MBBS plus 3 years for specialization. Highly competitive entrance exams (NEET)." },
  "engineer": { looks_like: "Solving practical problems using math and science. Roles range from building bridges (Civil) to writing software (CS) or designing hardware.", difficulty: "Hard", reality: "Requires strong analytical skills. High competition for top tier colleges (JEE), but many alternative pathways exist." },
  "coder": { looks_like: "Sitting in front of a computer building apps, websites, or AI systems. High flexibility, remote work options, and creative problem solving.", difficulty: "Medium", reality: "Continuous learning required as technology changes fast. Skills and projects matter more than traditional degrees." },
  "ias": { looks_like: "Administrative leadership. Making and executing government policies, managing districts, and creating social impact at scale.", difficulty: "Extremely Hard", reality: "The UPSC exam has a success rate of less than 1%. Requires intense dedication and broad knowledge of history, politics, and current affairs." },
  "designer": { looks_like: "Creating beautiful and highly functional digital or physical products. Working closely with users to solve their visual and interaction problems.", difficulty: "Medium", reality: "Requires building a strong portfolio. Creative burnout is real, but the field pays well and offers high flexibility." },
  "default": { looks_like: "Exploring various domains to find what fits best with your natural talents and interests.", difficulty: "Varies", reality: "It's completely okay to not know yet. The key is to try different things until something clicks." }
};

const AI_KEYWORDS = {
  "doctor": ["heal", "medicine", "biology", "hospital", "sick", "patients", "doctor", "health", "care"],
  "engineer": ["build", "machines", "math", "physics", "engineer", "cars", "planes", "bridge"],
  "coder": ["computer", "hack", "code", "software", "app", "website", "tech", "program"],
  "ias": ["government", "police", "country", "civil", "officer", "ias", "ips", "upsc"],
  "designer": ["draw", "art", "design", "creative", "paint", "graphics", "ui"]
};

const ROADMAPS = {
  "doctor-9": { career: "Doctor", phases: [ { title: "Foundation Phase (Class 9)", desc: "Build a strong understanding of fundamental Science (Biology) concepts.", difficulty: "Easy", action: "Master NCERT Science textbook completely." } ] },
  "default": { career: "Career Exploration Pathway", phases: [ { title: "Current Discovery Phase", desc: "Concentrate on your current academic syllabus while actively exploring various professional fields.", difficulty: "Easy", action: "Engage with industry professionals or seniors in different streams." } ] }
};

const SKILLS = {
  "coder": [ { name: "Web Fundamentals (HTML & CSS)", desc: "Construct the structural and visual framework of modern websites.", diff: "Beginner", time: "2-3 weeks" } ],
  "default": [ { name: "Professional Communication", desc: "Articulating ideas with clarity and precision in both written and verbal formats.", diff: "Intermediate", time: "Continuous" } ]
};

const RESOURCES = {
  "Web Fundamentals (HTML & CSS)": [ { platform: "YouTube", name: "HTML Tutorial for Beginners", link: "#", hours: "1 hr" } ],
  "default": [ { platform: "Coursera", name: "Learning How to Learn", link: "#", hours: "12 hrs" } ]
};

// Comprehensive NCERT Syllabus Mapping
const SYLLABUS_MAP = {
  "8": {
    "Science": ["Crop Production", "Microorganisms", "Synthetic Fibres", "Metals and Non-Metals", "Coal and Petroleum", "Combustion", "Conservation of Plants", "Cell Structure", "Reproduction", "Adolescence", "Force and Pressure", "Friction", "Sound", "Chemical Effects", "Light", "Solar System", "Pollution"],
    "Maths": ["Rational Numbers", "Linear Equations", "Quadrilaterals", "Practical Geometry", "Data Handling", "Squares and Roots", "Cubes and Roots", "Comparing Quantities", "Algebraic Expressions", "Solid Shapes", "Mensuration", "Exponents", "Direct and Inverse Proportions", "Factorisation", "Graphs"],
    "History": ["How, When and Where", "Trade to Territory", "Ruling the Countryside", "Tribals and Dikus", "When People Rebel", "Colonialism and the City", "Weavers and Iron Smelters", "Civilising the Native", "Women, Caste and Reform", "National Movement"]
  },
  "9": {
    "Science": ["Matter in Surroundings", "Is Matter Pure", "Atoms and Molecules", "Structure of the Atom", "The Fundamental Unit of Life", "Tissues", "Diversity in Organisms", "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound", "Why Do We Fall Ill", "Natural Resources", "Food Resources"],
    "Maths": ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations", "Euclid's Geometry", "Lines and Angles", "Triangles", "Quadrilaterals", "Parallelograms and Triangles", "Circles", "Heron's Formula", "Surface Areas and Volumes", "Statistics", "Probability"],
    "History": ["The French Revolution", "Socialism in Europe", "Nazism and Hitler", "Forest Society", "Pastoralists"]
  },
  "10": {
    "Science": ["Chemical Reactions", "Acids, Bases and Salts", "Metals and Non-metals", "Carbon and its Compounds", "Periodic Classification", "Life Processes", "Control and Coordination", "How do Organisms Reproduce", "Heredity and Evolution", "Light Reflection", "Human Eye", "Electricity", "Magnetic Effects", "Sources of Energy", "Our Environment", "Natural Resources"],
    "Maths": ["Real Numbers", "Polynomials", "Linear Equations", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Trigonometry", "Applications of Trigonometry", "Circles", "Areas Related to Circles", "Surface Areas", "Statistics", "Probability"],
    "History": ["Nationalism in Europe", "Nationalism in India", "The Global World", "The Industrialisation", "Print Culture"]
  },
  "11": {
    "Physics": ["Physical World", "Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "Rotational Motion", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
    "Chemistry": ["Basic Concepts", "Structure of Atom", "Classification", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "s-Block", "p-Block", "Organic Chemistry", "Hydrocarbons", "Environmental Chemistry"],
    "Biology": ["Diversity in Living World", "Structural Organisation", "Cell Structure", "Plant Physiology", "Human Physiology"],
    "Maths": ["Sets", "Relations and Functions", "Trigonometry", "Induction", "Complex Numbers", "Linear Inequalities", "Permutations", "Binomial Theorem", "Sequences", "Straight Lines", "Conic Sections", "3D Geometry", "Limits and Derivatives", "Reasoning", "Statistics", "Probability"]
  },
  "12": {
    "Physics": ["Electric Charges", "Electrostatic Potential", "Current Electricity", "Moving Charges", "Magnetism", "EM Induction", "Alternating Current", "EM Waves", "Ray Optics", "Wave Optics", "Dual Nature", "Atoms", "Nuclei", "Semiconductor Electronics", "Communication Systems"],
    "Chemistry": ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "p-Block", "d- and f-Block", "Coordination Compounds", "Haloalkanes", "Alcohols", "Aldehydes", "Amines", "Biomolecules", "Polymers", "Everyday Life Chemistry"],
    "Biology": ["Reproduction", "Genetics and Evolution", "Biology in Human Welfare", "Biotechnology", "Ecology"],
    "Maths": ["Relations and Functions", "Inverse Trigonometry", "Matrices", "Determinants", "Continuity", "Application of Derivatives", "Integrals", "Application of Integrals", "Differential Equations", "Vector Algebra", "3D Geometry", "Linear Programming", "Probability"]
  }
};

const PLAYBOOKS = [];

(function generatePlaybooks() {
  let idCounter = 1;
  for (const [cls, subjects] of Object.entries(SYLLABUS_MAP)) {
    for (const [subject, chapters] of Object.entries(subjects)) {
      let subjectTag = "tag-science";
      if (subject === "Maths") subjectTag = "tag-math";
      if (subject === "History" || subject === "Geography" || subject === "Economics") subjectTag = "tag-humanities";

      chapters.forEach(chapter => {
        PLAYBOOKS.push({
          id: `pb-${cls}-${subject.toLowerCase().replace(/ /g, '-')}-${idCounter++}`,
          title: chapter,
          class: cls,
          subject: subject,
          subjectTag: subjectTag,
          readTime: Math.floor(Math.random() * 4 + 4) + " min",
          content: {
            seedhaSamjho: `This is the complete guide to ${chapter}. We've broken down this complex topic from the NCERT ${subject} syllabus into simple, easy-to-understand language. No more heavy textbook jargon.`,
            formal: `The formal academic definition of ${chapter} as per NCERT. This covers the essential theoretical framework required for your school and board examinations.`,
            realLife: `How does ${chapter} apply to the world around you? Understanding this connection makes the topic much easier to remember and master.`,
            example: `Here is a practical example of ${chapter} in action. Seeing it applied helps solidify the concepts in your mind.`,
            boardExam: `This chapter is a key part of the ${subject} syllabus for Class ${cls}. Pay close attention to definitions, diagrams, and core principles commonly asked in exams.`,
            pyq: [
              `Q. Discuss the core concepts of ${chapter} and their significance. (CBSE Pattern)`,
              `Q. Illustrate a real-world application of ${chapter} with a diagram. (Previous Year Focus)`
            ],
            quickCheck: [
              { q: `What is the most important concept in ${chapter}?`, options: ["The Core Principle", "Option B", "Option C"], ans: 0 },
              { q: `Why is ${chapter} studied in ${subject}?`, options: ["To confuse students", "To understand real-world systems", "No reason"], ans: 1 },
              { q: `Identify a key term related to ${chapter}.`, options: ["Term X", "Term Y", "Correct Term"], ans: 2 }
            ]
          }
        });
      });
    }
  }
})();

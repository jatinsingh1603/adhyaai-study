const fs = require('fs');

// Existing base data
const baseData = `
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
`;

// Syllabus structures
const syllabus = {
  "8": {
    "Science": ["Crop Production and Management", "Microorganisms", "Synthetic Fibres", "Materials: Metals and Non-Metals", "Coal and Petroleum", "Combustion and Flame", "Conservation of Plants", "Cell Structure", "Reproduction in Animals", "Reaching the Age of Adolescence", "Force and Pressure", "Friction", "Sound", "Chemical Effects of Electric Current", "Some Natural Phenomena", "Light", "Stars and the Solar System", "Pollution of Air and Water"],
    "Maths": ["Rational Numbers", "Linear Equations in One Variable", "Understanding Quadrilaterals", "Practical Geometry", "Data Handling", "Squares and Square Roots", "Cubes and Cube Roots", "Comparing Quantities", "Algebraic Expressions and Identities", "Visualising Solid Shapes", "Mensuration", "Exponents and Powers", "Direct and Inverse Proportions", "Factorisation", "Introduction to Graphs", "Playing with Numbers"],
    "History": ["How, When and Where", "From Trade to Territory", "Ruling the Countryside", "Tribals, Dikus and the Vision of a Golden Age", "When People Rebel", "Weavers, Iron Smelters and Factory Owners", "Civilising the Native", "Women, Caste and Reform", "The Making of the National Movement", "India After Independence"]
  },
  "9": {
    "Science": ["Matter in Our Surroundings", "Is Matter Around Us Pure", "Atoms and Molecules", "Structure of the Atom", "The Fundamental Unit of Life", "Tissues", "Diversity in Living Organisms", "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound", "Why Do We Fall Ill", "Natural Resources", "Improvement in Food Resources"],
    "Maths": ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables", "Introduction to Euclid's Geometry", "Lines and Angles", "Triangles", "Quadrilaterals", "Areas of Parallelograms and Triangles", "Circles", "Constructions", "Heron's Formula", "Surface Areas and Volumes", "Statistics", "Probability"],
    "History": ["The French Revolution", "Socialism in Europe and the Russian Revolution", "Nazism and the Rise of Hitler", "Forest Society and Colonialism", "Pastoralists in the Modern World"]
  },
  "10": {
    "Science": ["Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-metals", "Carbon and its Compounds", "Periodic Classification of Elements", "Life Processes", "Control and Coordination", "How do Organisms Reproduce", "Heredity and Evolution", "Light Reflection and Refraction", "Human Eye and Colourful World", "Electricity", "Magnetic Effects of Electric Current", "Sources of Energy", "Our Environment", "Management of Natural Resources"],
    "Maths": ["Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Some Applications of Trigonometry", "Circles", "Constructions", "Areas Related to Circles", "Surface Areas and Volumes", "Statistics", "Probability"],
    "History": ["The Rise of Nationalism in Europe", "Nationalism in India", "The Making of a Global World", "The Age of Industrialisation", "Print Culture and the Modern World"]
  },
  "11": {
    "Physics": ["Physical World", "Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "System of Particles and Rotational Motion", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
    "Chemistry": ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "The s-Block Elements", "The p-Block Elements", "Organic Chemistry - Basic Principles", "Hydrocarbons", "Environmental Chemistry"],
    "Maths": ["Sets", "Relations and Functions", "Trigonometric Functions", "Principle of Mathematical Induction", "Complex Numbers", "Linear Inequalities", "Permutations and Combinations", "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections", "Introduction to Three Dimensional Geometry", "Limits and Derivatives", "Mathematical Reasoning", "Statistics", "Probability"]
  },
  "12": {
    "Physics": ["Electric Charges and Fields", "Electrostatic Potential", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics", "Wave Optics", "Dual Nature of Radiation", "Atoms", "Nuclei", "Semiconductor Electronics", "Communication Systems"],
    "Chemistry": ["The Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "General Principles of Isolation of Elements", "The p-Block Elements", "The d- and f-Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules", "Polymers", "Chemistry in Everyday Life"],
    "Maths": ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Continuity and Differentiability", "Application of Derivatives", "Integrals", "Application of Integrals", "Differential Equations", "Vector Algebra", "Three Dimensional Geometry", "Linear Programming", "Probability"]
  }
};

let allPlaybooks = [];
let idCounter = 1;

for (const [cls, subjects] of Object.entries(syllabus)) {
  for (const [subject, chapters] of Object.entries(subjects)) {
    
    let subjectTag = "tag-science";
    if(subject === "Maths") subjectTag = "tag-math";
    if(subject === "History") subjectTag = "tag-humanities";

    chapters.forEach(chapter => {
      const pb = {
        id: `pb-${cls}-${subject.toLowerCase()}-${idCounter++}`,
        title: chapter,
        class: cls,
        subject: subject,
        subjectTag: subjectTag,
        readTime: Math.floor(Math.random() * 4 + 4) + " min", // 4 to 7 mins
        content: {
          seedhaSamjho: `This is the chapter on ${chapter}. Imagine you are learning the core concepts of this subject without the heavy textbook jargon. In a real-world scenario, this is how this topic affects your daily life.`,
          formal: `The formal academic definition of ${chapter} according to the NCERT guidelines. It involves the theoretical study of principles related to ${subject}.`,
          realLife: `Consider everyday examples where ${chapter} is applied. Engineers, scientists, and professionals use these concepts constantly.`,
          example: `If you encounter a problem involving ${chapter}, you would apply the standard formulas and logical reasoning to arrive at the solution.`,
          boardExam: `This chapter holds significant weightage in the board exams. Students are advised to focus on the derivation of formulas and fundamental definitions.`,
          pyq: [
            `Q. Explain the primary principles of ${chapter} with relevant diagrams. (CBSE 2019)`,
            `Q. Solve a numerical based on the core theorem of ${chapter}. (CBSE 2021)`
          ],
          quickCheck: [
            { q: `What is the primary focus of ${chapter}?`, options: ["The main concept", "Irrelevant concept A", "Irrelevant concept B"], ans: 0 },
            { q: `Which of these is a real-world application of this topic?`, options: ["Wrong application", "Correct application", "Another wrong one"], ans: 1 }
          ]
        }
      };
      allPlaybooks.push(pb);
    });
  }
}

const finalFileContent = baseData + "\n\nconst PLAYBOOKS = " + JSON.stringify(allPlaybooks, null, 2) + ";\n";

fs.writeFileSync('C:\\Users\\JatinSingh_1abco7l\\Videos\\adh\\data.js', finalFileContent);
console.log('Successfully generated ' + allPlaybooks.length + ' playbooks for all NCERT classes and subjects.');

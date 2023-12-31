export const simulations = [
  {
    id: 1,
    title: 'The Starbucks Trap',
    image: require('../assets/images/Sim1.png'),
    path: '/learn/1',
    type: 'Phishing',
    diff: 'Normal',
    desc: 'Beware of an enticing Starbucks ad in your inbox. It promises a free coffee, but is it genuine or a phishing trap?',
    content: [
      require('../assets/images/learn1-1.png'),
      require('../assets/images/learn1-2.png'),
      require('../assets/images/learn1-3.png'),
      require('../assets/images/learn1-4.png'),
      require('../assets/images/learn1-5.png'),
    ],
    question: 'Is This A Phishing Email?',
    choices: ['Yes', 'No'],
    correctAnswer: 0,
    knowledgeCheck: "The email claims to be from starbucks@emailna.com.gov, which is an unusual and suspicious domain. Legitimate Starbucks communications would typically come from an official Starbucks domain. The email provides a brief description of the Starbucks app's benefits but lacks specific details or branding elements typically found in legitimate Starbucks communications.",
  },
  {
    id: 2,
    title: 'The Suspicious Attachment',
    image: require('../assets/images/Sim2.png'),
    path: '/learn/2',
    type: 'Malware',
    diff: 'Normal',
    desc: 'A tricky malware campaign awaits you. Can you identify the malicious email attachment before its too late?',
    content: [
      require('../assets/images/learn2-1.png'),
      require('../assets/images/learn2-2.png'),
      require('../assets/images/learn2-3.png'),
      require('../assets/images/learn2-4.png'),
    ],
    question: 'Assess the attachment type. Is it a file safe to download?',
    choices: ['Yes', 'No'],
    correctAnswer: 1,
    knowledgeCheck: "The attachment in the email is flagged as potentially unsafe due to its file type, which is an executable (.exe) file. Executable files can contain programs or scripts that, when run, may execute commands on your computer. These files have the potential to carry malicious software, posing a significant security risk. It is a common tactic for cybercriminals to disguise harmful content within seemingly innocent files, especially executable files."
  },
  {
    id: 3,
    title: 'The Friendly Stranger',
    image: require('../assets/images/Sim3.png'),
    path: '/learn/3',
    type: 'Social Engineering',
    diff: 'Normal',
    desc: 'Test your social engineering awareness. Will you recognize the stranger who wants access to your personal information?',
    content: [
      require('../assets/images/learn1-1.png'),
      require('../assets/images/learn1-2.png'),
      require('../assets/images/learn1-3.png'),
      require('../assets/images/learn1-4.png'),
      require('../assets/images/learn1-5.png'),
    ],
    question: 'Is This A Phishing Email?',
    choices: ['Yes', 'No'],
    correctAnswer: 0,
    knowledgeCheck: "The email claims to be from starbucks@emailna.com.gov, which is an unusual and suspicious domain. Legitimate Starbucks communications would typically come from an official Starbucks domain. The email provides a brief description of the Starbucks app's benefits but lacks specific details or branding elements typically found in legitimate Starbucks communications."
  },
  {
    id: 4,
    title: 'The Online Sweetheart',
    image: require('../assets/images/Sim4.png'),
    path: '/learn/4',
    type: 'Romance Scam',
    diff: 'Normal',
    desc: 'Enter the world of online romance and learn how to spot a potential romance scam. Is your heart protected?',
    content: [
      require('../assets/images/learn1-1.png'),
      require('../assets/images/learn1-2.png'),
      require('../assets/images/learn1-3.png'),
      require('../assets/images/learn1-4.png'),
      require('../assets/images/learn1-5.png'),
    ],
    question: 'Is This A Phishing Email?',
    choices: ['Yes', 'No'],
    correctAnswer: 0,
    knowledgeCheck: "The email claims to be from starbucks@emailna.com.gov, which is an unusual and suspicious domain. Legitimate Starbucks communications would typically come from an official Starbucks domain. The email provides a brief description of the Starbucks app's benefits but lacks specific details or branding elements typically found in legitimate Starbucks communications."
  },
  {
    id: 5,
    title: 'The Banking Trick',
    image: require('../assets/images/Sim5.png'),
    path: '/learn/5',
    type: 'Phishing',
    diff: 'Difficult',
    desc: 'Navigate a simulated phishing campaign. Will you fall for the deceptive email that wants your banking information?',
    content: [
      require('../assets/images/learn1-1.png'),
      require('../assets/images/learn1-2.png'),
      require('../assets/images/learn1-3.png'),
      require('../assets/images/learn1-4.png'),
      require('../assets/images/learn1-5.png'),
    ],
    question: 'Is This A Phishing Email?',
    choices: ['Yes', 'No'],
    correctAnswer: 0,
    knowledgeCheck: "The email claims to be from starbucks@emailna.com.gov, which is an unusual and suspicious domain. Legitimate Starbucks communications would typically come from an official Starbucks domain. The email provides a brief description of the Starbucks app's benefits but lacks specific details or branding elements typically found in legitimate Starbucks communications."
  },
  {
    id: 6,
    title: 'The Mystery Download',
    image: require('../assets/images/Sim6.png'),
    path: '/learn/6',
    type: 'Malware Infection',
    diff: 'Normal',
    desc: 'You receive an unexpected email with an enticing download link. Can you identify and avoid the malware threat lurking within?',
    content: [
      require('../assets/images/learn1-1.png'),
      require('../assets/images/learn1-2.png'),
      require('../assets/images/learn1-3.png'),
      require('../assets/images/learn1-4.png'),
      require('../assets/images/learn1-5.png'),
    ],
    question: 'Is This A Phishing Email?',
    choices: ['Yes', 'No'],
    correctAnswer: 0,
    knowledgeCheck: "The email claims to be from starbucks@emailna.com.gov, which is an unusual and suspicious domain. Legitimate Starbucks communications would typically come from an official Starbucks domain. The email provides a brief description of the Starbucks app's benefits but lacks specific details or branding elements typically found in legitimate Starbucks communications."
  }, 
];
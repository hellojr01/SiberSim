const scammersData = [
  // Scammer 1
  { 
    id: 1,
    name: 'John Smith',
    contactInfo: '601110831460',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'John Doe', date: '2021-01-15', description: 'This scammer tried to sell me a fake product.' },
      { id: 2, name: 'Jane Smith', date: '2021-02-20', description: 'This scammer asked for my personal information.' },
      { id: 3, name: 'Bob Anderson', date: '2021-03-10', description: 'Avoid dealing with this scammer, they are not trustworthy.' },
      // Add more reports as needed
    ],
  },

  // Scammer 2
  { 
    id: 2,
    name: 'Emma Johnson',
    contactInfo: 'www.scammer1.com',
    contactType: 'Website',
    reports: [
      { id: 1, name: 'Alice White', date: '2021-04-05', description: 'Received spam messages from this scammer\'s website.' },
      { id: 2, name: 'Chris Martin', date: '2021-05-12', description: 'The website is a scam, be cautious!' },
      // Add more reports as needed
    ],
  },

  // Scammer 3
  { 
    id: 3,
    name: 'Michael Brown',
    contactInfo: '123456789012',
    contactType: 'Bank Account',
    reports: [
      { id: 1, name: 'David Johnson', date: '2021-06-20', description: 'This scammer used a fake bank account to trick me.' },
      { id: 2, name: 'Sarah Williams', date: '2021-07-05', description: 'Reported fraudulent activities related to this bank account.' },
      // Add more reports as needed
    ],
  },

  // Scammer 4
  { 
    id: 4,
    name: 'Linda Davis',
    contactInfo: '601220642871',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'Paul Robinson', date: '2021-08-12', description: 'Received scam calls from this mobile number.' },
      { id: 2, name: 'Emily Brown', date: '2021-09-01', description: 'Attempted phishing through mobile communication.' },
      // Add more reports as needed
    ],
  },

  // Scammer 5
  { 
    id: 5,
    name: 'William Wilson',
    contactInfo: 'www.scammer2.com',
    contactType: 'Website',
    reports: [
      { id: 1, name: 'Alex Turner', date: '2021-10-18', description: 'Scammed by the website, lost money on a fake purchase.' },
      { id: 2, name: 'Sophia Hall', date: '2021-11-05', description: 'Fake products sold on the website, be aware!' },
      // Add more reports as needed
    ],
  },

  // Scammer 6
  { 
    id: 6,
    name: 'Patricia Moore',
    contactInfo: '234567890123',
    contactType: 'Bank Account',
    reports: [
      { id: 1, name: 'Daniel Harris', date: '2021-12-15', description: 'Reported fraudulent transactions from this bank account.' },
      { id: 2, name: 'Mia Robinson', date: '2022-01-02', description: 'Beware of this bank account, involved in scam activities.' },
      // Add more reports as needed
    ],
  },

  // Scammer 7
  { 
    id: 7,
    name: 'James Anderson',
    contactInfo: '601932456789',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'Olivia Martinez', date: '2022-02-10', description: 'Received suspicious messages from this mobile number.' },
      { id: 2, name: 'Lucas Turner', date: '2022-03-20', description: 'Attempted scam calls, be cautious!' },
      // Add more reports as needed
    ],
  },

  // Scammer 8
  { 
    id: 8,
    name: 'Jennifer Lee',
    contactInfo: 'www.scammer3.com',
    contactType: 'Website',
    reports: [
      { id: 1, name: 'Liam White', date: '2022-04-05', description: 'Fake products advertised on the website, avoid purchasing.' },
      { id: 2, name: 'Ella Davis', date: '2022-05-12', description: 'Scammed by this website, lost money on a fake deal.' },
      // Add more reports as needed
    ],
  },

  // Scammer 9
  { 
    id: 9,
    name: 'David Taylor',
    contactInfo: '345678901234',
    contactType: 'Bank Account',
    reports: [
      { id: 1, name: 'Noah Robinson', date: '2022-06-20', description: 'Reported fraudulent transactions from this bank account.' },
      { id: 2, name: 'Ava Harris', date: '2022-07-05', description: 'Beware of this bank account, involved in scam activities.' },
      // Add more reports as needed
    ],
  },

  // Scammer 10
  { 
    id: 10,
    name: 'Susan Martinez',
    contactInfo: '601432109876',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'Jackson Smith', date: '2022-08-12', description: 'Received scam calls from this mobile number.' },
      { id: 2, name: 'Sophie Turner', date: '2022-09-01', description: 'Attempted phishing through mobile communication.' },
      // Add more reports as needed
    ],
  },

  // Scammer 11
  { 
    id: 11,
    name: 'Richard Jackson',
    contactInfo: 'www.scammer4.com',
    contactType: 'Website',
    reports: [
      { id: 1, name: 'Emma Turner', date: '2022-10-18', description: 'Scammed by the website, lost money on a fake purchase.' },
      { id: 2, name: 'Henry Anderson', date: '2022-11-05', description: 'Fake products sold on the website, be aware!' },
      // Add more reports as needed
    ],
  },

  // Scammer 12
  { 
    id: 12,
    name: 'Mary Harris',
    contactInfo: '456789012345',
    contactType: 'Bank Account',
    reports: [
      { id: 1, name: 'Ethan Martinez', date: '2022-12-15', description: 'Reported fraudulent transactions from this bank account.' },
      { id: 2, name: 'Isabella Davis', date: '2023-01-02', description: 'Beware of this bank account, involved in scam activities.' },
      // Add more reports as needed
    ],
  },

  // Scammer 13
  { 
    id: 13,
    name: 'Charles Clark',
    contactInfo: '601555123456',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'Mason Robinson', date: '2023-02-10', description: 'Received suspicious messages from this mobile number.' },
      { id: 2, name: 'Scarlett Turner', date: '2023-03-20', description: 'Attempted scam calls, be cautious!' },
      // Add more reports as needed
    ],
  },

  // Scammer 14
  { 
    id: 14,
    name: 'Patricia Lewis',
    contactInfo: 'www.scammer5.com',
    contactType: 'Website',
    reports: [
      { id: 1, name: 'James White', date: '2023-04-05', description: 'Fake products advertised on the website, avoid purchasing.' },
      { id: 2, name: 'Ava Davis', date: '2023-05-12', description: 'Scammed by this website, lost money on a fake deal.' },
      // Add more reports as needed
    ],
  },

  // Scammer 15
  { 
    id: 15,
    name: 'Elizabeth Young',
    contactInfo: '567890123456',
    contactType: 'Bank Account',
    reports: [
      { id: 1, name: 'Oliver Robinson', date: '2023-06-20', description: 'Reported fraudulent transactions from this bank account.' },
      { id: 2, name: 'Chloe Harris', date: '2023-07-05', description: 'Beware of this bank account, involved in scam activities.' },
      // Add more reports as needed
    ],
  },

  // Scammer 16
  { 
    id: 16,
    name: 'Thomas Walker',
    contactInfo: '601678987654',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'Liam Smith', date: '2023-08-12', description: 'Received scam calls from this mobile number.' },
      { id: 2, name: 'Sophie Turner', date: '2023-09-01', description: 'Attempted phishing through mobile communication.' },
      // Add more reports as needed
    ],
  },

  // Scammer 17
  { 
    id: 17,
    name: 'Jessica Hall',
    contactInfo: 'www.scammer6.com',
    contactType: 'Website',
    reports: [
      { id: 1, name: 'Noah Davis', date: '2023-10-18', description: 'Scammed by the website, lost money on a fake purchase.' },
      { id: 2, name: 'Mia Turner', date: '2023-11-05', description: 'Fake products sold on the website, be aware!' },
      // Add more reports as needed
    ],
  },

  // Scammer 18
  { 
    id: 18,
    name: 'Daniel Perez',
    contactInfo: '678901234567',
    contactType: 'Bank Account',
    reports: [
      { id: 1, name: 'Ethan Robinson', date: '2023-12-15', description: 'Reported fraudulent transactions from this bank account.' },
      { id: 2, name: 'Isabella Harris', date: '2024-01-02', description: 'Beware of this bank account, involved in scam activities.' },
      // Add more reports as needed
    ],
  },

  // Scammer 19
  { 
    id: 19,
    name: 'Sarah Green',
    contactInfo: '601333555777',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'Mason Smith', date: '2024-02-10', description: 'Received suspicious messages from this mobile number.' },
      { id: 2, name: 'Scarlett Turner', date: '2024-03-20', description: 'Attempted scam calls, be cautious!' },
      // Add more reports as needed
    ],
  },

  // Scammer 20
  { 
    id: 20,
    name: 'Frank White',
    contactInfo: 'www.scammer7.com',
    contactType: 'Website',
    reports: [
      { id: 1, name: 'Oliver White', date: '2024-04-05', description: 'Fake products advertised on the website, avoid purchasing.' },
      { id: 2, name: 'Chloe Davis', date: '2024-05-12', description: 'Scammed by this website, lost money on a fake deal.' },
      // Add more reports as needed
    ],
  },
  { 
    id: 21,
    name: 'Margaret King',
    contactInfo: '789012345678',
    contactType: 'Bank Account',
    reports: [
      { id: 1, name: 'Ethan Robinson', date: '2024-06-20', description: 'Reported fraudulent transactions from this bank account.' },
      { id: 2, name: 'Isabella Harris', date: '2024-07-05', description: 'Beware of this bank account, involved in scam activities.' },
      // Add more reports as needed
    ],
  },

  // Scammer 22
  { 
    id: 22,
    name: 'Joseph Turner',
    contactInfo: '601876543210',
    contactType: 'Mobile',
    reports: [
      { id: 1, name: 'Liam Smith', date: '2024-08-12', description: 'Received scam calls from this mobile number.' },
      { id: 2, name: 'Sophie Turner', date: '2024-09-01', description: 'Attempted phishing through mobile communication.' },
      // Add more reports as needed
    ],
  },
    // Scammer 23
    { 
      id: 23,
      name: 'Dorothy Martinez',
      contactInfo: 'www.scammer8.com',
      contactType: 'Website',
      reports: [
        { id: 1, name: 'Noah Davis', date: '2022-01-15', description: 'Scammed by the website, lost money on a fake purchase.' },
        { id: 2, name: 'Mia Turner', date: '2022-02-20', description: 'Fake products sold on the website, be aware!' },
        // Add more reports as needed
      ],
    },
  
    // Scammer 24
    { 
      id: 24,
      name: 'Robert Scott',
      contactInfo: '890123456789',
      contactType: 'Bank Account',
      reports: [
        { id: 1, name: 'Ethan Robinson', date: '2022-03-10', description: 'Reported fraudulent transactions from this bank account.' },
        { id: 2, name: 'Isabella Harris', date: '2022-04-05', description: 'Beware of this bank account, involved in scam activities.' },
        // Add more reports as needed
      ],
    },
  
    // Scammer 25
    { 
      id: 25,
      name: 'Karen Phillips',
      contactInfo: '601999888777',
      contactType: 'Mobile',
      reports: [
        { id: 1, name: 'Mason Smith', date: '2022-05-12', description: 'Received scam calls from this mobile number.' },
        { id: 2, name: 'Scarlett Turner', date: '2022-06-20', description: 'Attempted phishing through mobile communication.' },
        // Add more reports as needed
      ],
    },
  
    // Scammer 26
    { 
      id: 26,
      name: 'William Moore',
      contactInfo: 'www.scammer9.com',
      contactType: 'Website',
      reports: [
        { id: 1, name: 'Oliver White', date: '2022-07-05', description: 'Fake products advertised on the website, avoid purchasing.' },
        { id: 2, name: 'Chloe Davis', date: '2022-08-12', description: 'Scammed by this website, lost money on a fake deal.' },
        // Add more reports as needed
      ],
    },
  
    // Scammer 27
    { 
      id: 27,
      name: 'Linda Davis',
      contactInfo: '111222333444',
      contactType: 'Bank Account',
      reports: [
        { id: 1, name: 'Ethan Robinson', date: '2022-09-01', description: 'Reported fraudulent transactions from this bank account.' },
        { id: 2, name: 'Isabella Harris', date: '2022-10-18', description: 'Beware of this bank account, involved in scam activities.' },
        // Add more reports as needed
      ],
    },
  
    // Scammer 28
    { 
      id: 28,
      name: 'Edward White',
      contactInfo: '601123456789',
      contactType: 'Mobile',
      reports: [
        { id: 1, name: 'Liam Smith', date: '2022-11-05', description: 'Received scam calls from this mobile number.' },
        { id: 2, name: 'Sophie Turner', date: '2022-12-15', description: 'Attempted phishing through mobile communication.' },
        // Add more reports as needed
      ],
    },
  
    // Scammer 29
    { 
      id: 29,
      name: 'Sarah Johnson',
      contactInfo: 'www.scammer10.com',
      contactType: 'Website',
      reports: [
        { id: 1, name: 'Noah Davis', date: '2023-01-02', description: 'Scammed by the website, lost money on a fake purchase.' },
        { id: 2, name: 'Mia Turner', date: '2023-02-10', description: 'Fake products sold on the website, be aware!' },
      ],
    },
  
    // Scammer 30
    { 
      id: 30,
      name: 'Michael Harris',
      contactInfo: '999888777666',
      contactType: 'Bank Account',
      reports: [
        { id: 1, name: 'Ethan Robinson', date: '2023-03-20', description: 'Reported fraudulent transactions from this bank account.' },
        { id: 2, name: 'Isabella Harris', date: '2023-04-05', description: 'Beware of this bank account, involved in scam activities.' },
      ],
    },  
];

export default scammersData;
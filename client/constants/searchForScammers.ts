// Define the Scammer type to match the structure in your data
interface Scammer {
  id: number;
  name: string;
  contactInfo: string;
  contactType: 'Mobile' | 'Bank Account' | 'Website';
}

// Dummy data for scammers
const scammersData: Scammer[] = [
  { id: 1, name: 'John Smith', contactInfo: '601110831460', contactType: 'Mobile' },
  { id: 2, name: 'Emma Johnson', contactInfo: 'www.scammer1.com', contactType: 'Website' },
  { id: 3, name: 'Michael Brown', contactInfo: '123456789012', contactType: 'Bank Account' },
  { id: 4, name: 'Linda Davis', contactInfo: '601220642871', contactType: 'Mobile' },
  { id: 5, name: 'William Wilson', contactInfo: 'www.scammer2.com', contactType: 'Website' },
  { id: 6, name: 'Patricia Moore', contactInfo: '234567890123', contactType: 'Bank Account' },
  { id: 7, name: 'James Anderson', contactInfo: '601932456789', contactType: 'Mobile' },
  { id: 8, name: 'Jennifer Lee', contactInfo: 'www.scammer3.com', contactType: 'Website' },
  { id: 9, name: 'David Taylor', contactInfo: '345678901234', contactType: 'Bank Account' },
  { id: 10, name: 'Susan Martinez', contactInfo: '601432109876', contactType: 'Mobile' },
  { id: 11, name: 'Richard Jackson', contactInfo: 'www.scammer4.com', contactType: 'Website' },
  { id: 12, name: 'Mary Harris', contactInfo: '456789012345', contactType: 'Bank Account' },
  { id: 13, name: 'Charles Clark', contactInfo: '601555123456', contactType: 'Mobile' },
  { id: 14, name: 'Patricia Lewis', contactInfo: 'www.scammer5.com', contactType: 'Website' },
  { id: 15, name: 'Elizabeth Young', contactInfo: '567890123456', contactType: 'Bank Account' },
  { id: 16, name: 'Thomas Walker', contactInfo: '601678987654', contactType: 'Mobile' },
  { id: 17, name: 'Jessica Hall', contactInfo: 'www.scammer6.com', contactType: 'Website' },
  { id: 18, name: 'Daniel Perez', contactInfo: '678901234567', contactType: 'Bank Account' },
  { id: 19, name: 'Sarah Green', contactInfo: '601333555777', contactType: 'Mobile' },
  { id: 20, name: 'Frank White', contactInfo: 'www.scammer7.com', contactType: 'Website' },
  { id: 21, name: 'Margaret King', contactInfo: '789012345678', contactType: 'Bank Account' },
  { id: 22, name: 'Joseph Turner', contactInfo: '601876543210', contactType: 'Mobile' },
  { id: 23, name: 'Dorothy Martinez', contactInfo: 'www.scammer8.com', contactType: 'Website' },
  { id: 24, name: 'Robert Scott', contactInfo: '890123456789', contactType: 'Bank Account' },
  { id: 25, name: 'Karen Phillips', contactInfo: '601999888777', contactType: 'Mobile' },
  { id: 26, name: 'William Moore', contactInfo: 'www.scammer9.com', contactType: 'Website' },
  { id: 27, name: 'Linda Davis', contactInfo: '111222333444', contactType: 'Bank Account' },
  { id: 28, name: 'Edward White', contactInfo: '601123456789', contactType: 'Mobile' },
  { id: 29, name: 'Sarah Johnson', contactInfo: 'www.scammer10.com', contactType: 'Website' },
  { id: 30, name: 'Michael Harris', contactInfo: '999888777666', contactType: 'Bank Account' },
];

// Modify the function to accept a type parameter
// Modify the function to accept a query parameter only
const searchForScammers = (query: string): Scammer[] => {
  // Implement your search logic based on the query
  // Return results for all types
  return scammersData.filter((scammer) => {
    return (
      scammer.contactType === 'Mobile' &&
      scammer.contactInfo.includes(query)
    ) || (
      scammer.contactType === 'Bank Account' &&
      scammer.contactInfo.includes(query)
    ) || (
      scammer.contactType === 'Website' &&
      scammer.contactInfo.includes(query)
    );
  });
};

export default searchForScammers;
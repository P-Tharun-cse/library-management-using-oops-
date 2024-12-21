import { Book, Member, Loan } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0743273565',
    available: true,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300&h=400',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0451524935',
    available: true,
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300&h=400',
  },
];

export const members: Member[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    membershipNumber: 'M001',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    membershipNumber: 'M002',
  },
];

export const loans: Loan[] = [
  {
    id: '1',
    bookId: '1',
    memberId: '1',
    borrowDate: new Date('2024-03-01'),
    dueDate: new Date('2024-03-15'),
  },
];
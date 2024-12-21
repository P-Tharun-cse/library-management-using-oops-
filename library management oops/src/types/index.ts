export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  available: boolean;
  coverUrl?: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  membershipNumber: string;
}

export interface Loan {
  id: string;
  bookId: string;
  memberId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
}
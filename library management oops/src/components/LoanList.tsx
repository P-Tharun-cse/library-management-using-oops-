import React from 'react';
import { Loan, Book, Member } from '../types';
import { Calendar } from 'lucide-react';

interface LoanListProps {
  loans: Loan[];
  books: Book[];
  members: Member[];
  onReturn: (loanId: string) => void;
}

export function LoanList({ loans, books, members, onReturn }: LoanListProps) {
  const getBook = (bookId: string) => books.find((b) => b.id === bookId);
  const getMember = (memberId: string) => members.find((m) => m.id === memberId);

  return (
    <div className="space-y-4">
      {loans.map((loan) => {
        const book = getBook(loan.bookId);
        const member = getMember(loan.memberId);

        if (!book || !member) return null;

        return (
          <div key={loan.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600">Borrowed by: {member.name}</p>
              </div>
              {!loan.returnDate && (
                <button
                  onClick={() => onReturn(loan.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Return
                </button>
              )}
            </div>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>Borrowed: {new Date(loan.borrowDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>Due: {new Date(loan.dueDate).toLocaleDateString()}</span>
              </div>
              {loan.returnDate && (
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>Returned: {new Date(loan.returnDate).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
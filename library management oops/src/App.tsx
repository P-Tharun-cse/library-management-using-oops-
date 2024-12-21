import React, { useState } from 'react';
import { Book, Member, Loan } from './types';
import { BookList } from './components/BookList';
import { MemberList } from './components/MemberList';
import { LoanList } from './components/LoanList';
import { books as initialBooks, members, loans as initialLoans } from './data/mockData';
import { Library, BookOpen, Users } from 'lucide-react';

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [loans, setLoans] = useState<Loan[]>(initialLoans);
  const [activeTab, setActiveTab] = useState<'books' | 'members' | 'loans'>('books');

  const handleBorrow = (bookId: string) => {
    const book = books.find((b) => b.id === bookId);
    if (!book || !book.available) return;

    // In a real app, we would show a modal to select a member
    const memberId = members[0].id;

    const newLoan: Loan = {
      id: String(loans.length + 1),
      bookId,
      memberId,
      borrowDate: new Date(),
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    };

    setLoans([...loans, newLoan]);
    setBooks(books.map((b) => 
      b.id === bookId ? { ...b, available: false } : b
    ));
  };

  const handleReturn = (loanId: string) => {
    const loan = loans.find((l) => l.id === loanId);
    if (!loan || loan.returnDate) return;

    setLoans(loans.map((l) =>
      l.id === loanId ? { ...l, returnDate: new Date() } : l
    ));
    setBooks(books.map((b) =>
      b.id === loan.bookId ? { ...b, available: true } : b
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Library className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Library Management System</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('books')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'books'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Books
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'members'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="h-5 w-5 mr-2" />
            Members
          </button>
          <button
            onClick={() => setActiveTab('loans')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'loans'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Library className="h-5 w-5 mr-2" />
            Loans
          </button>
        </div>

        {activeTab === 'books' && (
          <BookList books={books} onBorrow={handleBorrow} />
        )}
        {activeTab === 'members' && (
          <MemberList members={members} />
        )}
        {activeTab === 'loans' && (
          <LoanList
            loans={loans}
            books={books}
            members={members}
            onReturn={handleReturn}
          />
        )}
      </main>
    </div>
  );
}

export default App;
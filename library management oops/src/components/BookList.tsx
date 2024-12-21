import React from 'react';
import { Book } from '../types';
import { BookIcon } from 'lucide-react';

interface BookListProps {
  books: Book[];
  onBorrow: (bookId: string) => void;
}

export function BookList({ books, onBorrow }: BookListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mb-4">
              <BookIcon size={48} className="text-gray-400" />
            </div>
          )}
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className={`px-2 py-1 rounded-full text-sm ${
              book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {book.available ? 'Available' : 'Borrowed'}
            </span>
            <button
              onClick={() => onBorrow(book.id)}
              disabled={!book.available}
              className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
            >
              Borrow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
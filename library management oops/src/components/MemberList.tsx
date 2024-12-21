import React from 'react';
import { Member } from '../types';
import { UserCircle } from 'lucide-react';

interface MemberListProps {
  members: Member[];
}

export function MemberList({ members }: MemberListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {members.map((member) => (
        <div key={member.id} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
          <UserCircle size={40} className="text-gray-400" />
          <div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.email}</p>
            <p className="text-sm text-gray-500">Member ID: {member.membershipNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
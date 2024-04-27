import { ReactNode } from 'react';

const Board = ({ children }: { children: ReactNode }) => {
    
  return (
    <div className='board'>{children}</div>
  );
};

export default Board;

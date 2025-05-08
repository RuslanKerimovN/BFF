import { type ReactNode } from 'react';
import styles from './App.module.css';
import { type User } from '../types/types';

export const getColumns = (callback: (id: number) => void, id: Record<number, boolean>) => [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }: { row: { original: User } }): ReactNode => (
      <>
        {row.original.posts.length > 0 && (
          <>
            <button onClick={() => callback(row.original.id)} className={styles.button}>
              {id ? '▼' : '▶'}
            </button>
          </>
        )}
        <span style={{ marginLeft: row.original.posts.length === 0 ? '10px' : 0 }}>
          {row.original.name}
        </span>
      </>
    ),
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Country',
    accessorKey: 'country',
  },
];

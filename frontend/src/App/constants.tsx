import { type ReactNode } from 'react';
import { type User } from './types';
import styles from './index.module.css';

export const DATA: User[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 28,
    email: 'john@example.com',
    country: 'Russia',
    lastName: 'Kerimov',
    createAt: '11.11.2025',
    posts: [],
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 32,
    email: 'jane@example.com',
    country: 'Russia',
    lastName: 'Kerimov',
    createAt: '11.11.2025',
    posts: [],
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 45,
    email: 'bob@example.com',
    country: 'Russia',
    lastName: 'Kerimov',
    createAt: '11.11.2025',
    posts: [],
  },
];

export const getColumns = (callback: (id: number) => void, id: Record<number, boolean>) => [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }: { row: { original: User } }): ReactNode => (
      <>
        <button onClick={() => callback(row.original.id)} className={styles.button}>
          {id ? '▼' : '▶'}
        </button>
        {row.original.name}
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

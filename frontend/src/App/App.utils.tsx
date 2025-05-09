import { type ReactNode } from 'react';
import styles from './App.module.css';
import { type User } from '../types/types';

export const getColumns = (callback: (id: number) => void, id: Record<number, boolean>) => [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }: { row: { original: User } }): ReactNode => {
      const { posts, name, id: rowId } = row.original ?? {};
      const hasLength = posts && posts.length > 0;

      return (
        <>
          {hasLength && (
            <>
              <button onClick={() => callback(rowId)} className={styles.button}>
                {id ? '▼' : '▶'}
              </button>
            </>
          )}
          <span style={{ marginLeft: hasLength ? 0 : '10px' }}>{name}</span>
        </>
      );
    },
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

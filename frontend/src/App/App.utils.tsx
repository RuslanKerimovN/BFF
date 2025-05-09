import { type ReactNode } from 'react';
import styles from './App.module.css';
import { type User } from '../types/types';
import { type Devices } from '../types';

export const getColumns = (
  callback: (id: number) => void,
  id: Record<number, boolean>,
  typeOfDevice: Devices
) => {
  const columns = [
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
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
    {
      header: 'Country',
      accessorKey: 'country',
    },
  ];

  return typeOfDevice === 'Desktop' ? columns : columns.slice(0, 3);
};

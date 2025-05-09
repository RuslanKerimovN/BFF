import { type FC, Fragment, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useQuery } from '@apollo/client';

import styles from './App.module.css';
import { getColumns } from './App.utils';
import { PostCard } from '../components';
import { GET_USERS, GET_USERS_MOBILE } from '../services';
import { typeOfDevice } from '../utils';
import { type User } from '../types';

export const App: FC = () => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const { data, loading, error } = useQuery<{ users?: User[] }>(
    typeOfDevice === 'Desktop' ? GET_USERS : GET_USERS_MOBILE
  );

  const toggleRow = (rowId: number): void => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const columns = getColumns(toggleRow, expandedRows, typeOfDevice);

  const table = useReactTable({
    data: data?.users ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.header}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <tr>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.data}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {expandedRows[row.original.id] && (
                <tr>
                  <td colSpan={columns.length}>
                    <div className={styles.posts}>
                      {row.original.posts?.map((post) => <PostCard key={post.id} post={post} />)}
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import { type ReactNode, type FC } from 'react';
import styles from './HandlerHoc.module.css';

interface HandlerHocProps {
  isError?: boolean;
  isLoading?: boolean;
  noData?: boolean;
  refetch?: () => void;
  children: ReactNode;
}

/**
 * Данный компонент используется для работы со статусами запроса
 * @param isError - ошибка
 * @param isLoading - загрузка
 * @param noData - отсутствие данных запроса
 * @param refetch - коллбэк перезапроса
 * @returns JSX
 */
export const HandlerHoc: FC<HandlerHocProps> = ({
  isError,
  isLoading,
  noData,
  refetch,
  children,
}) => {
  const handleRefetch = () => {
    if (refetch) {
      refetch();
    }
  };

  if (isLoading) {
    return (
      <div className={styles.handler}>
        <h1>...Загрузка...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.handler}>
        <h1>...Ошибка...</h1>
        <button className={styles.button} onClick={handleRefetch}>
          Попробуйте еще
        </button>
      </div>
    );
  }

  if (noData) {
    return (
      <div className={styles.handler}>
        <h1>...Нет данных...</h1>
        <button className={styles.button} onClick={handleRefetch}>
          Попробуйте еще
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

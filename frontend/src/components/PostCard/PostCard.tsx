import { useState, type FC } from 'react';
import { type Post } from '../../types';
import { getFormattedDate, typeOfDevice } from '../../utils';
import styles from './PostCard.module.css';
import { useEditPost } from '../../hooks';

interface PostCardProps {
  post: Post;
}

const FORMAT = 'dd.MM.yyyy';

/**
 * Данный компонент используется для отображения карточки поста
 * @param post - пост
 * @returns JSX
 */
export const PostCard: FC<PostCardProps> = ({ post }) => {
  const { title, content, authorId, createdAt, updateAt, published, id } = post;
  const [isPublished, setIsPublished] = useState(published);
  const { data, isError, isLoading, updatePost } = useEditPost();

  const handlerPublished = async () => {
    await updatePost(id, { published: !isPublished }).then(() => {
      setIsPublished((prev) => !prev);
    });
  };

  if (isLoading) {
    return 'loading';
  }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.content_block}>
        <div className={styles.info}>
          {typeOfDevice === 'Desktop' && (
            <>
              <p>Дата создания</p>
              <p>{getFormattedDate(FORMAT, createdAt)}</p>

              <p>Дата публикации</p>
              <p>{getFormattedDate(FORMAT, updateAt)}</p>
            </>
          )}

          <label htmlFor='published'>Опубликовано</label>
          <input type='checkbox' id='published' checked={isPublished} onChange={handlerPublished} />

          <button className={`${styles.button} ${styles.edit}`} disabled={isLoading}>
            Правки
          </button>
          <button className={`${styles.button} ${styles.delete}`} disabled={isLoading}>
            Удаление
          </button>
        </div>
        <div className={styles.article}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

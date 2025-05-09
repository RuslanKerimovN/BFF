import { useState, type FC } from 'react';
import { type Post } from '../../types';
import { getFormattedDate, typeOfDevice } from '../../utils';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

const FORMAT = 'dd.MM.yyyy';

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const { title, content, authorId, createdAt, updateAt, published, id } = post;
  const [isPublished, setIsPublished] = useState(published);

  const handlerPublished = (): void => {
    setIsPublished((prev) => !prev);
  };

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
        </div>
        <div className={styles.article}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

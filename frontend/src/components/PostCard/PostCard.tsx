import { useState, type FC } from 'react';
import { type Post } from '../../types';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

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
          <p>Дата создания</p>
          <p>{createdAt}</p>

          <p>Дата публикации</p>
          <p>{updateAt}</p>

          <label htmlFor='published'>Опубликовано</label>
          <input type='checkbox' id='published' checked={isPublished} onClick={handlerPublished} />
        </div>
        <div className={styles.article}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

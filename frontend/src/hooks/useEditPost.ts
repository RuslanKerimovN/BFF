import { useCallback, useState } from 'react';

interface UpdatePost {
  title?: string;
  content?: string;
  published?: boolean;
}

/** Данный хук используется для обновления поста и возвращает статусы для их обработки */
export const useEditPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  const updatePost = useCallback(async (id: number, post: UpdatePost) => {
    try {
      const result = await fetch(`http://localhost:3000/api/posts/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.ok) {
        setData(await result.json());
      }
    } catch {
      setIsError(true);
      setData(undefined);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    isError,
    data,
    updatePost,
  };
};

import { createContext, useContext, useState, useEffect } from 'react';

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/artikel', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          throw new Error('Error fetching articles');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <ApiContext.Provider value={articles}>{children}</ApiContext.Provider>
    );
  };
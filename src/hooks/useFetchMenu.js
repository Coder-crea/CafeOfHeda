// src/hooks/useFetchMenu.js
import { useEffect, useState } from "react";
import Papa from "papaparse";

const GOOGLE_SHEETS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSx0Pfmd9gji0cpdTYwdGxpbUJto8fn5uBLG1_dngjJdWLMcuxBXMewEiuCq2J2s0tyD7_vLA0aEpTB/pub?gid=487823578&single=true&output=csv";

const CACHE_KEY_PREFIX = "cached_menu_";
const TWO_HOURS = 2 * 60 * 60 * 1000;

export const useFetchMenu = (category) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CACHE_KEY = CACHE_KEY_PREFIX + category;

    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      try {
        const { timestamp, data } = JSON.parse(cachedData);
        const isNotExpired = Date.now() - timestamp < TWO_HOURS;

        if (isNotExpired && Array.isArray(data)) {
          setData(data);
          setIsLoading(false);
          return;
        }
      } catch (e) {
        console.error("Ошибка парсинга кэша", e);
      }
    }

    setIsLoading(true);
    setError(null);

    Papa.parse(GOOGLE_SHEETS_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const allItems = results.data || [];

          // Нормализация: убираем лишние пробелы и регистр
          const targetCategory = category.trim().toLowerCase();

          const filtered = allItems.filter(
            (item) =>
              item?.category &&
              item.category.trim().toLowerCase() === targetCategory
          );

          if (!Array.isArray(filtered)) {
            throw new Error("Фильтрация данных завершилась некорректно");
          }

          if (filtered.length === 0) {
            setError(`Нет данных для категории «${category}»`);
          } else {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                timestamp: Date.now(),
                data: filtered,
              })
            );
            setData(filtered);
          }
        } catch (err) {
          setError(`Не удалось загрузить данные: ${err.message}`);
        } finally {
          setIsLoading(false);
        }
      },
      error: (err) => {
        setError("Не удалось загрузить данные с сервера");
        setIsLoading(false);
        console.error("Ошибка парсинга CSV:", err);
      },
    });
  }, [category]);

  return { data, isLoading, error };
};

"use client";

import { useCallback, useEffect, useState } from "react";

type Updater<T> = T | ((prev: T) => T);

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [value, setValueState] = useState<T>(initialValue);

  // 初回マウント時にlocalStorageから復元する(保存処理とは独立させ競合を防ぐ)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setValueState(JSON.parse(raw) as T);
    } catch {
      // localStorageが使えない環境では初期値のまま
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = useCallback(
    (updater: Updater<T>) => {
      setValueState((prev) => {
        const next = typeof updater === "function" ? (updater as (prev: T) => T)(prev) : updater;
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
        } catch {
          // 保存に失敗しても致命的ではないため無視
        }
        return next;
      });
    },
    [key]
  );

  return [value, setValue] as const;
}

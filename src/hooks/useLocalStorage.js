import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [tasks, setTasks] = useState(
      () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
    );
  
    useEffect(() => {
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    return [tasks, setTasks];
  };
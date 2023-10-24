import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { ListTasks } from "./ListTasks/ListTasks";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PokemonList } from "./PokemonList/PokemonList";

export const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [pokemons, setPokemon] = useState([]);
  console.log(pokemons)

  const addTask = ({ title, desc }) => {
    setTasks((prevTasks) => [...prevTasks, { id: nanoid(), title, desc }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => {
        return response.json();
      })
      .then((pokemons) => {
        console.log(pokemons);
        setPokemon(pokemons);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <TaskForm onSubmit={addTask} />
        <ListTasks onDelete={deleteTask} tasks={tasks} />
        <PokemonList pokemons={pokemons} />
      </Layout>
    </>
  );
};

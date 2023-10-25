import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { ListTasks } from "./ListTasks/ListTasks";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PokemonList } from "./PokemonList/PokemonList";
import { PokemonForm } from "./PokemonForm/PokemonForm";

export const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [pokemon, setPokemon] = useState([]);

  console.log(pokemon);

  const addTask = ({ title, desc }) => {
    setTasks((prevTasks) => [...prevTasks, { id: nanoid(), title, desc }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  

  useEffect(() => {
    const fetchPokemon =()=>{
      fetch('https://pokeapi.co/api/v2/pokemon/').then(response =>{
        return response.json()
      }).then(pokemon =>{
        console.log(pokemon)
        setPokemon(prevState => [...prevState,...pokemon.results])
      })
    }
    fetchPokemon()
  }, []);

  return (
    <>
      <Layout>
        <TaskForm onSubmit={addTask} />
        <ListTasks onDelete={deleteTask} tasks={tasks} />
        <PokemonForm />
        <PokemonList pokemon={pokemon} />
      </Layout>
    </>
  );
};

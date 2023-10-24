import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { ListTasks } from "./ListTasks/ListTasks";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PokemonList } from "./PokemonList/PokemonList";
import { PokemonForm } from "./PokemonForm/PokemonForm";
import { fetchPokemon } from "./services/pokemonApi";

export const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [pokemon, setPokemon] = useState([]);
 
  console.log(pokemon)

  const addTask = ({ title, desc }) => {
    setTasks((prevTasks) => [...prevTasks, { id: nanoid(), title, desc }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

// //  const handleSubmit = (query)=>{
//   setQuery(query)
//  }

useEffect(()=>{
  const fetchData =()=>{
    const resp = fetchPokemon()
    console.log(resp.json())
  }
  fetchData()
},[])


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

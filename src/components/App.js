import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { ListTasks } from "./ListTasks/ListTasks";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PokemonList } from "./PokemonList/PokemonList";
import { PokemonForm } from "./PokemonForm/PokemonForm";
import { ForecastList } from "./ForecastList/ForecastList";
import { ForecastForm } from "./ForecastForm/ForecastForm";
import { forecastApi } from "./services/weatherApi";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "fa91f11087f3486f9b0152206232510";

export const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState([]);
  const [query,setQuery] = useState('')
  
  

  const addTask = ({ title, desc }) => {
    setTasks((prevTasks) => [...prevTasks, { id: nanoid(), title, desc }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleSubmit =(query)=>{
    setQuery(query)
  }

  useEffect(() => {
    const fetchPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => {
          return response.json();
        })
        .then((pokemon) => {
          setPokemon((prevState) => [...prevState, ...pokemon.results]);
        });
    };
    fetchPokemon();
  }, []);

  useEffect(()=>{
    forecastApi(query).then(data=> console.log(data))
  },[query])

  // useEffect(() => {
  //   const forecastApi = (name ='Kiev', value = 3) => {
  //     fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${name}&days=${value}`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data)
  //         setData((prevState) => [
  //           ...prevState,
  //           ...data.forecast.forecastday,
  //         ]);
  //       }).catch(error =>{
  //         console.error(error)
  //       });
  //   };
  //   forecastApi();
  // }, [query]);

  return (
    <>
      <Layout>
        <TaskForm onSubmit={addTask} />
        <ListTasks onDelete={deleteTask} tasks={tasks} />
        <ForecastForm onSubmit={handleSubmit}/>
        <ForecastList data={data} />
        <PokemonForm />
        <PokemonList pokemon={pokemon} />
      </Layout>
    </>
  );
};

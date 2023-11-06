import { ForecastItem } from "../ForecastItem/ForecastItem";

export const ForecastList = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((item,idx) => (
          <li key={idx} style={{listStyle:'none'}}>
            <ForecastItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

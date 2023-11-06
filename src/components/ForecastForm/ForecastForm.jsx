export const ForecastForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.query.value);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <select name="days">
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

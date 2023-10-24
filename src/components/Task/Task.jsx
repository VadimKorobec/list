import Button from "react-bootstrap/Button";

export const Task = ({ task:{id,title,desc}, onDelete }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>{title}</h5>
        <Button
          variant="warning"
          style={{ marginLeft: "auto", marginRight: "10px" }}
          type="button"
          
        >
          Change
        </Button>
        <Button variant="danger" type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
      <p>{desc}</p>
    </div>
  );
};

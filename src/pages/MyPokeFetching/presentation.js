const Poke = ({ name, image, exp, id, handlePokeDelete }) => {
  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <div>{name}</div>
      <div>{exp}</div>
      <button
        onClick={() => {
          handlePokeDelete(id);
        }}
      >
        DELETE!!!111
      </button>
    </div>
  );
};

export default Poke;

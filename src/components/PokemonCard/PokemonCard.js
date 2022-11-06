import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PokemonCard = ({
  name,
  image,
  experience,
  handleDeletePokemon,
  id,
  handlePokemonsDetail,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <button
        style={{ marginLeft: "150px" }}
        onClick={() => {
          handleDeletePokemon(id);
        }}
      >
        X
      </button>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
        onClick={() => handlePokemonsDetail(name)}
        style={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          My total experience:{experience}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;

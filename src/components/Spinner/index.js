import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

const Spinner = (props) => {
  return (
    <CircularProgress
      variant="indeterminate"
      disableShrink
      sx={{
        color: "red",
        animationDuration: "700ms",
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: "round",
        },
      }}
      size={60}
      thickness={10}
      {...props}
    />
  );
};

export default Spinner;

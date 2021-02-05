function LocationFavouriteButton({ favourite, handleClick }) {
  return (
    <button onClick={handleClick}>{favourite ? "Un-Heart!" : "Heart!"}</button>
  );
}

export default LocationFavouriteButton;

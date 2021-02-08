function FaciltiyList({ facilities }) {
  return (
    // Maps over facility list and displays icon with title and alt text for each facility
    <>
      {facilities.map((element, i) => {
        switch (element) {
          case "Parking":
            return (
              <span key={element}>
                <i
                  className="fas fa-car"
                  title="Parking"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Parking</span>
              </span>
            );
          case "Water":
            return (
              <span key={element}>
                <i
                  className="fas fa-faucet"
                  title="Water"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Water</span>
              </span>
            );
          case "Food":
            return (
              <span key={element}>
                <i
                  className="fas fa-utensils"
                  title="Food"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Food</span>
              </span>
            );
          case "Toilets":
            return (
              <span key={element}>
                <span>
                  <i
                    className="fas fa-restroom"
                    title="Toilets"
                    aria-hidden="true"
                  ></i>
                  <span className="sr-only">Toilets</span>
                </span>
              </span>
            );
          case "Off-Lead":
            return (
              <span key={element}>
                <i
                  className="fas fa-dog"
                  title="Off-lead"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Off-lead</span>
              </span>
            );
          default:
            return <span key={element}>No faciilites are listed</span>;
        }
      })}
    </>
  );
}
export default FaciltiyList;

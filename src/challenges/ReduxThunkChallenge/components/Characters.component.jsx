import { useDispatch, useSelector } from "react-redux";
import { setSelectedCharacter } from "../reduxSlices/charactersSlice";

const Characters = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);

  const handleOnCharacterChange = (e) => {
    let selectedCharacter = characters.filter((selectedCharacter) => {
      return selectedCharacter.name === e.target.value;
    })[0];
    dispatch(setSelectedCharacter(selectedCharacter));
  };

  return (
    <div>
      <h1>Our stars</h1>
      <p>Who do you want to send a gift to?</p>
      <select
        onChange={(e) => handleOnCharacterChange(e)}
        name="characters"
        id="characters"
      >
        <option selected={true}>select a charcter</option>
        {characters.map((character, i) => {
          return <option key={i}>{character.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Characters;

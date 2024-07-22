import InputGroup from "./InputGroup";
import InputLabel from "./InputLabel";

function UserInput({ changeHandler }) {
  return (
    <section id="user-input">
      <InputGroup>
        <InputLabel
          label="Initial Investment"
          type="Number"
          required
          id="initial"
          onChange={changeHandler}
        />
        <InputLabel
          label="Annual Investment"
          type="Number"
          required
          id="annual"
          onChange={changeHandler}
        />
      </InputGroup>
      <InputGroup>
        <InputLabel
          label="Expected Return"
          type="Number"
          required
          id="expected"
          onChange={changeHandler}
        />
        <InputLabel
          label="Duration"
          type="Number"
          required
          id="duration"
          onChange={changeHandler}
        />
      </InputGroup>
    </section>
  );
}

export default UserInput;

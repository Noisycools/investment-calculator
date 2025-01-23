import InputGroup from "./InputGroup";
import InputLabel from "./InputLabel";

function UserInput({inputData, changeHandler}) {
    return (
        <section id="user-input">
            <InputGroup>
                <InputLabel
                    label="Initial Investment"
                    type="Number"
                    required
                    id="initial"
                    value={inputData.initialInvestment}
                    onChange={changeHandler}
                />
                <InputLabel
                    label="Annual Investment"
                    type="Number"
                    required
                    id="annual"
                    value={inputData.annualInvestment}
                    onChange={changeHandler}
                />
            </InputGroup>
            <InputGroup>
                <InputLabel
                    label="Expected Return"
                    type="Number"
                    required
                    id="expected"
                    value={inputData.expectedReturn}
                    onChange={changeHandler}
                />
                <InputLabel
                    label="Duration"
                    type="Number"
                    required
                    id="duration"
                    value={inputData.duration}
                    onChange={changeHandler}
                />
            </InputGroup>
        </section>
    );
}

export default UserInput;

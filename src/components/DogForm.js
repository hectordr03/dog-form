import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const DogForm = () => {
    const [value, setValue] = React.useState({});

    return (
        <div className="Dog-Form" >
            <form>
                <label>Name</label>
                <input type='text'></input>
                <label>Breed</label>
                <input type='text'></input>
                <label>Birthday</label>
                <input type='text'></input>
                <label>Gender</label>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                    <ToggleButton value={2}>Radio 2</ToggleButton>
                    <ToggleButton value={3}>Radio 3</ToggleButton>
                </ToggleButtonGroup>
            </form>
        </div>
    )
}


export default DogForm;
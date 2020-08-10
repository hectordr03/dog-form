import React from 'react';


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
                

            </form>
        </div >
    )
}


export default DogForm;
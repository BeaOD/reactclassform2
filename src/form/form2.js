import React, { useState } from 'react';




function form2(props) {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault()
        // console.log({name,contact,location})
        props.addContact({ name, contact, location, id: Math.random() });
        setName("");
        setContact("");
        setLocation("");
    }


    return (
        <>


            <form >
                <div>
                    <label>Name</label>
                    <br />
                    <input type='text' placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                </div>

                <div>
                    <label>Contact</label>
                    <br />
                    <input type='number' placeholder="contact" value={contact} onChange={(e) => { setContact(e.target.value) }}></input>
                </div>

                <div>
                    <label>Location</label>
                    <br />
                    <input type='text' placeholder="location" value={location} onChange={(e) => { setLocation(e.target.value) }} ></input>
                </div>


                <button onClick={handlesubmit} >Submit</button>

            </form>

        </>
    )
}

export default form2
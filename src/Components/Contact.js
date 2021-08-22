import React,{useState} from 'react';
import './Contact.css'
const Contact = () => {
    const [detail,setDetail] = useState([]);
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    //FOR EDIT
    const [isEditing, setIsEditing] = useState(false);
    //FOR CURRENT NAME TO UPDATE
    const [currentName,setCurrentName] = useState({});
    const [currentAge,setCurrentAge] = useState({});


    //FOr Age
    const handleChangeAge = (event) =>{
        setAge(event.target.value)
    }

    //FOr Name
    const handleChangeName = (event) =>{
        setName(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetail([
            ...detail,
            {
                id: detail.length+1,
                text: name.trim(),
                age: age.trim()
            }
        ]);

        // console.log(detail);
        setName("");
        setAge("");
    }
    //FOR EDITING
    //CLICKING EDIT BUTTON
    const handleEditClick = data => {
        setIsEditing(true);
        setCurrentName({...data});
        setCurrentAge({...data});
        // console.log(currentName)
    }
    //CHANGE IN INPUT IN NAME
    const handleEditInputChange = e =>{
        setCurrentName({
            ...currentName,
            text: e.target.value,
        });
        // console.log(currentName);
    }
    //CHANGE IN INPUT IN NAME
    const handleEditInputChangeAge =e =>{
        setCurrentAge({
            ...currentAge,
            age: e.target.value,
        });
        // console.log('CURRENT AGE:',currentAge)
    }

    const handleUpdateName = (id , updatedName) =>{
        const updatedDetail = detail.map((data) =>{
            return data.id === id ? updatedName: data;
        }); 
        setIsEditing(false);
        setName(updatedDetail);
    }

    const handleUpdateAge = (id , updatedAge) =>{
        const updatedDetail = detail.map((data) =>{
            return data.id === id ? updatedAge: data;
        }); 
        setIsEditing(false);
        setAge(updatedDetail);
    }

    //SUBMITING EDIT FORM
    const handleEditFormSubmit = e =>{
        e.preventDefault();
        handleUpdateName(currentName.id, currentName);
        handleUpdateAge(currentAge.id,currentAge)
    }

    
    const deleteDetail = (id) => {
        const newDetail = detail.filter((person) =>person.id !==id);
        setDetail(newDetail);
    }
    
    const names = detail.map((data) =>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th></th>
            </tr>
            <tr key={data.id}>
                <th>{data.text}</th>
                <th>{data.age}</th>
                <th><button onClick={() => deleteDetail(data.id)}> Delete</button>
            <button onClick={() => handleEditClick(data)}>Edit</button></th>
            </tr>
        </table>
    )

    return(
        <div>
        <h1>Details of People:</h1>
            { isEditing ? (
                <form>
                <label>
                    Name:
                    <input 
                    type="text" 
                    name="name" 
                    value={currentName.text}
                    onChange={handleEditInputChange}
                    />
                </label>
                <label>
                    Age:
                    <input 
                    type="text" 
                    name="age" 
                    value={currentAge.age}
                    onChange={handleEditInputChangeAge}
                    />
                </label> 
                <button 
                onClick={handleEditFormSubmit}
                >Update</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>

            </form>
            ) : (
                <form>
                <label>
                    Name:
                    <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={handleChangeName}
                    />
                </label> 
                <label>
                    Age:
                    <input 
                    type="text" 
                    name="name" 
                    value={age}
                    onChange={handleChangeAge}
                    />
                </label>
                <button 
                onClick={handleSubmit}
                >Submit</button>
            </form>
            ) } 
            {/* {names} */}
        </div>
    );
}

export default Contact;
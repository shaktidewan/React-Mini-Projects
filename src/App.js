import './App.css';
import React,{useRef, useState} from 'react';

function App() {
  const [state,setstate] = useState({
    title: "It will be removed",
    employeeData: [],
    act:0,
    index:""
  });

  const myForm = useRef(null);
  const txtName = useRef(null);
  const txtAge = useRef(null);


  const handleSubmit = (e) =>{
    e.preventDefault();
    let arrayEmp = state.employeeData;
    let name = txtName.current.value;
    let age = txtAge.current.value;

    if(state.act === 0){
      let newEmployee  = {
        "name": name,
        "age" : age
      }
      arrayEmp.push(newEmployee);
    }else{
      let index = state.index;
      arrayEmp[index].name = name;
      arrayEmp[index].age = age;
    }
    
    setstate({
      employeeData : arrayEmp,
      act: 0
    })
    // console.log(state.employeeData);
    myForm.current.reset();
  }

  const handleEdit = (i) =>{
    let employeeData = state.employeeData;
    console.log(employeeData);
    txtName.current.value = employeeData[i].name;
    txtAge.current.value = employeeData[i].age;

    setstate({
      employeeData: employeeData,
      act:1,
      index: i
    })

  }
  console.log(txtName)

  const handleDelete = (index) => {
    let lists = [...state.employeeData];
    lists.splice(index,1);
    setstate({employeeData:lists});
  }
  return (
    <div className="App">
      <h1>{state.title}</h1>
      <form ref={myForm}>
        <label>Name:</label>
        <input 
          type="text"
          ref={txtName}
          placeholder="Enter Name"
        />
        <label>Age:</label>
        <input 
          type="text"
          ref={txtAge}
          placeholder="Enter Age"
        />
        <button onClick={e=> handleSubmit(e)}>Save</button>
      </form>

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {
          state.employeeData.map((data,index) => 
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <button onClick={() =>handleDelete(index)}>Delete</button>
            <button onClick={() =>handleEdit(index)}>Edit</button>
          </tr>
          )
        }

      </table>

    </div>
  );
}

export default App;

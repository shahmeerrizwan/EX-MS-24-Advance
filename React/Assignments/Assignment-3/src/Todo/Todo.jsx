import { useState } from "react";
import { sendData } from "../Firebase/firebaseMethod";

function Todo() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();


const dataSend =()=>{
    sendData('data',inputValue)
    .then(()=>{
        console.log('Data Send Successfully');
    })
    .catch((err)=>{
        console.log(err,"Data Not Send");
    })
}


  function addItem() {
    if (inputValue === "") {
      alert("Enter a Valid Value")
    } else {
      const copyList = [...list];
      copyList.push(inputValue);
      setList(copyList);
      setInputValue('');
      dataSend();
    }
  }

  function deleteItem(index) {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editItem(index) {
    setInputValue(list[index]);
    setEditMode(true);
    setCurrentIndex(index);
  }

  function updateItem() {
    const copyList = [...list];
    copyList[currentIndex] = inputValue;
    setList(copyList);
    setEditMode(false);
    setInputValue('');
    sendData();
  }

  function updateText(e) {
    const value = e.target.value;
    setInputValue(value);
    if (e.key === 'Enter') {
      addItem();
    }
  }

  return (
    <div className="main">
      <div className="App-header">
        <h2>Todo App</h2>
        <input
          onChange={updateText}
          onKeyPress={updateText}
          placeholder="Enter Any Text"
          value={inputValue}
          type="text"
        />
        {editMode ?
          <button className="btn" onClick={updateItem}>Update</button>
          :
          <button className="btn" onClick={addItem}> Add </button>}
        <ul>
          {list.map(function (item, index) {
            return (
              <li key={index} className="update">
                {item}
                <button className="btn" onClick={() => deleteItem(index)}>Delete</button>
                <button className="btn" onClick={() => editItem(index)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
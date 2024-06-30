
// function StudTable(props) {
//     const {id, name, avgmarks, cgpa} = props.Students || {}
    
//     //(2)
//     const handleDelete = () => {
//         props.setDeleteId(id)
//     }
//     const handleEdit = () => {
//         props.setEdit(Students)
//     }

//     return (
//         <tr>
//             <td>{id}</td>
//             <td>{name}</td>
//             {/* <td>{gender}</td> */}
//             {/* <td>{major}</td> */}
//             <td>{avgmarks}</td>
//             <td>{cgpa}</td>
//             {/* <td>{grade}</td> */}

//             {/* 1 */}
//             <td><button onClick={handleEdit}>Edit</button>
//             <button onClick={handleDelete}>Delelte</button></td>
//         </tr>
//     )
// }

// export default StudTable




import React, { useState } from 'react';
import { toast } from 'react-toastify';

function StudTable({ Students, setDeleteId, setEdit }) {
  const { id, name, avgmarks, cgpa } = Students;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...Students });

  const handleDelete = () => {
    setDeleteId(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setEdit(editedData);
    setIsEditing(false);
    toast.success('Student details updated successfully');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>{id}</td>
          <td><input name="name" value={editedData.name} onChange={handleChange} /></td>
          <td><input name="avgmarks" value={editedData.avgmarks} onChange={handleChange} /></td>
          <td><input name="cgpa" value={editedData.cgpa} onChange={handleChange} /></td>
          <td>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{id}</td>
          <td>{name}</td>
          <td>{avgmarks}</td>
          <td>{cgpa}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default StudTable;


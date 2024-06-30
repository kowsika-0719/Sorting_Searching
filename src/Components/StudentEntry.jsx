// import React, { useEffect, useState } from 'react';
// import StudTable from './StudTable';
// import Topbar from './Topbar';

// function StudentEntry() {
//   const [apires, setApiRes] = useState([]);
//   const [list, setList] = useState([]);
//   const [names, setNames] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [search, setSearch] = useState('');

//   // (4)
//   const [deleteId, setDeleteId] = useState('');
//   const [edit, setEdit] = useState(null);

//   useEffect(() => {
//     fetch('https://mocki.io/v1/8d9a0c27-8d40-47ca-b4c6-63ce7a648df8')
//       .then((res) => res.json())
//       .then((json) => {
//         setApiRes(json);
//         setList(json);
//         const na = json.map((obj) => obj.name);
//         setNames([...new Set(na)]);
//         // (5)
//         const del = json.find((obj) => obj.id);
//         setDeleteId(del);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     let res = [...apires];
//     if (selectedCategory === 'Asc') {
//       res.sort((a, b) => a.avgmarks - b.avgmarks);
//     } else if (selectedCategory === 'Desc') {
//       res.sort((a, b) => b.avgmarks - a.avgmarks);
//     }
//     setList(res);
//   }, [selectedCategory, apires]);

//   useEffect(() => {
//     if (search === '') {
//       setList(apires);
//     } else {
//       const filteredList = apires.filter((obj) =>
//         obj.name.toLowerCase().includes(search.toLowerCase()));
//       setList(filteredList);
//     }
//   }, [search]);


//   // (6)
//   useEffect(()=>{
//     if(deleteId){
//       const filteredList = list.filter((obj) => obj.id !== deleteId);
//       setList(filteredList);
//       setApiRes(filteredList);
//       setDeleteId('');
//     }
//   },[deleteId,list])

//   useEffect(()=>{
//     if(edit){
//       const filteredList = list.map((obj) => obj.id === edit.id ? edit : obj);
//       setList(filteredList);
//       setApiRes(filteredList);
//       setEdit(null);
//     }
//   },[])

//   return (
//     <>
//       <Topbar setSelectedCategory={setSelectedCategory} setSearch={setSearch} />
//       <div className="Stu-list">
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               {/* <th>Gender</th> */}
//               {/* <th>Major</th> */}
//               <th>Average Marks</th>
//               <th>CGPA</th>
//               {/* 3rd  */}
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
          
//             {list.map((obj) => (
//               // (7)
//               <StudTable key={obj.id} names={obj.id} Students={obj} setDeleteId={setDeleteId} setEdit={setEdit}/>
//               // <StudTable key={obj.id} names={obj.id} Students={obj}/>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default StudentEntry;





import React, { useEffect, useState } from 'react';
import StudTable from './StudTable';
import Topbar from './Topbar';

function StudentEntry() {
  const [apires, setApiRes] = useState([]);
  const [list, setList] = useState([]);
  const [names, setNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');

  const [deleteId, setDeleteId] = useState('');
  const [edit, setEdit] = useState(null); // Changed to null to differentiate from empty string

  useEffect(() => {
    fetch('https://mocki.io/v1/8d9a0c27-8d40-47ca-b4c6-63ce7a648df8')
      .then((res) => res.json())
      .then((json) => {
        setApiRes(json);
        setList(json);
        const na = json.map((obj) => obj.name);
        setNames([...new Set(na)]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let res = [...apires];
    if (selectedCategory === 'Asc') {
      res.sort((a, b) => a.avgmarks - b.avgmarks);
    } else if (selectedCategory === 'Desc') {
      res.sort((a, b) => b.avgmarks - a.avgmarks);
    }
    setList(res);
  }, [selectedCategory, apires]);

  useEffect(() => {
    if (search === '') {
      setList(apires);
    } else {
      const filteredList = apires.filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase()));
      setList(filteredList);
    }
  }, [search, apires]);

  useEffect(()=>{
    if(deleteId){
      const filteredList = list.filter((obj) => obj.id !== deleteId);
      setList(filteredList);
      setApiRes(filteredList);
      setDeleteId('');
    }
  }, [deleteId, list])

  useEffect(()=>{
    if(edit){
      const filteredList = list.map((obj) => obj.id === edit.id ? edit : obj);
      setList(filteredList);
      setApiRes(filteredList);
      setEdit(null);
    }
  }, [edit, list])

  return (
    <>
      <Topbar setSelectedCategory={setSelectedCategory} setSearch={setSearch} />
      <div className="Stu-list">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Average Marks</th>
              <th>CGPA</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((obj) => (
              <StudTable key={obj.id} Students={obj} setDeleteId={setDeleteId} setEdit={setEdit} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentEntry;

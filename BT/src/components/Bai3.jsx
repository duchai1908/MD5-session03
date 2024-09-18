import React, { useState } from "react";

export default function Bai3() {
  const [students, setStudents] = useState([]);
  const [formStudent, setFormStudent] = useState({});
  const [formUpdate, setFormUpdate] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(true);

  // Handle input change for add form
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormStudent({ ...formStudent, [name]: value });
  };

  // Handle input change for update form
  const handleChangeUpdateForm = (e) => {
    const { name, value } = e.target;
    setFormUpdate({ ...formUpdate, [name]: value });
  };

  // Add new student
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (formStudent.fullName && formStudent.age && formStudent.gender) {
      const newStudent = {
        id: Math.floor(Math.random() * 100),
        fullName: formStudent.fullName,
        age: formStudent.age,
        gender: formStudent.gender,
      };
      setStudents([...students, newStudent]);
      setFormStudent({});
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Edit student
  const editStudent = (id) => {
    const studentToUpdate = students.find((item) => item.id === id);
    setFormUpdate(studentToUpdate);
    setIsEditing(true);
    setIsAdding(false);
  };

  // Delete student
  const deleteStudent = (id) => {
    const newArray = students.filter((item) => item.id !== id);
    setStudents(newArray);
  };

  // Update student
  const handleUpdateStudent = (e) => {
    e.preventDefault();
    if (formUpdate.fullName && formUpdate.age && formUpdate.gender) {
      const updatedStudents = students.map((student) =>
        student.id === formUpdate.id ? formUpdate : student
      );
      setStudents(updatedStudents);
      setFormUpdate({});
      setIsEditing(false);
      setIsAdding(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h3>Bai 3</h3>
      {isAdding && (
        <form onSubmit={handleAddStudent}>
          <div>
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              name="fullName"
              value={formStudent.fullName || ""}
              onChange={handleChangeForm}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              value={formStudent.age || ""}
              onChange={handleChangeForm}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              value={formStudent.gender || ""}
              onChange={handleChangeForm}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      )}

      <h3>Students List:</h3>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.fullName}, <strong>Age:</strong>{" "}
            {item.age}, <strong>Gender:</strong> {item.gender}
            <button onClick={() => editStudent(item.id)}>Edit</button>
            <button onClick={() => deleteStudent(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Edit form */}
      {isEditing && (
        <form onSubmit={handleUpdateStudent}>
          <h3>Edit Student</h3>
          <div>
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              name="fullName"
              value={formUpdate.fullName || ""}
              onChange={handleChangeUpdateForm}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              value={formUpdate.age || ""}
              onChange={handleChangeUpdateForm}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              value={formUpdate.gender || ""}
              onChange={handleChangeUpdateForm}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

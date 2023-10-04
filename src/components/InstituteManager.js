import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InstituteManager = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [editingTeacher, setEditingTeacher] = useState({ id: '', name: '', subject: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get('http://localhost:8060/teacher')
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8060/teacher/deleteTeacher/${id}`)
            .then(() => {
                fetchData();
            })
            .catch((error) => console.log(error));
    };

    const handleEdit = (teacher) => {
        setEditingTeacher({ ...teacher }); // Copy teacher object to editingTeacher
    };

    const handleUpdateTeacher = (id) => {
        if (editingTeacher.name.trim() === '' || editingTeacher.subject.trim() === '') return;

        axios
            .put(`http://localhost:8060/teacher/${id}`, editingTeacher)
            .then(() => {
                const updatedData = data.map((teacher) =>
                    teacher.id === id ? { ...editingTeacher, id: teacher.id } : teacher
                );
                setData(updatedData);
                setEditingTeacher({ id: '', name: '', subject: '' });
                alert("Teacher updated Successfully");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className='container'>
            <div className='form-div'>
                <Link to="/add" className="btn btn-sm btn-info">Add Teacher</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((teacher, index) => (
                        <tr key={index}>
                            <td>{teacher.id}</td>
                            <td>
                                {editingTeacher.id === teacher.id ? (
                                    <input
                                        type='text'
                                        value={editingTeacher.name}
                                        onChange={(e) => setEditingTeacher({ ...editingTeacher, name: e.target.value })}
                                    />
                                ) : (
                                    teacher.name
                                )}
                            </td>
                            <td>
                                {editingTeacher.id === teacher.id ? (
                                    <input
                                        type='text'
                                        value={editingTeacher.subject}
                                        onChange={(e) => setEditingTeacher({ ...editingTeacher, subject: e.target.value })}
                                    />
                                ) : (
                                    teacher.subject
                                )}
                            </td>
                            <td>
                                {editingTeacher.id === teacher.id ? (
                                    <>
                                        <button onClick={() => handleUpdateTeacher(teacher.id)} className="btn btn-success">Update</button>
                                        <button onClick={() => setEditingTeacher({ id: '', name: '', subject: '' })} className="btn btn-warning">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(teacher)} className="btn btn-primary">Edit</button>
                                        <button onClick={() => handleDelete(teacher.id)} className="btn btn-danger">Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InstituteManager;

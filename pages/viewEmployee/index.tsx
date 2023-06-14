import React, { useEffect, useContext } from 'react';
import { PersonContext } from './context';

const ViewEmployee = () => {
    const personContext = useContext(PersonContext);
    const { persons } = personContext;

    useEffect(() => {
        // Call the getPerson function when the component mounts
        getPerson();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* Add more table headers for additional fields */}
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            {/* Add more table cells for additional fields */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewEmployee;

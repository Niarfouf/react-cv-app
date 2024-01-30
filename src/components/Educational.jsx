/* eslint-disable react/prop-types */
import '../styles/Educational.css'
import { useState } from 'react'

const emptyEducationalObject = {
    schoolName: '',
    title: '',
    graduationYear: '',
}

export default function Educational({ educationalData, saveFunc, deleteFunc }) {
    const [educationalDetails, setEducationalDetails] = useState(
        emptyEducationalObject
    )
    const [editId, setEditId] = useState(null)
    function handleChange(e) {
        setEducationalDetails({
            ...educationalDetails,
            [e.target.name]: e.target.value,
        })
    }
    function reset() {
        setEducationalDetails(emptyEducationalObject)
    }

    return (
        <>
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault()
                    if (editId) {
                        saveFunc(educationalDetails, editId)
                        reset()
                        setEditId(null)
                    } else {
                        saveFunc(educationalDetails)
                        reset()
                    }
                }}
            >
                <h1>Educational details</h1>
                <label htmlFor="schoolName">School Name:</label>
                <input
                    type="text"
                    name="schoolName"
                    id="schoolName"
                    value={educationalDetails.schoolName}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={educationalDetails.title}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="graduationYear">Graduation Year:</label>
                <input
                    type="text"
                    name="graduationYear"
                    id="graduationYear"
                    value={educationalDetails.graduationYear}
                    onChange={handleChange}
                    required
                ></input>

                <button type="submit">Save</button>
            </form>

            {educationalData.map((e) => {
                return (
                    <div key={e[0]}>
                        <div>{e[1].schoolName}</div>
                        <button
                            onClick={() => {
                                setEducationalDetails(e[1])
                                setEditId(e[0])
                            }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => {
                                deleteFunc(e[0])
                                reset()
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )
            })}
        </>
    )
}

/* eslint-disable react/prop-types */
import '../styles/Practical.css'
import { useState } from 'react'

const emptyPracticalObject = {
    companyName: '',
    positionTitle: '',
    details: '',
    from: '',
    to: '',
}

export default function Practical({ practicalData, saveFunc, deleteFunc }) {
    const [practicalDetails, setPracticalDetails] =
        useState(emptyPracticalObject)
    const [editId, setEditId] = useState(null)
    function handleChange(e) {
        setPracticalDetails({
            ...practicalDetails,
            [e.target.name]: e.target.value,
        })
    }
    function reset() {
        setPracticalDetails(emptyPracticalObject)
    }
    return (
        <>
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault()
                    if (editId) {
                        saveFunc(practicalDetails, editId)
                        reset()
                        setEditId(null)
                    } else {
                        saveFunc(practicalDetails)
                        reset()
                    }
                }}
            >
                <h1>Practical details</h1>
                <label htmlFor="companyName">Company Name:</label>
                <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={practicalDetails.companyName}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="positionTitle">Position Title:</label>
                <input
                    type="text"
                    name="positionTitle"
                    id="positionTitle"
                    value={practicalDetails.positionTitle}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="details">Details:</label>
                <input
                    type="text"
                    name="details"
                    id="details"
                    value={practicalDetails.details}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="from">From (Month Year):</label>
                <input
                    type="month"
                    name="from"
                    id="from"
                    value={practicalDetails.from}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="to">To (Month Year):</label>
                <input
                    type="month"
                    name="to"
                    id="to"
                    value={practicalDetails.to}
                    onChange={handleChange}
                    required
                ></input>

                <button type="submit">Save</button>
            </form>
            {practicalData.map((e) => {
                return (
                    <div key={e[0]}>
                        <div>{e[1].companyName}</div>
                        <button
                            onClick={() => {
                                setPracticalDetails(e[1])
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

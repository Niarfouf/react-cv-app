/* eslint-disable react/prop-types */

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
    const [expand, setExpand] = useState('-')
    function handleChange(e) {
        setPracticalDetails({
            ...practicalDetails,
            [e.target.name]: e.target.value,
        })
    }
    function reset() {
        setPracticalDetails(emptyPracticalObject)
    }
    function expandFunc() {
        expand === '+' ? setExpand('-') : setExpand('+')
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
                <div className="form-header">
                    <h2>Professional experiences</h2>
                    <button
                        type="button"
                        onClick={expandFunc}
                        className="expand-button"
                    >
                        {expand}
                    </button>
                </div>
                <div
                    className={`form-content ${expand === '+' ? 'plus' : 'minus'}`}
                >
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        autoComplete="off"
                        value={practicalDetails.companyName}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="positionTitle">Position Title</label>
                    <input
                        type="text"
                        name="positionTitle"
                        id="positionTitle"
                        autoComplete="off"
                        value={practicalDetails.positionTitle}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="details">Details</label>
                    <input
                        type="text"
                        name="details"
                        id="details"
                        autoComplete="off"
                        value={practicalDetails.details}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="from">From (Month Year)</label>
                    <input
                        type="month"
                        name="from"
                        id="from"
                        autoComplete="off"
                        value={practicalDetails.from}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="to">To (Month Year)</label>
                    <input
                        type="month"
                        name="to"
                        id="to"
                        autoComplete="off"
                        value={practicalDetails.to}
                        onChange={handleChange}
                        required
                    ></input>

                    <button className="save-button" type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <title>content-save</title>
                            <path
                                fill="currentColor"
                                d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
                            />
                        </svg>
                    </button>
                </div>
            </form>

            <h3>{practicalData.length > 0 ? 'Saved' : ''}</h3>

            {practicalData.map((e) => {
                return (
                    <div className="project" key={e[0]}>
                        <div>{e[1].companyName}</div>
                        <div className="project-button">
                            <button
                                onClick={() => {
                                    setPracticalDetails(e[1])
                                    setEditId(e[0])
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <title>file-edit</title>
                                    <path
                                        fill="currentColor"
                                        d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => {
                                    deleteFunc(e[0])
                                    reset()
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <title>delete</title>
                                    <path
                                        fill="currentColor"
                                        d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

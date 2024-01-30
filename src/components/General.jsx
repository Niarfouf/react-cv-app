import { useState } from 'react'
// eslint-disable-next-line react/prop-types
export default function General({ onSubmit }) {
    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    })
    const [expand, setExpand] = useState('-')

    function handleChange(e) {
        setPersonalDetails({
            ...personalDetails,
            [e.target.name]: e.target.value,
        })
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
                    onSubmit(personalDetails)
                }}
            >
                <div className="form-header">
                    <h2>Personal details</h2>
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
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="off"
                        value={personalDetails.firstName}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="off"
                        value={personalDetails.lastName}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={personalDetails.email}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        value={personalDetails.phone}
                        onChange={handleChange}
                        required
                    ></input>
                    <label htmlFor="address">Postal Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="off"
                        value={personalDetails.address}
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
        </>
    )
}

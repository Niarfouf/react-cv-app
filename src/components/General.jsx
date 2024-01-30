import '../styles/General.css'
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

    function handleChange(e) {
        setPersonalDetails({
            ...personalDetails,
            [e.target.name]: e.target.value,
        })
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
                <h1>Personal details</h1>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={personalDetails.firstName}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={personalDetails.lastName}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="email">Email address:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={personalDetails.email}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={personalDetails.phone}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="address">Postal Address:</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={personalDetails.address}
                    onChange={handleChange}
                    required
                ></input>
                <button type="submit">Save</button>
            </form>
        </>
    )
}

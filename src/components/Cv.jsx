/* eslint-disable react/prop-types */
export default function Cv({
    generalDetails,
    educationalDetails,
    practicalDetails,
}) {
    let fullName = ''
    let email = ''
    let phone = ''
    let address = ''
    if (generalDetails.firstName) {
        fullName = generalDetails.firstName + ' ' + generalDetails.lastName
        email = generalDetails.email
        phone = generalDetails.phone
        address = generalDetails.address
    }
    const educationArray = Object.entries(educationalDetails)
    const professionalArray = Object.entries(practicalDetails)
    return (
        <>
            <div className="cv-header">
                <h1>{fullName}</h1>
                <div className="contact-info">
                    <div className="contact-element">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <title>email-outline</title>
                            <path
                                fill="currentColor"
                                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                            />
                        </svg>
                        <p>{email}</p>
                    </div>
                    <div className="contact-element">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <title>phone</title>
                            <path
                                fill="currentColor"
                                d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                            />
                        </svg>

                        <p>{phone}</p>
                    </div>
                    <div className="contact-element">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <title>map-marker</title>
                            <path
                                fill="currentColor"
                                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                            />
                        </svg>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
            <div className="cv-content">
                <div className="cv-education">
                    <h2>Education</h2>
                    {educationArray.map((e) => {
                        return (
                            <div className="education-unit" key={e[0]}>
                                <div>
                                    <p>Graduated </p>
                                    <p>{e[1].graduationYear}</p>
                                </div>
                                <div>
                                    <p>
                                        <b>{e[1].schoolName}</b>
                                    </p>
                                    <p>{e[1].title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cv-professional">
                    <h2>Professional Experience</h2>
                    {professionalArray.map((e) => {
                        return (
                            <div className="professional-unit" key={e[0]}>
                                <div>
                                    <p>
                                        {e[1].from} / {e[1].to}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <b>{e[1].companyName}</b>
                                    </p>
                                    <p>{e[1].positionTitle}</p>
                                    <p>{e[1].details}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

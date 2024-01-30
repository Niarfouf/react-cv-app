import General from './components/General'
import Educational from './components/Educational'
import Practical from './components/Practical'
import Cv from './components/Cv'
import './styles/styles.css'
import { useState } from 'react'

let keyEduc = 0
let keyPract = 0

export default function App() {
    const [validPersonalDetails, setValidPersonalDetails] = useState({})

    function savePersonalDetails(personalDetails) {
        setValidPersonalDetails(personalDetails)
    }
    const [educationalObjects, setEducationalObjects] = useState({})

    function saveEducationalDetails(educationalDetails, index = null) {
        if (index) {
            setEducationalObjects({
                ...educationalObjects,
                [index]: educationalDetails,
            })
        } else {
            setEducationalObjects({
                ...educationalObjects,
                [keyEduc]: educationalDetails,
            })
            keyEduc += 1
        }
    }
    function deleteEducationalObject(objectId) {
        const copyObject = { ...educationalObjects }
        delete copyObject[objectId]
        setEducationalObjects(copyObject)
    }
    const [practicalObjects, setPracticalObjects] = useState({})

    function savePracticalDetails(practicalDetails, index = null) {
        if (index) {
            setPracticalObjects({
                ...practicalObjects,
                [index]: practicalDetails,
            })
        } else {
            setPracticalObjects({
                ...practicalObjects,
                [keyPract]: practicalDetails,
            })
            keyPract += 1
        }
    }
    function deletePracticalObject(objectId) {
        const copyObject = { ...practicalObjects }
        delete copyObject[objectId]
        setPracticalObjects(copyObject)
    }

    return (
        <main className="main-content">
            <section className="edit-cv">
                <div className="personal">
                    <General onSubmit={savePersonalDetails} />
                </div>
                <div className="educational">
                    <Educational
                        educationalData={Object.entries(educationalObjects)}
                        saveFunc={saveEducationalDetails}
                        deleteFunc={deleteEducationalObject}
                    />
                </div>
                <div className="professional">
                    <Practical
                        practicalData={Object.entries(practicalObjects)}
                        saveFunc={savePracticalDetails}
                        deleteFunc={deletePracticalObject}
                    />
                </div>
            </section>
            <section className="cv">
                <Cv
                    generalDetails={validPersonalDetails}
                    educationalDetails={educationalObjects}
                    practicalDetails={practicalObjects}
                />
            </section>
        </main>
    )
}

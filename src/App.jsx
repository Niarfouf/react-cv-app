import General from './components/General'
import Educational from './components/Educational'
import Practical from './components/Practical'
import Cv from './components/Cv'
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
        <>
            <General onSubmit={savePersonalDetails} />
            <Educational
                educationalData={Object.entries(educationalObjects)}
                saveFunc={saveEducationalDetails}
                deleteFunc={deleteEducationalObject}
            />
            <Practical
                practicalData={Object.entries(practicalObjects)}
                saveFunc={savePracticalDetails}
                deleteFunc={deletePracticalObject}
            />
            <Cv
                generalDetails={validPersonalDetails}
                educationalDetails={educationalObjects}
                practicalDetails={practicalObjects}
            />
        </>
    )
}

/**
 * The empty arrows in the return statement are the new way to put a fragment.
 */

import React, {useState} from 'react'

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App
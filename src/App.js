/**
 * The empty arrows in the return statement are the new way to put a fragment.
 */

import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>  
                        </Route>
                        <Route path='/about' element={<About />} />
                    </Routes>

                    <AboutIconLink />
                </div>

            </Router>
        </FeedbackProvider>
    )
}

export default App
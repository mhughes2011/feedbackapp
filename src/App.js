/**
 * The empty arrows in the return statement are the new way to put a fragment.
 */

import Header from "./components/Header"

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <h1>My App</h1>
            </div>
        </>
    )
}

export default App
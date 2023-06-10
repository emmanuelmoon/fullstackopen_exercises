import { useState } from "react";

const Button = ({ handleClick, text }) =>
(
    <button onClick={handleClick}>{text}</button>
)

const Display = ({ text, value }) => (
    <p>{text} {value}</p>
)

const Average = ({ good, bad, total }) => {
    if (total > 0) {
        console.log((good - bad) / total);
        return (<p>Average {(good - bad) / total}</p>)
    }
}

const Positive = ({ good, total }) => {
    if (total > 0) {
        return <p>positive {good / total * 100} %</p>
    }
}

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return (
        <div>
            < h1 > statistics</h1 >
            <Display text={'good'} value={good} />
            <Display text={'neutral'} value={neutral} />
            <Display text={'bad'} value={bad} />
            <Display text={'all'} value={total} />
            <Average good={good} bad={bad} total={total} />
            <Positive good={good} total={total} />
        </div>)
}


const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => {
        console.log('good before', good);
        setGood(good + 1);
    }

    const handleNeutral = () => {
        console.log('neutral before', neutral);
        setNeutral(neutral + 1);
    }

    const handleBad = () => {
        console.log('bad before', bad);
        setBad(bad + 1);
    }

    return (
        <>
            <h1>give feedback</h1>
            <Button handleClick={handleGood} text={'good'} />
            <Button handleClick={handleNeutral} text={'neutral'} />
            <Button handleClick={handleBad} text={'bad'} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )
}

export default App;
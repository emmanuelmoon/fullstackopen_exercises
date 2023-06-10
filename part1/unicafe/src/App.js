import { useState } from "react";

const Button = ({ handleClick, text }) =>
(
    <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
    <p>{text} {value}</p>
)
const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    if (total > 0) {
        return (
            <div>
                <StatisticLine text={'good'} value={good} />
                <StatisticLine text={'neutral'} value={neutral} />
                <StatisticLine text={'bad'} value={bad} />
                <StatisticLine text={'all'} value={total} />
                <StatisticLine text={'average'} value={(good - bad) / total} />
                <StatisticLine text={'positive'} value={good / total * 100 + " %"} />
            </div>)
    }
    return (
        <div>
            <p>No feedback given</p>
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
            <h1> statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )
}

export default App;
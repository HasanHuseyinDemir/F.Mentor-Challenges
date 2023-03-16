export const Result=()=>{
    return html`
    <div id="result">
    <h2 id="result-title">Your Result</h2>
    
    <div id="score-container">
    <div id="score">
    <h1>76</h1>
    <p id="score-of">of 100</p>
    </div>
    </div>

    <br>

    <h1>Great</h1>

    <div id="result-comment">
    You scored higher than 65% of the people who have taken these tests.
    </div>

    </div>
    `
}

RegisterComponent(Result);
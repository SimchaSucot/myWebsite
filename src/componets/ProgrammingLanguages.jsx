import './ProgrammingLanguages.css'
import python from '/images/python.webp'
import html from '/images/html.png'
import css from '/images/css.png'
import js from '/images/js.png'
import node from '/images/node.png'
import react from '/images/react.png'
import c from '/images/cs.png'

function ProgrammingLanguages(){
    return (
        <div className='box'>
            <h2>Programming Languages</h2>
            <div>
                <img src={python} alt="python" />
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
                <img src={node} alt="node" />
                <img src={react} alt="react" />
                <img src={c} alt="c#" />
                <h3>End more...</h3>
            </div>
        </div>
    )
}


export default ProgrammingLanguages
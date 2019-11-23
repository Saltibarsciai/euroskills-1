import React, {useState} from 'react';
import './Main.scss';
import data from '../../json/easing-functions-subset-1'

const Main = () => {
    const [sliderValue, setSliderValue] = useState(1);
    const [description, setDescription] = useState('');
    const [formula, setFormula] = useState('');
    const easingFunctions = Object.values(data.easingFunctions);
    const handleChange = (e) => {
        setSliderValue(e.target.value);
    };
    const setInfo = (value) => {
        setDescription(value.description);
        setFormula(value.formula);
    };
    return (
        <div className={'main'}>
            <div className={'left-side'}>
                <ul>
                    {easingFunctions.map(value => (
                        <li onClick={ () => setInfo(value)}>{value.text}</li>
                    ))}
                </ul>
                <div className={'info'}>
                    <div className={'title'}>Information</div>
                    <div>
                        Description: {description}
                    </div>
                    <div>
                        Formula: {formula}
                    </div>
                </div>
            </div>
            <div className={'right-side'}>
                <div className={'chart'}>
                    chart
                </div>
                <div className={'slider-wrapper'}>
                    <input type="range" min="1" max="100" value={sliderValue} onChange={handleChange} className="slider" id="myRange"/>
                </div>
            </div>
        </div>
    );
};

export default Main;
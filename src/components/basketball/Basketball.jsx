
import { useState } from 'react';
import style from './Basketball.module.css';
import { formatBasketballNumber } from '../../utils/formatBasketballNumber';

export function Basketball() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

function formatBasketballNumber(number, minSize) {
    return (number + '').padStart(minSize,'0');
}

console.log(formatBasketballNumber(10, 3));
console.log(formatBasketballNumber(100, 4));
console.log(formatBasketballNumber(1000, 5));
console.log(formatBasketballNumber(10000, 6));

    return (
        <div className={style.basketball}>
            <div className={style.screen}>{formatBasketballNumber(score1)}:{formatBasketballNumber(score2)}</div>
            <div className={style.controls}>
                <div className={style.team}>
                    <button onClick={() => setScore1(score1 + 1)} className={style.btn}>+1</button>
                    <button onClick={() => setScore1(score1 + 2)} className={style.btn}>+2</button>
                    <button onClick={() => setScore1(score1 + 3)} className={style.btn}>+3</button>
                </div>
                <div className={style.team}>
                    <button onClick={() => setScore2(score2 + 1)} className={style.btn}>+1</button>
                    <button onClick={() => setScore2(score2 + 2)} className={style.btn}>+2</button>
                    <button onClick={() => setScore2(score2 + 3)} className={style.btn}>+3</button>
                </div>
            </div>
        </div>
    );
}

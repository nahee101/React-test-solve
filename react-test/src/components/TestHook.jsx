import { useEffect, useState, useCallback, useMemo } from "react";

const TestHook = () => {
    const [date, setDate] = useState(new Date());
    const [num, setNum] = useState([]);
    const [inputNum, setInputNum] = useState(0);

    const tick = () => {
        setDate(new Date());
    };

    /* 콜백 함수 */
    const onChange = useCallback((e) => {
        setInputNum(e.target.value);
    }, []);

    const addNum = useCallback(() => {
        setNum([...num, parseInt(inputNum)]);
        setInputNum(0);
    }, [inputNum, num]);

    useEffect(() => {
        setInterval(() => tick(), 1000);
    }, []);

    const avrNum = (list) => {
        if (list.length === 0) {
            return 0;
        };

        let sum = 0;
        for (let n of list) {
            sum += n;
        };
        return sum /list.length;
    };

    const avr = useMemo(() => avrNum(num), [num]);

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <input type="text" onChange={onChange}/>
            <button onClick={addNum}>추가</button>
            <h3>모든 수의 평균: {avr}</h3>
            <ul>
                {num.map((n, idx) => (
                    <li key={idx}>{n}</li>
                ))}
            </ul>
        </div>
    );
};

export default TestHook;
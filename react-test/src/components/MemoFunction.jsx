import { useState } from "react";

const MemoFunction = () => {
    const [memos, setMemos] = useState([
        {id: 1, text: '첫 번째 메모입니다.'}
    ])
    const [inputText, SetInputText] = useState('');
    const [id, SetId] = useState(2)

    const onChange = (e) => {
        SetInputText(e.target.value);
        // console.log(inputText); (정상 작동 됨)
    };

    const addMemo = () => {
        setMemos([...memos, {id: id, text: inputText}]);
        SetId(id +1);
    };

    const deleteMemo = (id) => {
        const nextMemo = memos.filter((memo) => memo.id !== id)
        setMemos(nextMemo);
    }

    return (
        <div>
            <h1>메모: 함수형 클래스</h1>
            <input type="text" 
            onChange={onChange} />
            <button onClick={addMemo}>추가</button>
            <hr />
            <ul>
                {/* map 사용 */}
                {
                    memos.map(memo => (
                        <li key={memo.id}>
                            {memo.text}
                            <button 
                            onClick={() => {deleteMemo(memo.id)}}>
                                X
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default MemoFunction;
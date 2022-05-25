import { Component, useState } from "react";

class MemoClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memos: [{id: 1, text: '첫 번째 메모입니다.'}],
            inputText: '',
            id: 2
        };
    };

    onChange = (e) => {
        this.setState({inputText: e.target.value});
        // console.log(inputText); (정상 작동 됨)
    };

    addMemo = () => {
        this.setState({memos: [...this.state.memos, {id: this.state.id, text: this.state.inputText}]});
        this.setState({id: this.state.id +1});
    };

    deleteMemo = (id) => {
        const nextMemo = this.state.memos.filter((memo) => memo.id !== id)
        this.setMemos(nextMemo);
    };

    render() {
        return (
            <div>
                <h1>메모: 함수형 클래스</h1>
                <input type="text" 
                onChange={this.onChange} />
                <button onClick={this.addMemo}>추가</button>
                <hr />
                <ul>
                    {/* map 사용 */}
                    {
                        this.state.memos.map(memo => (
                            <li key={memo.id}>
                                {memo.text}
                                <button 
                                onClick={() => {this.deleteMemo(memo.id)}}>
                                    X
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default MemoClass;
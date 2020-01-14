import * as React from "react";

export default class MyTimer extends React.Component {
    timer;

    constructor(props) {
        super(props);
        this.state = { cur: new Date() };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ cur: new Date() });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return <div>現在時刻:{this.state.cur.toLocaleTimeString()}</div>;
    }
}

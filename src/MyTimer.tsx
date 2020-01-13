import * as React from "react";

export default class MyTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cur: new Date() };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ cur: new Date() });
        }, 1000);
    }

    render() {

        return <div>現在時刻:{this.state.cur.toLocaleTimeString()}</div>;
    }
}

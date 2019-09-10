import React, { Component } from 'react';

export default class DNA extends Component {
    constructor(props) {
        super(props);

        this.rotation = (e) => {
            var transform = 'translateX(-120px) rotateY(' + e.x / 100 + 'deg) rotateZ(-' + ((e.y / 50) + 35) + 'deg)';
            this.refs.dna.style.webkitTransform = transform;
            this.refs.dna.style.transform = transform;
        }
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.rotation);
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.rotation);
    }

    render() {
        var elements = [];
        for (var n = 0; n < 20; n++) {
            elements.push((<div className="ele" key={n}></div>));
        }
        return (<div className="dna" ref="dna">{elements}</div>);
    }
}
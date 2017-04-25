import React, {Component} from "react";
import DashboardSvg from '../svgs/DashboardSvg';

export default class Divider extends Component {
    render() {
        return (
            <div className="divider">
                <div className="left-container">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <DashboardSvg/>
                <div className="right-container">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}
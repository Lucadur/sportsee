import React from "react";
import ActivityCard from "../activitycard/Activitycard";
import bike from "../../assets/bike.png"
import yoga from "../../assets/yoga.png"
import fitness from "../../assets/fitness.png"
import swim from "../../assets/swim.png"
import "./Sidebar.css"

function SideBar() {
    return (
        <div className="sidebar">
            <div className="activity-cards">
                <ActivityCard imageSrc={yoga} />
                <ActivityCard imageSrc={swim} />
                <ActivityCard imageSrc={bike} />
                <ActivityCard imageSrc={fitness} />
            </div>
            <p>Copyright, SportSee 2020</p>
        </div>
    )
}
export default SideBar;
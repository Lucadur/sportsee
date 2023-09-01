import React from "react";

function ActivityCard(props) {
    return (
        <div className="activity-card">
            <img src={props.imageSrc} alt="Activity" />
        </div>
    );
}

export default ActivityCard;
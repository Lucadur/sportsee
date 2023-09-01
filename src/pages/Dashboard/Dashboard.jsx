import "./Dashboard.css";
import "../../api/data"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getUserData, getUserActivity, getUserPerformance, getUserSessions} from "../../api/api";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Weight from "../../components/charts/poids/Weight";
import Goals from "../../components/charts/objectifs/Goals";
import RadarComponent from "../../components/charts/radar/RadarComponent";
import Score from "../../components/charts/score/Score";
import Datacard from "../../components/keydatacard/Datacard";
import fat from "../../assets/fat.png"
import calories from "../../assets/calories.png"
import carbs from "../../assets/carbs.png"
import protein from "../../assets/protein.png"
import "./Dashboard.css"

export default function Dashboard() {
    const param = useParams();
    const userId = param.id;

    const [user, setUser] = useState({});
    const [userActivity, setUserActivity] = useState({});
    const [userAverageSession, setUserAverageSession] = useState({});
    const [userPerfomance, setUserPerfomance] = useState({});
  
    useEffect(() => {
        const fetchData = async () => {
            //user info
            const dataUser = await getUserData(userId)
            setUser(dataUser);

            //user activity
            const dataActivity = await getUserActivity(userId);
            setUserActivity(dataActivity);

            //user perf
            const dataSessions = await getUserSessions(userId);
            setUserAverageSession(dataSessions);
            
            //user sessions
            const dataPerformance = await getUserPerformance(userId);
            setUserPerfomance(dataPerformance);
            
        }
        fetchData().catch(console.error);
    }, [userId]);
   

    return (
        <div className="main">
            <NavBar />
            <Header userName={user?.userInfos?.firstName} />
            <div className="dashboard">
                <div className="left-side">
                    <Weight data={userActivity?.sessions} />
                    <div className="left-side-row">
                            <Goals data={userAverageSession} />
                            <RadarComponent data={userPerfomance} />
                            <Score todayScore={user.todayScore} score={user.score} />
                    </div>
                </div>
                <div className="right-side">
                    <Datacard imgSrc={calories} imgName="Calories" number={user?.keyData?.calorieCount} name="Calories" />
                    <Datacard imgSrc={protein} imgName="Proteines" number={user?.keyData?.proteinCount} name="Protéines" />
                    <Datacard imgSrc={carbs} imgName="Glucides" number={user?.keyData?.carbohydrateCount} name="Glucides" />
                    <Datacard imgSrc={fat} imgName="Lipides" number={user?.keyData?.lipidCount} name="Lipides" />
                </div>
            </div>
            <SideBar />
        </div>
    );
            }
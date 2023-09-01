import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./data.js";

const useMockData = false; // Change this to false to use API calls


export async function getUserData(userId) {
  if (useMockData) {
    const userData = USER_MAIN_DATA.find(
      (res) => res.id === parseInt(userId)
    );
    return userData;
    
  } else {
    try {
      const response = await fetch("http://localhost:3000/user/" + userId)
      const userData = await response.json();
      return userData.data;
    } catch (error) {
      return null;
    }
  }
}

export async function getUserActivity(userId) {
  if (useMockData) {
    const userActivity = USER_ACTIVITY.find(
      (res) => res.userId === parseInt(userId)
    );
    return userActivity;

  } else {
      const response = await fetch("http://localhost:3000/user/" + userId + "/activity");
      const userActivity = await response.json();
      return userActivity.data
  }
}

export async function getUserSessions(userId) {
  if (useMockData) {
    const userSessions = USER_AVERAGE_SESSIONS.find(
      (res) => res.userId === parseInt(userId)
    );
    return userSessions;
  } else {
    try {
      const response = await fetch("http://localhost:3000/user/" + userId + "/average-sessions");
      const userSessions = await response.json();
      return userSessions.data;

    } catch (error) {
      return null;
    }
  }
}

export async function getUserPerformance(userId) {
  if (useMockData) {
    const userPerformance = USER_PERFORMANCE.find(
      (res) => res.userId === parseInt(userId)
    );
    return userPerformance;
  } else {
    try {
      const response = await fetch("http://localhost:3000/user/" + userId + "/performance");
      const userPerformance = await response.json();
      return userPerformance.data
    } catch (error) {
      return null;
    }
  }
}

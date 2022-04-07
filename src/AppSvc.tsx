import React from 'react';
import axios from 'axios';


export default class AppSvc {

    public static getCoins() {
        debugger;
        return axios.get('https://jira.kurzcode.com/coins/', {
        }).then(res => {
            const data = res;
            return data;
        })
    }

    public static getLeaderboard() {
        return axios.get('https://jira.kurzcode.com/coins/leaderboard', {
        }).then(res => {
            const data = res;
            return data;
        })
    }

    public static getAuthToken() {
        const data = {
        }
        const options ={
        }

        return axios.get('https://jira.kurzcode.com/auth/token',{
        }).then(res => {
            const data = res;
            return data;
        })
    }

    public static saveTokenInLocalStorage(tokenDetails: any) {
        localStorage.setItem('userDetails', tokenDetails)
    }
}
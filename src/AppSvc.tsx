import React from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";



export default class AppSvc {

    public static getCoins() {

        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;
        
        return axios.get('https://jira.kurzcode.com/coins/', {
            'headers': {
                 'Authorization': token
        }
        }).then(res => {
            const data = res;
            return data;
        })
    }

    public static getLeaderboard() {

        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        return axios.get('https://jira.kurzcode.com/coins/leaderboard', {
            'headers': {
                 'Authorization': token
        }
        }).then(res => {
            const data = res;
            return data;
        })
    }

    public static getAuthToken( adress: string, username: string, apiKey: string) {
        // const data = {
        //     "space": "https://k183.atlassian.net/",
        //     "username": "justas.urbonas@ktu.edu",
        //     "api_key": "BJDCs7JdCEMk5aEFCxBrB58E"
        // }
        const data = {
            "space": adress,
            "username": username,
            "api_key": apiKey
        }
        const options = {
        }

        return axios.post('https://jira.kurzcode.com/auth/token', data)
            .then(res => {
                const data = res;
                return data;
            })
    }

    public static saveTokenInLocalStorage(tokenDetails: any) {
        localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
    }

    public static removeToken() {
        localStorage.removeItem('userDetails');
    }
}
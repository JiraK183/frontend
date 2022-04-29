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

    public static getAuthToken(adress: string, username: string, apiKey: string) {
        const data = {
            "space": adress,
            "username": username,
            "api_key": apiKey
        }

        return axios.post('https://jira.kurzcode.com/auth/token', data)
            .then(res => {
                const data = res;
                return data;
            })
    }

    public static saveTokenInLS(tokenDetails: any) {
        localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
    }

    public static removeToken() {
        localStorage.removeItem('userDetails');
    }

    public static getStats() {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        return axios.get('https://jira.kurzcode.com/statistics/', {
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('getStats', data);
            return data;
        })
    }

    public static getActiveStories() {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        return axios.get('https://jira.kurzcode.com/stories/active', {
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('getActiveStories', data);
            return data;
        })
    }

    public static getCompletedTodayStories() {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        return axios.get('https://jira.kurzcode.com/stories/completed-today', {
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('getCompletedTodayStories', data);
            return data;
        })
    }

    public static createShopItem(title: string, desc: string, imgUrl: string, price: number) {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        const body = {
            name: title,
            description: desc,
            image_url: imgUrl,
            price: price
        }

        return axios.post('https://jira.kurzcode.com/products/', body, {
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('createShopItem', data);
            return data;
        })
    }

    public static getShopItems() {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        return axios.get('https://jira.kurzcode.com/products/', {
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('getShopItems', data);
            return data;
        })
    }

    public static deleteShopItem(itemID: string) {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        const body = {
            name: itemID,
        }

        return axios.delete('https://jira.kurzcode.com/products/'+itemID+'/', {
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('deleteShopItem', data);
            return data;
        })
    }

    public static purchaseShopItem(itemID: string) {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        const body = {
        }

        return axios.post('https://jira.kurzcode.com/products/'+itemID+'/purchase/', body,{
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('purchaseShopItem', data);
            return data;
        })
    }

    public static getMyItems() {
        const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

        return axios.get('https://jira.kurzcode.com/products/my', {
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            const data = res;
            console.log('purchaseShopItem', data);
            return data;
        })
    }



    // public static getToken() {
    //     if (localStorage.getItem('userDetails') && JSON.parse(`${localStorage.getItem('userDetails')}`).access_token ) {
    //         const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;
    //         return token;
    //     }
    //     else{
    //         return null;
    //     }
    // }

    // public static decodeUserInfoFromToken() {
    //     const token = JSON.parse(`${localStorage.getItem('userDetails')}`).access_token;

    //     //var decoded = jwt_decode(token);
    //     return token;
    // }
}
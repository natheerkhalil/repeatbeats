import axios from 'axios';

import { API_URL } from '../../config';
export function extractFirstString(nestedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            const result = extractFirstString(nestedArray[i]);
            if (result) {
                return result;
            }
        } else if (typeof nestedArray[i] === 'string') {
            return nestedArray[i];
        }
    }
    return nestedArray.length;
}

function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

export async function request(data, url, authenticated = true) {
    console.log(`API request to: ${API_URL}${url} with data ${data}`);
    var res = null;

    var headers = {};

    if (authenticated) {
        headers = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            }
        };
    }
    
    try {
        await axios.post(API_URL + "/api" + url, data, headers).then(response => {
            res = response;
        })

        return res;
    } catch (error) {

        console.log("API request failed: ", error);

        return {
            failed: 1,
            data: Object.values(flattenObject(error.response.data))[0] || "There was an unexpected error"
        };

    }
}
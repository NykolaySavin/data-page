import {apiRequest} from "../apiRequests";

export function getFileData(fileName) {
    return apiRequest(`/api/data/${fileName}`);
}
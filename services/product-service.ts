import { AxiosResponse } from "axios";
import { http } from "./http=service";

export async function findAllProduct(): Promise<AxiosResponse<any>>{
    try {
        const response = await http.get<any>(
            'https://api.codingthailand.com/api/course',
        );
        return response;

    } catch (error) {
        throw error;
    }
}
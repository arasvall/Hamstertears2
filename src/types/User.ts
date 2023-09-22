import { Workout } from "./Workout";

export type UserRole = "USER" | "ADMIN";

export interface User {
    id: number,
    username: string,
    role: UserRole,
    activites: Workout[];
}
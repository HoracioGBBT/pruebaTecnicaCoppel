import { Schedule } from "../models/schedule";

export abstract class ScheduleRepository{
    abstract getSchedules(params: any): Promise<any>;
    abstract createSchedule(Schedule: Schedule): Promise<Schedule>;
    abstract getScheduleByPK(idSchedule: number): Promise<Schedule>;
    abstract disableSchedule(idSchedule: number): Promise<Schedule>;
    abstract enableSchedule(idSchedule: number): Promise<Schedule>;
    abstract deleteSchedule(idSchedule: number): Promise<Schedule>;
    abstract updateSchedule(idSchedule: number, schedule: Schedule): Promise<Schedule>;
}
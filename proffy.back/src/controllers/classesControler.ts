import { Request, Response } from 'express';
import db from "../database/connection";
import ConvertHourToMinutes from "../utils/convertHourToMinutes";

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController
{
    async index(request: Request, response: Response)
    {
        const filters = request.query;

        if(!filters.subject || !filters.week_day || !filters.time)
        {
            return response.status(400).json({
                error: "Missing filters to search classes"
            });
        }
        
        const time = filters.time as string;
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;

        const timeInMinutes = ConvertHourToMinutes(time);
        
        const classes = await db('classes').whereExists(function() {
                                                this.select('class_schedule.*')
                                                    .from('class_schedule')
                                                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                                                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                                                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                                                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
                                            })
                                            .where('classes.subject', '=', subject)
                                            .join('users', 'classes.user_id', '=', 'users.id')
                                            .select(['classes.*', 'users.*']);
        
        return response.json(classes);
    }

    async create(request: Request, response: Response) 
     {
        const { name, avatar, whatsapp, bio, subject, cost, scheduleItems } = request.body;
    
        const trx = await db.transaction();
        
        try 
        {
            const insertedUsersIds = await trx('users').insert({ name, avatar, whatsapp, bio });
            const user_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('classes').insert({ cost, subject, user_id });
            const class_id = insertedClassesIds[0];
        
            const classScheduleItems = scheduleItems.map((scheduleItem: ScheduleItem) => {
        
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: ConvertHourToMinutes(scheduleItem.from),
                    to: ConvertHourToMinutes(scheduleItem.to)
                };
            });
        
            await trx('class_schedule').insert(classScheduleItems);
            await trx.commit();
        
            return response.status(201).send();
        }
        catch(error) {
            trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating a new class.'
            });
        }
    };
}
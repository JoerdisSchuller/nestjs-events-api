import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
    findAll(): any[] {
        return [
            {
                id: 1,
                name: 'Nest JS Meetup',
            },
        ];
    }
}

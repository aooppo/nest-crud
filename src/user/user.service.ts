import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {

    getUser() {
        const random = Math.random()
        Logger.log('random is ' + random)
        return random > 0.5 ? null :
            {
                id: "123",
                name: 'tj',
                age: 29
            }
    }
}

import * as Realm from 'realm';

export default class Headache {
    public static schema: Realm.ObjectSchema = {
        name: 'Headache',
        primaryKey: 'time',
        properties: {
            severity: {type: 'int', default: 3},
            time: 'int',
        }
    }

    public severity: number;
    public time: number;

    constructor(serverity: number, time: number | null) {
        this.severity = serverity;
        if(time === null) {
            this.time = Date.now();
        } else {
            this.time = time;
        }
        
    }
}
import { BeforeInsert, Column, Entity, PrimaryColumn} from "typeorm";

const { nanoid } = require('nanoid');

@Entity('games')
export class Game {
    @PrimaryColumn()
    id: string;

    @Column()
    gameName: string;

    @Column()
    urlImage: string;

    @Column()
    rating: number;

    @Column()
    review: string;

    @BeforeInsert()
    generateId(){
        this.id = `game_${nanoid()}`
    }
}
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateGameDto {
    @IsNotEmpty()
    @IsString()
    gameName: string

    @IsNotEmpty()
    @IsString()
    urlImage: string

    @IsNumber()
    @IsPositive()
    rating: number
    
    @IsString()
    @IsNotEmpty()
    review: string
}

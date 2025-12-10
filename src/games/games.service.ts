import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(@InjectRepository(Game) 
    private readonly repository: Repository<Game>,){

  }
  create(dto: CreateGameDto) {
    const game = this.repository.create(dto);
    return this.repository.save(game);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id});
  }

  async update(id: string, dto: UpdateGameDto) {
    const game = await this.repository.findOneBy({id});
    if (!game) return null;
    this.repository.merge(game, dto);
    return this.repository.save(game);
  }

  async remove(id: string) {
    const game = await this.repository.findOneBy({id});
    if (!game) return null;
    return this.repository.remove(game);
  }
}

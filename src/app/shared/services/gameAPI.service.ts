import { Injectable } from '@angular/core';
import axios from 'axios';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameAPIService {
  private apiKey = '46e03b493a6c4d09b76369a784a00f2c';

  constructor() { }

  private removeHtmlTagsAndNewLines(html: string): string {
    const regex = /(<([^>]+)>|\n)/gi;
    return html.replace(regex, '');
  }

  private async getGameDescription(gameId: number): Promise<string> {
    const url = `https://api.rawg.io/api/games/${gameId}?key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      const game = response.data;

      const description = this.removeHtmlTagsAndNewLines(game.description);

      return description;
    } catch (error) {
      console.error('Ocorreu um erro ao obter a descrição do jogo:', error);
      return '';
    }
  }

  public async searchGamesByGenre(genre: string, quantity : number): Promise<Game[]> {
    const url = `https://api.rawg.io/api/games?key=${this.apiKey}&genres=${genre.toLowerCase()}&page_size=${quantity}`;

    try {
      const response = await axios.get(url);
      const games = response.data.results;

      const gameList : Game[] = await Promise.all(
        games.map(async (game: any) => {
          const description = await this.getGameDescription(game.id);
          const selectedGame : Game = {
            title: game.name,
            rating: game.rating,
            description: description,
            posterImg: game.background_image,
            genre: genre,
            relaseDate : game.released
          }
          return selectedGame;
        })
      );

      return gameList;
    } catch (error) {
      console.error('Ocorreu um erro ao buscar os jogos:', error);
      return [];
    }
  }
  public async getGenres(): Promise<string[]> {
    const url = `https://api.rawg.io/api/genres?key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      const genres = response.data.results;

      const genreList = genres.map((genre: any) => genre.name);

      return genreList;
    } catch (error) {
      console.error('Ocorreu um erro ao obter os gêneros:', error);
      return [];
    }
  }

  // A ideia era usa a API pra pegar as imgs, porém a api só retornarva 20 imgs e era muito lento
  // Pensando nisso crieia a url-background-img

  // public async getRandomGameBackgrounds(): Promise<string[]> {
  //   const url = `https://api.rawg.io/api/games?key=${this.apiKey}&page_size=$40`;
  //   try {
  //     const response = await axios.get(url);
  //     const games = response.data.results;

  //     const gameBackgrounds = games.map((game: any) => game.background_image);
  //     return gameBackgrounds;
  //   } catch (error) {
  //     console.error('Ocorreu um erro ao obter as imagens de fundo dos jogos:', error);
  //     return [];
  //   }
  // }
}

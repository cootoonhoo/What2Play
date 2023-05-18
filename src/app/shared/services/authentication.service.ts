import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users : Array<User> = [{"firstName":"Marco Antonio","lastName":"Batista de Souza","email":"cootoonhoo@gmail.com","username":"admin","password":"admin123","perfilIcon":"../../../../../assets/Avatar/avatar2.png","preferences":{"games":[{"title":"Injustice: Gods Among Us Ultimate Edition","rating":3.52,"description":"Injustice: Gods Among Us Ultimate Edition is an extended version of fighting game Injustice: Gods Among Us based on the imaginary universe of DC Comics. The gameplay is made in a traditional fighting 2.5D manner: battles occur in a 2D perspective but all the characters and objects are 3D. All fights are held in one-on-one form, where each participant has two life scales. Game mechanics are simple: three different types of hits and a special ability are available for each character. Some on-map objects are interactive and can be also used in attack. The main action takes place in a universe, which is parallel to a DC’s one, so occasionally clashes may look unusual. According to the storyline, Superman established dictatorship on Earth, and several Justice League members started resisting him. In the game, players are able to take control of favourite DC heroes and to participate in a war between Superman’s domination and the rebellion led by Batman. The Ultimate Edition offers players 6 new characters, over 30 new skins, and 60 new S.T.A.R. Labs missions. Injustice: Gods Among Us is followed by the sequel Injustice 2.","posterImg":"https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg","genre":"Arcade","relaseDate":"2013-11-12"},{"title":"Minecraft","rating":4.43,"description":"One of the most popular games of the 2010s, Minecraft allows you to rebuild the environment around you. The world of the game is open, infinitely wide, and procedurally generated. It is composed of small 3D cubes that represent specific types of materials or terrain. The gameplay is centered on mining and building various structures of your choice. You can also craft items like tools, weapons, and armor. There&#39;s an option to shift to the first or the third person view.Minecraft includes multiple modes that dramatically change the focus of the game. Survival and Adventure modes require the player to gather resources, hunt for food and fight monsters to survive. In the Hardcore mode, there’s even permanent death. Creative mode, by contrast, offers you to freely explore the world and construct whatever you want with unlimited resources. There’s also a multiplayer mode that allows the players to share their worlds and engage in the traditional MMO activities, such as player-vs-player combat.Minecraft’s crude visual style, reminiscent of Lego cubes, became an iconic part of the popular culture. There are many myths and fan fiction surrounding the game, such as the legend of Herobrine, a rumored character that officially doesn’t exist.","posterImg":"https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg","genre":"Arcade","relaseDate":"2009-05-10"},{"title":"Papers, Please","rating":4.36,"description":"The creator of the game often travelled through Asia and made the observation that the work of an immigration officer checking documents for entry is simultaneously very monotonous and very responsible. The game reproduces this work - but scammers and unusual situations occur in it much more often than in reality. The task of the player-officer is not to make a mistake, not to let an unwanted guest into the country. He has power, directories, translucent devices, etc., but experienced masters of deception and fraud act against him. The task of the player is complicated by the fact that his country is like all the paranoid dictatorships at the same time. This country fears a lot, seeks to control everything and periodically generates various rules. The game has a lot of humour, a lot of exciting puzzles and unexpected twists, including shooting. The visual and musical design of the game reflects the bizarre world of stupid rules, constant fear and mutual distrust.","posterImg":"https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg","genre":"Educational","relaseDate":"2013-08-08"}],"genre":["Arcade","Educational","Board Games","Family","Fighting"]},"id":1}];

  constructor() {

   }

  getUsers() {
    return this.users;
  }

  getCurrentUser(){
    const user = sessionStorage.getItem('user')
    if(!user){
      console.warn("Nenhum usuário logado!")
      return;
    }
    return JSON.parse(user);
  }

  createUser(newUser : User){
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
    sessionStorage.setItem('user', JSON.stringify(newUser))
  }

  loginUser(username : string, password : string){
    const user = this.users.find( (user) => user.username === username && user.password === password);
    if(user)
      sessionStorage.setItem('user', JSON.stringify(user))
    return user;
  }

  logout(){
    sessionStorage.removeItem('user')
  }
}

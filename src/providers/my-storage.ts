import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class MyStorage {

    constructor(private storage: Storage) {

    }

    private __setData(key, data, _id?) {
        // Peciso dizer que isso ira retornar uma promessa
        return new Promise<any>((resolve, reject) => {
            
            //Verificar se ja esxiste algum dado cadastrado
            this.__getData(key).then(current_data => {
                if(current_data) {
                    let encontrou = false;
                    for(let item of data) {
                        if(item._id == _id) {
                            item = data;
                            encontrou = true;
                            break;
                        }
                    }
                    if(!encontrou)
                        current_data.push(data);
                }
                resolve(this.storage.set(key, data));
            }).catch(reject);
        });
    }

    private __getData(key) {
        return this.storage.get(key);
    }

    setUsers(data) {
        return this.__setData('users', data);
    }

    getUsers() {
        return this.__getData('users');
    }

    usersLogin(email, password) {
        return new Promise<any>((resolve, reject) => {
            this.__getData('users').then(users => {
                let user_return;
                for(let user of users) {
                    if(user.email == email && user.password == password) {
                        user_return = user;
                        break;
                    }
                }
                resolve(user_return);
            }).catch(reject);
        });
    }
}
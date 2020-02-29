class VigenereCipheringMachine {
    constructor(bool) {
        this.direct = (bool || bool===undefined) ? true : false;
        this.reverse  = (bool === false) ? true : false;
        this.alph = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
        this.table = [];
        for (let i = 0; i < this.alph.length; i++) {
            let new_line = this.alph.substr(i) + this.alph.substr(0,i);
            this.table.push(new_line.split(''));
        }
      }
    encrypt(message, key) {
        if(!message || !key) throw Error;
        message = message.toUpperCase();
        key = key.toUpperCase();
        let x,y;
        let enc_txt = "";
        let j = 0;
        let new_gen_key = "";
        for ( let letter of message) {
            // генерируем ключ на основе сообщения, исключая все кроме самого сообщения 
            // ( meassage = "123MESSAGE123", key ="SEVEN", new_gen_key="SEVENSE")
            if(/[A-Z]/i.test(letter)){
                new_gen_key += key.substr(j,1);
                j = (j===key.length-1) ? 0 : j+1; // индекс j содержит значение которое сбрасывается если ключ надо расширять
            }
        }
        if(this.reverse) new_gen_key=new_gen_key.split('').reverse().join('');
        j = 0;
        for ( let i=0; i<message.length;i++) {
            if(/[A-Z]/g.test(message[i])){
                x = this.alph.indexOf(message[i]);
                y = this.alph.indexOf(new_gen_key[j]);
                enc_txt += this.table[y][x];
                j+=1;
            }else{
                enc_txt += message[i];
            }
        }
        return enc_txt;
    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key) throw Error;
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let x,y;
        let dec_txt = "";
        let j = 0;
        let new_gen_key = "";
        for ( let letter of encryptedMessage){
            // генерируем ключ на основе сообщения, исключая все кроме самого сообщения 
            // ( encryptedMessage = "123MESSAGE123", key ="SEVEN", new_gen_key="SEVENSE")
            if(/[A-Z]/i.test(letter)){
                new_gen_key += key.substr(j,1);
                j = (j===key.length-1) ? 0 : j+1; // индекс j содержит значение которое сбрасывается если ключ надо расширять
            }
        }        
        j=0;
        for ( let i=0; i<encryptedMessage.length;i++) {
            if(/[A-Z]/i.test(encryptedMessage[i])){
                x = this.alph.indexOf(new_gen_key[j]);
                let line = this.table[x];
                y = line.indexOf(encryptedMessage[i]);
                dec_txt += this.alph[y];
                j+=1;
            }else{
                dec_txt += encryptedMessage[i];
            }
        }
        return dec_txt;
    }
}

module.exports = VigenereCipheringMachine;

import sha256 from 'crypto-js/sha256.js';
//const hash = require('hash.js'); 
//import crypto from'crypto-js';

class Block {

   constructor(
      Name = string,
      Data = string,
      Difficalty = Number,
      Nonce = Number,
      TimeStamp,
      hight = Number,
      PrevosHash = string
   ) {
      this.Name = Name;
      this.Data = Data;
      this.Difficalty = Difficalty;
      this.hight = hight;
      this.Nonce = Nonce;//0
      this.TimeStamp = TimeStamp;
      this.PrevosHash = PrevosHash;
      this.Hash = calaulathash();
   }
   calaulathash() {
      return sha256(this.hight + this.Data +this.TimeStamp).tostring();
      
   }

 
}

export default Block;

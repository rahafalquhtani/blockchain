//import sha256 from 'crypto-js/sha256.js';
//const hash = require('crypto-js/sha256.js'); 
//const SHA256 = require('crypto-js/sha256');
import hash from "hash.js";

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
      this.Hash =this.calaulathash();
   }
   calaulathash() {
     
      let magicHash = hash.sha256().update(this.Name +this.Data + this.Difficalty+this.hight+this.nonce +Date.now()).digest('hex');
     console.log(magicHash);
      return  magicHash ;
      
      
   }

 
}
export default Block;

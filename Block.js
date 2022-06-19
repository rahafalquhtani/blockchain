//import sha256 from 'crypto-js/sha256';
//const hash = require('hash.js'); 
import crypto from'crypto-js';

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
      return crypto(this.hight + this.Data +this.TimeStamp).tostring();
      
   }

 
}
// For Testing 
// var genesisBlock=new Block();
// console.log(genesisBlock()) ;
export default Block;

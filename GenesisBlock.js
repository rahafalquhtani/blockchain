import sha256 from 'crypto-js/sha256';
class Block
{

     constructor( 
      Name=string,
      Data=string,
      Difficalty=Number,
      Nonce=Number,
      TimeStamp,
      hight=Number,
      PrevosHash=string,
      Hash
      )
      {
        this.Name=Name;
        this.Data=Data;
        this.Difficalty=Difficalty;
        this.hight=hight;
        this.Nonce=Nonce;//0
        this.TimeStamp=TimeStamp;
        this.PrevosHash=PrevosHash;
        this.Hash=calaulathash();
     }
   calaulathash(){
      return this.sha256(
         this.hight+this.Data
      ).tostring();

   }
} 
 var GenesisBlock= new Block();
 console.log(GenesisBlock.Data="hey");
 export default Block;

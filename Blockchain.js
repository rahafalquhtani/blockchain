import Block from "./GenesisBlock"; 
class Blockchain{
    chain;
        constructor(){
        this.chain=[];
     }
     InitBlock(chain)
     {  
          if (chain.length==null)
        {
            this.chain=new Block("GenesisBlock","My first Block",1,0,Data.now(),0);
            this.chain.push(Block);
            console.log(this.Block);
        }

     }
}
import Block from "./Block";
class Blockchain {
    constructor() {
        this.chain = [this.genesisBlock()];
    }

   
    checkLastBlock() {
        return this.chain[this.blockchain.length - 1];
    }

    genesisBlock() {
        //return new Block("Genesis block","this is the first block",1,0,Date.now(),1);//prevshash
        if (chain == null) {
            this.chain = new Block("Genes is Block", "First Block", 1, 0, Data.now(), 0);
            this.chain.push(Block);
            console.log(this.Block);
        }

    }
    addBlock(newBlock) {
        newBlock.prevHash = this.checkLastBlock().Hash;
        newBlock.hash = this.calaulathash();
        this.chain.push(newBlock);
    }


    //validateBlockchain
    checkChainValidity(){
        for(let i = 1; i < this.chain.length; i++){
            const thisBlock = this.chain[i];
            const lastBlock= this.chain[i-1];

          if(thisBlock.hash !== thisBlock.calaulathash()){
              return false;
          }
         if(thisBlock.lastgHash !== lastBlock.hash)
             return false;
     }
        return true;
    }

}
export default Blockchain;
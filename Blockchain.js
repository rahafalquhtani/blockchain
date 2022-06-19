import Block from './Block.js';
class Blockchain {
   
    constructor() {
        this.chain = [];
        this.genesisBlock();
        
    }  

   checkLastBlock() {
        return this.chain[this.blockchain.length - 1];
    }

   genesisBlock() {
        //return new Block("Genesis block","this is the first block",1,0,Date.now(),1);//prevshash
        if (this.chain == null || this.chain.length==0) {
            let genesis = new Block("Genesis Block", "First Block", 1, 0, Date.now(), 0,"");
            console.log("firstblock");
            this.chain.push(genesis);
            return console.log(this.chain);
        }
        
    }
      
    // addBlock(newBlock) {
    //     newBlock.prevHash = this.checkLastBlock().Hash;
    //     newBlock.hash = this.calaulathash();
    //     this.chain.push(newBlock);
    // }


   
    // checkChainValidity() {
    //     for (let i = 1; i < this.chain.length; i++) {
    //         const thisBlock = this.chain[i];
    //         const lastBlock = this.chain[i - 1];

    //         if (thisBlock.hash !== thisBlock.calaulathash()) {
    //             return false;
    //         }
    //         if (thisBlock.lastgHash !== lastBlock.hash)
    //             return false;
    //     }
    //     return true;
    // }
 
    
}
var b=new Blockchain();
b.genesisBlock()


export default Blockchain;
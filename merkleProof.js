const { MerkleTree } = require("merkletreejs")
const keccak256 = require("keccak256")

const leaves = ['a', 'b', 'c'].map(x => keccak256(x))
const tree = new MerkleTree(leaves, keccak256)
const root = tree.getRoot().toString('hex')

const leaf = keccak256('a')
const proof = tree.getProof(leaf)

console.log(root);
console.log(tree.verify(proof, leaf, root)) // true

console.log(tree.toString());
// console.log(MerkleTree.bufferToHex(keccak256("a")).toString());
// console.log(proof);
for( let i = 0; i < proof.length; i++){
    console.log(MerkleTree.bufferToHex(proof[i].data).toString());
}


// const badLeaves = ['a', 'x', 'c'].map(x => keccak256(x))
// const badTree = new MerkleTree(badLeaves, keccak256)
// const badLeaf = keccak256('x')
// const badProof = badTree.getProof(badLeaf)
// console.log(badTree.verify(badProof, badLeaf, root)) // false
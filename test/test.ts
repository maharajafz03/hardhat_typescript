// //test/TokenTest.js

 const {expect} = require("chai")
 const {ethers} = require("hardhat")

 describe("token", function (){
   async function tokenfixture() {


    const Token = await token.getContractFactory("token")
    const token = await Token.deploy()
    
    await token.deployed()
   }
 })

// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Token Contract", function () {
//   let Token, token, owner, addr1, addr2;

//   beforeEach(async function () {
//     // Get the ContractFactory and Signers here.
//     Token = await ethers.getContractFactory("token");
//     [owner, addr1, addr2, _] = await ethers.getSigners();

//     // Deploy the contract
//     token = await Token.deploy();
//     await token.deployed();
//   });

//   describe("Deployment", function () {
//     it("Should set the right owner", async function () {
//       expect(await token.owner()).to.equal(owner.address);
//     });

//     it("Should assign the total supply of tokens to the owner", async function () {
//       const ownerBalance = await token.balance(owner.address);
//       expect(await token.totalSupply()).to.equal(ownerBalance);
//     });
//   });

//   describe("Transactions", function () {
//     it("Should transfer tokens between accounts", async function () {
//       // Transfer 50 tokens from owner to addr1
//       await token.transfer(addr1.address, 50);
//       const addr1Balance = await token.balance(addr1.address);
//       expect(addr1Balance).to.equal(50);

//       // Transfer 50 tokens from addr1 to addr2
//       await token.connect(addr1).transfer(addr2.address, 50);
//       const addr2Balance = await token.balance(addr2.address);
//       expect(addr2Balance).to.equal(50);
//     });

//     it("Should fail if sender doesn’t have enough tokens", async function () {
//       const initialOwnerBalance = await token.balance(owner.address);

//       // Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
//       // `require` will evaluate false and revert the transaction.
//       await expect(
//         token.connect(addr1).transfer(owner.address, 1)
//       ).to.be.revertedWith("insufficient fund");

//       // Owner balance shouldn't have changed.
//       expect(await token.balance(owner.address)).to.equal(initialOwnerBalance);
//     });

//     it("Should update balances after transfers", async function () {
//       const initialOwnerBalance = await token.balance(owner.address);

//       // Transfer 100 tokens from owner to addr1.
//       await token.transfer(addr1.address, 100);

//       // Transfer another 50 tokens from owner to addr2.
//       await token.transfer(addr2.address, 50);

//       // Check balances.
//       const finalOwnerBalance = await token.balance(owner.address);
//       expect(finalOwnerBalance).to.equal(initialOwnerBalance - 150);

//       const addr1Balance = await token.balance(addr1.address);
//       expect(addr1Balance).to.equal(100);

//       const addr2Balance = await token.balance(addr2.address);
//       expect(addr2Balance).to.equal(50);
//     });
//   });
// });

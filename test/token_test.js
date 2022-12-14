const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("token  contract", function () {
  it("once it deployed, owner should have total supply", async function () {
    const [owner] = await ethers.getSigners(); // just get the address at first index
    const Token = await ethers.getContractFactory("Token"); // we are getting token contract
    const hhtoken = await Token.deploy(); // deploy this token contract
    console.log(hhtoken);

    const ownerBalance = await hhtoken.balancesOf(owner.address);

    expect(await hhtoken.totalSupply()).to.equal(ownerBalance);
  });

  it("should transfer token between  accounts", async function () {
    const [owner, adder1, adder2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const hhToken = await Token.deploy();
    await hhToken.transfer(adder1.address, 100);
    const ownerBal = await hhToken.balancesOf(owner.address);
    const bal2 = await hhToken.balancesOf(adder1.address);
    expect(ownerBal).to.equal(1900);
    expect(bal2).to.equal(100);
  });
});

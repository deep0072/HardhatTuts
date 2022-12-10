const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("token  contract", function () {
  it("once it deployed, owner should have total supply", async function () {
    const [owner] = await ethers.getSigners(); // just get the address at first index
    const Token = await ethers.getContractFactory("Token"); // we are getting token contract
    const hhtoken = await Token.deploy(); // deploy this token contract
    console.log(hhtoken);

    const ownerBalance = await hhtoken.balancesOf(owner.address);

    expect("1000").to.equal(ownerBalance.toString());
  });
});

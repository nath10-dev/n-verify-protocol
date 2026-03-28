// ValidatorStaking.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ValidatorStaking is Ownable {
    mapping(address => uint256) public stakers;
    mapping(address => uint256) public stakingTime;
    mapping(address => bool) public isValidator;
    
    uint256 public constant MIN_STAKE = 100 ether;
    uint256 public validatorCount = 0;
    
    event Stake(address indexed validator, uint256 amount);
    event Unstake(address indexed validator, uint256 amount);
    event ValidatorAdded(address indexed validator);
    event ValidatorRemoved(address indexed validator);
    
    constructor() Ownable(msg.sender) {}
    
    function stake() external payable {
        require(msg.value >= MIN_STAKE, "Minimum stake is 100 ETH");
        
        if (stakers[msg.sender] == 0) {
            validatorCount++;
            isValidator[msg.sender] = true;
            emit ValidatorAdded(msg.sender);
        }
        
        stakers[msg.sender] += msg.value;
        stakingTime[msg.sender] = block.timestamp;
        
        emit Stake(msg.sender, msg.value);
    }
    
    function unstake() external {
        require(stakers[msg.sender] > 0, "No stake to withdraw");
        require(block.timestamp > stakingTime[msg.sender] + 30 days, "Lock period is 30 days");
        
        uint256 amount = stakers[msg.sender];
        stakers[msg.sender] = 0;
        
        if (isValidator[msg.sender]) {
            validatorCount--;
            isValidator[msg.sender] = false;
            emit ValidatorRemoved(msg.sender);
        }
        
        payable(msg.sender).transfer(amount);
        
        emit Unstake(msg.sender, amount);
    }
    
    function getStake(address validator) external view returns (uint256) {
        return stakers[validator];
    }
    
    function getValidatorStatus(address validator) external view returns (bool) {
        return isValidator[validator];
    }
}
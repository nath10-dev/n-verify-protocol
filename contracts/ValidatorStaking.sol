// N-Verify Protocol Smart Contracts
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title ValidatorStaking
 * @dev Staking and reputation management for validators
 */
contract ValidatorStaking is AccessControl, ReentrancyGuard {
    bytes32 public constant VALIDATOR_ROLE = keccak256("VALIDATOR_ROLE");
    
    struct ValidatorInfo {
        address walletAddress;
        string domain;
        uint256 stakeAmount;
        uint256 reputationScore;
        uint256 totalStaked;
        bool isActive;
        uint256 joinedAt;
    }
    
    mapping(address => ValidatorInfo) public validators;
    mapping(address => uint256) public stakedBalances;
    mapping(address => uint256[]) public stakingHistory;
    
    uint256 public constant MINIMUM_STAKE = 0.01 ether;
    uint256 public constant SLASH_PERCENTAGE = 10; // 10% for malicious behavior
    
    event ValidatorJoined(address indexed validator, string domain, uint256 stakeAmount);
    event ValidatorStaked(address indexed validator, uint256 amount);
    event ValidatorUnstaked(address indexed validator, uint256 amount);
    event ValidatorSlashed(address indexed validator, uint256 amount);
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    function joinAsValidator(
        string memory _domain,
        uint256 _stakeAmount
    ) external payable nonReentrant {
        require(msg.value >= MINIMUM_STAKE, "Insufficient stake");
        require(!validators[msg.sender].isActive, "Already a validator");
        
        validators[msg.sender] = ValidatorInfo({
            walletAddress: msg.sender,
            domain: _domain,
            stakeAmount: msg.value,
            reputationScore: 100,
            totalStaked: msg.value,
            isActive: true,
            joinedAt: block.timestamp
        });
        
        stakedBalances[msg.sender] = msg.value;
        stakingHistory[msg.sender].push(msg.value);
        
        _grantRole(VALIDATOR_ROLE, msg.sender);
        
        emit ValidatorJoined(msg.sender, _domain, msg.value);
    }
    
    function stake() external payable nonReentrant {
        require(validators[msg.sender].isActive, "Not a validator");
        
        stakedBalances[msg.sender] += msg.value;
        validators[msg.sender].stakeAmount += msg.value;
        validators[msg.sender].totalStaked += msg.value;
        stakingHistory[msg.sender].push(msg.value);
        
        emit ValidatorStaked(msg.sender, msg.value);
    }
    
    function unstake(uint256 _amount) external nonReentrant {
        require(validators[msg.sender].isActive, "Not a validator");
        require(stakedBalances[msg.sender] >= _amount, "Insufficient balance");
        require(
            stakedBalances[msg.sender] - _amount >= MINIMUM_STAKE,
            "Cannot go below minimum stake"
        );
        
        stakedBalances[msg.sender] -= _amount;
        validators[msg.sender].stakeAmount -= _amount;
        
        payable(msg.sender).transfer(_amount);
        
        emit ValidatorUnstaked(msg.sender, _amount);
    }
    
    function getValidatorInfo(
        address _validator
    ) external view returns (ValidatorInfo memory) {
        return validators[_validator];
    }
    
    function getStakeBalance(address _validator) external view returns (uint256) {
        return stakedBalances[_validator];
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title VerificationRegistry
 * @dev Main contract for storing verification records on-chain
 */
contract VerificationRegistry is AccessControl, ReentrancyGuard, Pausable {
    bytes32 public constant VALIDATOR_ROLE = keccak256("VALIDATOR_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    
    struct VerificationRecord {
        string requestId;
        string domain;
        string merkleRoot;
        uint256 timestamp;
        address[] validators;
        uint8 consensusPercentage;
        string ipfsHash;
        bool isVerified;
    }
    
    // Mapping from request ID to verification record
    mapping(string => VerificationRecord) public verifications;
    
    // Mapping from validator address to reputation
    mapping(address => uint256) public validatorReputations;
    
    // Array of all verification request IDs
    string[] public allRequestIds;
    
    // Events
    event VerificationRecorded(
        string indexed requestId,
        string domain,
        string merkleRoot,
        uint256 timestamp
    );
    
    event ValidatorParticipated(
        string indexed requestId,
        address indexed validator
    );
    
    event ValidatorUpdated(
        address indexed validator,
        uint256 newReputation
    );
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }
    
    /**
     * @dev Record a verification result
     * @param _requestId Unique identifier for the verification request
     * @param _domain Domain (medical, legal, financial)
     * @param _merkleRoot Root hash of the verification Merkle tree
     * @param _validators Array of validator addresses who participated
     * @param _consensusPercentage Percentage of validators who verified (0-100)
     * @param _ipfsHash IPFS hash pointing to full reasoning graph
     */
    function recordVerification(
        string memory _requestId,
        string memory _domain,
        string memory _merkleRoot,
        address[] memory _validators,
        uint8 _consensusPercentage,
        string memory _ipfsHash
    ) public onlyRole(VALIDATOR_ROLE) nonReentrant whenNotPaused {
        require(bytes(_requestId).length > 0, "Invalid request ID");
        require(_consensusPercentage >= 51, "Consensus threshold not met");
        require(_validators.length > 0, "No validators");
        
        VerificationRecord storage record = verifications[_requestId];
        
        // Only set these once
        if (bytes(record.requestId).length == 0) {
            record.requestId = _requestId;
            record.domain = _domain;
            record.merkleRoot = _merkleRoot;
            record.timestamp = block.timestamp;
            record.validators = _validators;
            record.consensusPercentage = _consensusPercentage;
            record.ipfsHash = _ipfsHash;
            record.isVerified = true;
            
            allRequestIds.push(_requestId);
            
            emit VerificationRecorded(_requestId, _domain, _merkleRoot, block.timestamp);
        }
        
        // Emit events for each validator
        for (uint i = 0; i < _validators.length; i++) {
            emit ValidatorParticipated(_requestId, _validators[i]);
            
            // Update validator reputation (simple linear increase)
            if (record.isVerified) {
                validatorReputations[_validators[i]] += 1;
                emit ValidatorUpdated(_validators[i], validatorReputations[_validators[i]]);
            }
        }
    }
    
    /**
     * @dev Get verification record by request ID
     * @param _requestId The request ID to look up
     * @return VerificationRecord struct
     */
    function getVerification(
        string memory _requestId
    ) public view returns (VerificationRecord memory) {
        return verifications[_requestId];
    }
    
    /**
     * @dev Check if a request ID exists
     * @param _requestId The request ID to check
     * @return bool
     */
    function verificationExists(
        string memory _requestId
    ) public view returns (bool) {
        return bytes(verifications[_requestId].requestId).length > 0;
    }
    
    /**
     * @dev Get total number of verifications
     * @return uint256
     */
    function getTotalVerifications() public view returns (uint256) {
        return allRequestIds.length;
    }
    
    /**
     * @dev Get paginated verification IDs
     * @param _start Starting index
     * @param _count Number of IDs to return
     * @return string[] Array of request IDs
     */
    function getVerificationIds(
        uint256 _start,
        uint256 _count
    ) public view returns (string[] memory) {
        uint256 end = _start + _count;
        if (end > allRequestIds.length) {
            end = allRequestIds.length;
        }
        
        string[] memory ids = new string[](end - _start);
        for (uint256 i = _start; i < end; i++) {
            ids[i - _start] = allRequestIds[i];
        }
        
        return ids;
    }
    
    /**
     * @dev Pause the contract (admin only)
     */
    function pause() public onlyRole(ADMIN_ROLE) {
        _pause();
    }
    
    /**
     * @dev Unpause the contract (admin only)
     */
    function unpause() public onlyRole(ADMIN_ROLE) {
        _unpause();
    }
}

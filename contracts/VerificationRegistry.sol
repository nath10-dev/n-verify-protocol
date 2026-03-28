// VerificationRegistry.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VerificationRegistry is ERC721, ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    
    struct Verification {
        string certificateId;
        string domain;
        string reliabilityScore;
        uint256 timestamp;
        string aiOutputHash;
    }
    
    mapping(uint256 => Verification) public verifications;
    
    event VerificationCreated(
        uint256 indexed tokenId,
        string certificateId,
        string domain,
        string reliabilityScore
    );
    
    constructor() ERC721("N-Verify Certificate", "NVFY") Ownable(msg.sender) {}
    
    function createVerification(
        string memory certificateId,
        string memory domain,
        string memory reliabilityScore,
        string memory aiOutputHash,
        string memory tokenURI
    ) public returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        
        verifications[newTokenId] = Verification({
            certificateId: certificateId,
            domain: domain,
            reliabilityScore: reliabilityScore,
            timestamp: block.timestamp,
            aiOutputHash: aiOutputHash
        });
        
        emit VerificationCreated(newTokenId, certificateId, domain, reliabilityScore);
        
        return newTokenId;
    }
    
    function getVerification(uint256 tokenId) public view returns (Verification memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return verifications[tokenId];
    }
    
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return super.tokenURI(tokenId);
    }
    
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
contract SimpleOwnable {
    address public owner;
    string public message;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor(address setOwner) {
        owner = setOwner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Ownable: caller is not the owner");
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}

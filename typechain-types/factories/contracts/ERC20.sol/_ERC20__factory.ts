/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  _ERC20,
  _ERC20Interface,
} from "../../../contracts/ERC20.sol/_ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001828380380620018288339818101604052810190620000379190620002a1565b828281600390816200004a919062000586565b5080600490816200005c919062000586565b50505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200066d565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200011282620000c7565b810181811067ffffffffffffffff82111715620001345762000133620000d8565b5b80604052505050565b600062000149620000a9565b905062000157828262000107565b919050565b600067ffffffffffffffff8211156200017a5762000179620000d8565b5b6200018582620000c7565b9050602081019050919050565b60005b83811015620001b257808201518184015260208101905062000195565b60008484015250505050565b6000620001d5620001cf846200015c565b6200013d565b905082815260208101848484011115620001f457620001f3620000c2565b5b6200020184828562000192565b509392505050565b600082601f830112620002215762000220620000bd565b5b815162000233848260208601620001be565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000269826200023c565b9050919050565b6200027b816200025c565b81146200028757600080fd5b50565b6000815190506200029b8162000270565b92915050565b600080600060608486031215620002bd57620002bc620000b3565b5b600084015167ffffffffffffffff811115620002de57620002dd620000b8565b5b620002ec8682870162000209565b935050602084015167ffffffffffffffff81111562000310576200030f620000b8565b5b6200031e8682870162000209565b925050604062000331868287016200028a565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038e57607f821691505b602082108103620003a457620003a362000346565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200040e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620003cf565b6200041a8683620003cf565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000467620004616200045b8462000432565b6200043c565b62000432565b9050919050565b6000819050919050565b620004838362000446565b6200049b62000492826200046e565b848454620003dc565b825550505050565b600090565b620004b2620004a3565b620004bf81848462000478565b505050565b5b81811015620004e757620004db600082620004a8565b600181019050620004c5565b5050565b601f82111562000536576200050081620003aa565b6200050b84620003bf565b810160208510156200051b578190505b620005336200052a85620003bf565b830182620004c4565b50505b505050565b600082821c905092915050565b60006200055b600019846008026200053b565b1980831691505092915050565b600062000576838362000548565b9150826002028217905092915050565b62000591826200033b565b67ffffffffffffffff811115620005ad57620005ac620000d8565b5b620005b9825462000375565b620005c6828285620004eb565b600060209050601f831160018114620005fe5760008415620005e9578287015190505b620005f5858262000568565b86555062000665565b601f1984166200060e86620003aa565b60005b82811015620006385784890151825560018201915060208501945060208101905062000611565b8683101562000658578489015162000654601f89168262000548565b8355505b6001600288020188555050505b505050505050565b6111ab806200067d6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c578063a9059cbb11610066578063a9059cbb14610216578063dd62ed3e14610246578063f0dda65c14610276578063f8b2cb4f14610292576100cf565b806370a08231146101aa5780638da5cb5b146101da57806395d89b41146101f8576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce5671461017057806342966c681461018e575b600080fd5b6100dc6102c2565b6040516100e99190610d66565b60405180910390f35b61010c60048036038101906101079190610e21565b610354565b6040516101199190610e7c565b60405180910390f35b61012a610377565b6040516101379190610ea6565b60405180910390f35b61015a60048036038101906101559190610ec1565b610381565b6040516101679190610e7c565b60405180910390f35b6101786103b0565b6040516101859190610f30565b60405180910390f35b6101a860048036038101906101a39190610f4b565b6103b9565b005b6101c460048036038101906101bf9190610f78565b6103c6565b6040516101d19190610ea6565b60405180910390f35b6101e261040e565b6040516101ef9190610fb4565b60405180910390f35b610200610434565b60405161020d9190610d66565b60405180910390f35b610230600480360381019061022b9190610e21565b6104c6565b60405161023d9190610e7c565b60405180910390f35b610260600480360381019061025b9190610fcf565b6104da565b60405161026d9190610ea6565b60405180910390f35b610290600480360381019061028b9190610e21565b610561565b005b6102ac60048036038101906102a79190610f78565b6105ff565b6040516102b99190610ea6565b60405180910390f35b6060600380546102d19061103e565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd9061103e565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b5050505050905090565b60008061035f610611565b905061036c818585610619565b600191505092915050565b6000600254905090565b60008061038c610611565b905061039985828561062b565b6103a48585856106bf565b60019150509392505050565b60006012905090565b6103c333826107b3565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546104439061103e565b80601f016020809104026020016040519081016040528092919081815260200182805461046f9061103e565b80156104bc5780601f10610491576101008083540402835291602001916104bc565b820191906000526020600020905b81548152906001019060200180831161049f57829003601f168201915b5050505050905090565b60006104d28383610835565b905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e8906110bb565b60405180910390fd5b6105fb8282610858565b5050565b600061060a826103c6565b9050919050565b600033905090565b61062683838360016108da565b505050565b600061063784846104da565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106b957818110156106a9578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016106a0939291906110db565b60405180910390fd5b6106b8848484840360006108da565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107315760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107289190610fb4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107a35760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161079a9190610fb4565b60405180910390fd5b6107ae838383610ab1565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108255760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161081c9190610fb4565b60405180910390fd5b61083182600083610ab1565b5050565b600080610840610611565b905061084d8185856106bf565b600191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108ca5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108c19190610fb4565b60405180910390fd5b6108d660008383610ab1565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361094c5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016109439190610fb4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109be5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016109b59190610fb4565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610aab578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610aa29190610ea6565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b03578060026000828254610af79190611141565b92505081905550610bd6565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b8f578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610b86939291906110db565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c1f5780600260008282540392505081905550610c6c565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610cc99190610ea6565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d10578082015181840152602081019050610cf5565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d3882610cd6565b610d428185610ce1565b9350610d52818560208601610cf2565b610d5b81610d1c565b840191505092915050565b60006020820190508181036000830152610d808184610d2d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610db882610d8d565b9050919050565b610dc881610dad565b8114610dd357600080fd5b50565b600081359050610de581610dbf565b92915050565b6000819050919050565b610dfe81610deb565b8114610e0957600080fd5b50565b600081359050610e1b81610df5565b92915050565b60008060408385031215610e3857610e37610d88565b5b6000610e4685828601610dd6565b9250506020610e5785828601610e0c565b9150509250929050565b60008115159050919050565b610e7681610e61565b82525050565b6000602082019050610e916000830184610e6d565b92915050565b610ea081610deb565b82525050565b6000602082019050610ebb6000830184610e97565b92915050565b600080600060608486031215610eda57610ed9610d88565b5b6000610ee886828701610dd6565b9350506020610ef986828701610dd6565b9250506040610f0a86828701610e0c565b9150509250925092565b600060ff82169050919050565b610f2a81610f14565b82525050565b6000602082019050610f456000830184610f21565b92915050565b600060208284031215610f6157610f60610d88565b5b6000610f6f84828501610e0c565b91505092915050565b600060208284031215610f8e57610f8d610d88565b5b6000610f9c84828501610dd6565b91505092915050565b610fae81610dad565b82525050565b6000602082019050610fc96000830184610fa5565b92915050565b60008060408385031215610fe657610fe5610d88565b5b6000610ff485828601610dd6565b925050602061100585828601610dd6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061105657607f821691505b6020821081036110695761106861100f565b5b50919050565b7f596f7520617265206e6f7420746865204f776e65720000000000000000000000600082015250565b60006110a5601583610ce1565b91506110b08261106f565b602082019050919050565b600060208201905081810360008301526110d481611098565b9050919050565b60006060820190506110f06000830186610fa5565b6110fd6020830185610e97565b61110a6040830184610e97565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061114c82610deb565b915061115783610deb565b925082820190508082111561116f5761116e611112565b5b9291505056fea2646970667358221220d7c3008a163df74972a46b283c7297bc835e60d991d7a9eca20bf97842529da064736f6c63430008150033";

type _ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: _ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class _ERC20__factory extends ContractFactory {
  constructor(...args: _ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_name, _symbol, _owner, overrides || {});
  }
  override deploy(
    _name: string,
    _symbol: string,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, _symbol, _owner, overrides || {}) as Promise<
      _ERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): _ERC20__factory {
    return super.connect(runner) as _ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): _ERC20Interface {
    return new Interface(_abi) as _ERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): _ERC20 {
    return new Contract(address, _abi, runner) as unknown as _ERC20;
  }
}

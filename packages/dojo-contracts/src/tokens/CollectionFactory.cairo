use starknet::ContractAddress;

#[starknet::interface]
pub trait ICollectionFactory<TContractState> {
    fn create_collection(ref self: TContractState, name: ByteArray, symbol: ByteArray, base_uri: ByteArray);
    fn get_collection_from_artist(ref self: TContractState, artist: ContractAddress) -> ContractAddress;
}

#[starknet::contract]
mod CollectionFactory {
    use super::ICollectionFactory;
    use starknet::{ContractAddress, ClassHash, get_caller_address};
    use starknet::syscalls::{deploy_syscall};
    use starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, StoragePathEntry, Map,
    };

    #[storage]
    struct Storage {
        collections: Map<ContractAddress, ContractAddress>,
        collection_class_hash: ClassHash
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event { 
        CollectionCreated: CollectionCreated,
    }

    #[derive(Drop, starknet::Event)]
    pub struct CollectionCreated {
        #[key]
        pub artist: ContractAddress,
        pub collection: ContractAddress,
    }

    #[constructor]
    fn constructor(ref self: ContractState, collection_class_hash: ClassHash) {
        self.collection_class_hash.write(collection_class_hash);    
    }

    #[abi(embed_v0)]
    impl CollectionFactoryImpl of ICollectionFactory<ContractState> {
        fn create_collection(ref self: ContractState, name: ByteArray, symbol: ByteArray, base_uri: ByteArray) {
            let artist = get_caller_address();
            let mut constructor_calldata = array![];
            (name, symbol, base_uri).serialize(ref constructor_calldata);

            let (contract_address, _) = deploy_syscall(
                self.collection_class_hash.read(), 4242, constructor_calldata.span(), false,
            )
                .unwrap();

            self.collections.entry(artist).write(contract_address);

            self.emit(CollectionCreated { artist, collection: contract_address });
        }

        fn get_collection_from_artist(ref self: ContractState, artist: ContractAddress) -> ContractAddress {
            self.collections.entry(artist).read()
        }
    }
}

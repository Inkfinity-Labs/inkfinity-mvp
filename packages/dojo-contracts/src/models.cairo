use starknet::{ContractAddress};

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Artist {
    #[key]
    pub artist: ContractAddress,
    pub collected_fees: u256,
    pub amount_nft: u256,
    pub nft_sells: u256,
    pub ranking: u8,
    pub collection: ContractAddress,
}

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct User {
    #[key]
    pub user: ContractAddress,
    pub amount_nft: u256,
    pub nft_sells: u256,
}

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Tattoo {
    #[key]
    pub token_id: u256,
    #[key]
    pub artist: ContractAddress,
    #[key]
    pub collection: ContractAddress,
    pub owner: ContractAddress,
    pub price: u256,
}

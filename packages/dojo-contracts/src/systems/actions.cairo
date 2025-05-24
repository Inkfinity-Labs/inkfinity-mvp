use inkfinity::models::{Artist, User, Tattoo};

// define the interface
#[starknet::interface]
pub trait IActions<T> {
    fn mint(ref self: T, token_id: u256, uri: ByteArray, price: u256, collection: ContractAddress);
    fn invest(ref self: T, amount: u256);
    fn buy(ref self: T, token_id: u256);
    fn list(ref self: T, token_id: u256, price: u256);
    fn change_owner(ref self: T, token_id: u256, new_owner: ContractAddress);
    fn change_price(ref self: T, token_id: u256, price: u256);
}

// dojo decorator
#[dojo::contract]
pub mod actions {
    use super::{IActions, Artist, User, Tatoo};
    use starknet::{ContractAddress, get_caller_address};

    use dojo::model::{ModelStorage};
    use dojo::event::EventStorage;

    #[derive(Copy, Drop, Serde)]
    #[dojo::event]
    pub struct CreatedArt {
        #[key]
        pub artist: ContractAddress,
        pub collection: ContractAddress,
        pub token_id: u256,
        pub uri: ByteArray,
        pub price: u256,
    }

    #[derive(Copy, Drop, Serde)]
    #[dojo::event]
    pub struct Invested {
        #[key]
        pub artist: ContractAddress,
        pub amount: u256,
    }

    #[derive(Copy, Drop, Serde)]
    #[dojo::event]
    pub struct CreatedDrop {
        #[key]
        pub artist: ContractAddress,
        pub collection: ContractAddress,
        pub description: ByteArray,
    }

    #[derive(Copy, Drop, Serde)]
    #[dojo::event]
    pub struct Bought {
        #[key]
        pub user: ContractAddress,
        pub collection: ContractAddress,
        pub token_id: u256,
        pub price: u256,
    }

    #[derive(Copy, Drop, Serde)]
    #[dojo::event]
    pub struct Listed {
        #[key]
        pub user: ContractAddress,
        pub collection: ContractAddress,
        pub token_id: u256,
        pub price: u256,
    }

    #[derive(Copy, Drop, Serde)]
    #[dojo::event]
    pub struct ChangedOwner {
        #[key]
        pub collection: ContractAddress,
        pub prev_owner: ContractAddress,
        pub token_id: u256,
        pub new_owner: ContractAddress,
    }

    #[derive(Copy, Drop, Serde)]
    #[dojo::event]
    pub struct ChangedPrice {
        #[key]
        pub collection: ContractAddress,
        pub user: ContractAddress,
        pub token_id: u256,
        pub prev_price: u256,
        pub new_price: u256,
    }

    #[abi(embed_v0)]
    impl ActionsImpl of IActions<ContractState> {
        fn spawn(ref self: ContractState) {
            // Get the default world.
            let mut world = self.world_default();

            // Get the address of the current caller, possibly the player's address.
            let player = get_caller_address();
            // Retrieve the player's current position from the world.
            let position: Position = world.read_model(player);

            // Update the world state with the new data.

            // 1. Move the player's position 10 units in both the x and y direction.
            let new_position = Position {
                player, vec: Vec2 { x: position.vec.x + 10, y: position.vec.y + 10 },
            };

            // Write the new position to the world.
            world.write_model(@new_position);

            // 2. Set the player's remaining moves to 100.
            let moves = Moves {
                player, remaining: 100, last_direction: Option::None, can_move: true,
            };

            // Write the new moves to the world.
            world.write_model(@moves);
        }

        // Implementation of the move function for the ContractState struct.
        fn move(ref self: ContractState, direction: Direction) {
            // Get the address of the current caller, possibly the player's address.

            let mut world = self.world_default();

            let player = get_caller_address();

            // Retrieve the player's current position and moves data from the world.
            let position: Position = world.read_model(player);
            let mut moves: Moves = world.read_model(player);
            // if player hasn't spawn, read returns model default values. This leads to sub overflow
            // afterwards.
            // Plus it's generally considered as a good pratice to fast-return on matching
            // conditions.
            if !moves.can_move {
                return;
            }

            // Deduct one from the player's remaining moves.
            moves.remaining -= 1;

            // Update the last direction the player moved in.
            moves.last_direction = Option::Some(direction);

            // Calculate the player's next position based on the provided direction.
            let next = next_position(position, moves.last_direction);

            // Write the new position to the world.
            world.write_model(@next);

            // Write the new moves to the world.
            world.write_model(@moves);

            // Emit an event to the world to notify about the player's move.
            world.emit_event(@Moved { player, direction });
        }
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        /// Use the default namespace "dojo_starter". This function is handy since the ByteArray
        /// can't be const.
        fn world_default(self: @ContractState) -> dojo::world::WorldStorage {
            self.world(@"inkfinity")
        }
    }
}

// Define function like this:
fn next_position(mut position: Position, direction: Option<Direction>) -> Position {
    match direction {
        Option::None => { return position; },
        Option::Some(d) => match d {
            Direction::Left => { position.vec.x -= 1; },
            Direction::Right => { position.vec.x += 1; },
            Direction::Up => { position.vec.y -= 1; },
            Direction::Down => { position.vec.y += 1; },
        },
    };
    position
}

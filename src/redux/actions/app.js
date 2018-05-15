export const toggleModal = (name) => ({
  type: 'toggle_modal',
  name,
});

export const updateGameId = (input) => ({
  type: 'update_game_id',
  input,
});
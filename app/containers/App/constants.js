/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const GET_TILES = 'weather-app/App/GET_TILES';
export const SAVE_TILES = 'weather-app/App/SAVE_TILES';
export const SET_TILES = 'weather-app/App/SET_TILES';

export const REMOVE_TILE = 'weather-app/App/REMOVE_TILE';
export const PUSH_TILE = 'weather-app/App/PUSH_TILE';

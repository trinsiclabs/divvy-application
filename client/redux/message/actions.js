import ACTION_TYPES from './actionTypes';

/**
 * Hides the user message.
 *
 * @return {Object}
 */
export const hide = () => ({
  type: ACTION_TYPES.HIDE,
});

/**
 * Shows a message to the user.
 *
 * @param {String} content
 *
 * @return {Object}
 */
export const show = (content, type = 'info') => ({
  type: ACTION_TYPES.SHOW,
  payload: {
    content,
    type,
  },
});

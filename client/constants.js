export const MESSAGES = {
  CONTENT: {
    ERROR: 'Something went wrong - please try again',
    SUCCESS: 'Success',
  },
  TYPES: {
    ERROR: 'error',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
  },
};

export const PAGES = {
  HOME: {
    PATH: '/',
  },
  LOGIN: {
    PATH: '/Security/login?BackURL=/'
  },
  LOGOUT: {
    TITLE: 'Logout',
    PATH: '/Security/logout?BackURL=/',
  },
  NOT_FOUND: {
    TITLE: 'Not Found',
    PATH: '/not-found',
  },
  SIGNUP: {
    TITLE: 'Signup',
    PATH: '/signup',
  },
  SIGNUP_CONFIRM: {
    TITLE: 'Confirm your email',
    PATH: '/signup/confirm/:token',
  },
  TODO_ADD: {
    TITLE: 'Add Todo',
    PATH: '/todos/add',
  },
  TODO_EDIT: {
    TITLE: 'Edit Todo',
    PATH: '/todos/:todoId/edit',
  },
  TODOS: {
    TITLE: 'Todos',
    PATH: '/todos',
  },
};

module.exports.policies = {

  'AuthController': {
    '*': ['category', 'cart']
  },
  
  'MainController': {
    '*': ['category', 'cart']
  },
  
  'ProductController': {
    '*': ['category', 'cart']
  },
  
  'CartController': {
    '*': ['category', 'cart']
  },
  
  'UserController': {
    '*': ['category', 'cart']
  },
  
  
  
  'admin/AdminController': {
    '*': ['isAuthenticated', 'isAdmin']
  },
  
  'admin/ProductController': {
    '*': ['isAuthenticated', 'isAdmin', 'settings']
  },
  
  'admin/CategoryController': {
    '*': ['isAuthenticated', 'isAdmin']
  },
  
  'SettingsController': {
    '*': ['isAuthenticated', 'isAdmin']
  },

};
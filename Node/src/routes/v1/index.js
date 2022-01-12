const usersController = require('../../controllers/v1/user-controller');
const productsController = require('../../controllers/v1/product-controller');

const createRoutesV1 = (app) => {
    app.get('/api/v1/users', usersController.getUsers);
    app.get('/api/v1/users/:userId', usersController.getUserById);
    app.get('/api/v1/products', productsController.getProducts);
    app.get('/api/v1/products/:productId', productsController.getProductById);
    app.post('/api/v1/products/create', productsController.createProduct);
    app.put('/api/v1/products/:id', productsController.updateProduct);
    app.patch('/api/v1/products/:id', productsController.partialUpdateProduct);
    app.post('/api/v1/products/:id/notify-client', productsController.updateProductAndNotify);
    app.delete('/api/v1/products/:id', productsController.deleteProductById);
}

module.exports = createRoutesV1;

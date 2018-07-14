const mongoose = require('mongoose');

// Map global promise to get rid of warning
mongoose.Promise = global.Promise;

// Connect to DB
const db = mongoose.connect('mongodb://user_001:user_001@ds129801.mlab.com:29801/customer-cli', {
    useNewUrlParser: true
})
.then()
.catch(err => {
    if(err.name == 'MongoNetworkError')
        console.info(`Cannot connect to the DB. Please ensure that you've connected to the internet`);
    else
        err.name;
});

// Import mongoose model
const Customer = require('./models/customer');

// Add Customer
const addCustomer = customer => {
    Customer.create(customer)
        .then(customer => {
            console.info('New Customer Added');
            mongoose.disconnect();
        })
        .catch(err => {
            console.info(err);
        });
};

// Find Customer
const findCustomer = name => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{ firstname: search },{ lastname: search }]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} Matches`);
            mongoose.disconnect();
        })
        .catch(err => {
            console.info(err);
        });
};

// Update Customer
const updateCustomer = (_id, customer) => {
    Customer.update({ _id }, {$set: customer})
        .then(customer => {
            console.info('Customer Updated')
            mongoose.disconnect();
        })
        .catch(err => {
            console.info(err);
        });
};

// Remove Customer
const removeCustomer = _id => {
    Customer.remove({ _id })
        .then(customer => {
            console.info(`Customer Removed from DB`);
            mongoose.disconnect();
        })
        .catch(err => {
            console.info(err);
        });
};

// List all customers
const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} matches`);
            mongoose.disconnect();
        })
        .catch(err => {
            console.info(err);
        });
};

// Export all the methods
module.exports = { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers };
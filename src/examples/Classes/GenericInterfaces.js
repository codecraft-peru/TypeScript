var CustomerId = (function () {
    function CustomerId(customerIdValue) {
        this.customerIdValue = customerIdValue;
    }
    Object.defineProperty(CustomerId.prototype, "value", {
        get: function () {
            return this.customerIdValue;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerId;
})();

var Customer = (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
    }
    return Customer;
})();

var CustomerRepository = (function () {
    function CustomerRepository(customers) {
        this.customers = customers;
    }
    CustomerRepository.prototype.getById = function (id) {
        return this.customers[id.value];
    };
    CustomerRepository.prototype.persist = function (customer) {
        this.customers[customer.id.value] = customer;
        return customer.id;
    };
    return CustomerRepository;
})();

var customers = [
    new Customer(new CustomerId(1), "George Da"),
    new Customer(new CustomerId(2), "Raphael vico")];
var customerRepository = new CustomerRepository(customers);

console.log(customerRepository.getById(new CustomerId(1)));

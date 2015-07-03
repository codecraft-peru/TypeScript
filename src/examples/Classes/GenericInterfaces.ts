class CustomerId {
 constructor(public customerIdValue: number) {
 }
 get value() {
   return this.customerIdValue;
 }
}

class Customer {
 constructor(public id: CustomerId, public name: string) {
 }
}

interface Repository<T, TId> {
 getById(id: TId): T;
 persist(model: T): TId;

}
class CustomerRepository implements Repository<Customer, CustomerId> {
  constructor(private customers: Customer[]) {
 }
 getById(id: CustomerId) {
  return this.customers[id.value];
 }
 persist(customer: Customer) {
	 this.customers[customer.id.value] = customer;
	 return customer.id;
 }
}

var customers =[new Customer(new CustomerId(1) ,"George Da"),
	            new Customer(new CustomerId(2) ,"Raphael vico")];
var customerRepository = new CustomerRepository(customers);

console.log(customerRepository.getById(new CustomerId(1)));
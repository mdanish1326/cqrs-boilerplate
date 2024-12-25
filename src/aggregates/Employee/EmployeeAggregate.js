import {Aggregate} from '../AbstractAggregate.js';

export class EmployeeAggregate extends Aggregate {
  initialState() {
    return { id: null, name: '', role: '', salary: 0 };
  }

  createEmployee(payload) {
    if (this.state.id) {
      throw new Error('Employee already exists');
    }
    this.applyEvent(this.state, { type: 'EmployeeCreated', payload });
  }

  updateEmployee(payload) {
    if (!this.state.id) {
      throw new Error('Employee does not exist');
    }
    this.applyEvent(this.state, { type: 'EmployeeUpdated', payload });
  }

  onEmployeeCreated(state, payload) {
    return { ...state, ...payload, id: payload.id };
  }

  onEmployeeUpdated(state, payload) {
    return { ...state, ...payload };
  }
}

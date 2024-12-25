export class Aggregate {
	constructor(events = []) {
		this.state = this.initialState();
		this.applyEvents(events);
	}

	// Initial state
	initialState() {
		return {};
	}

	// Replay events to rebuild state
	applyEvents(events) {
		events.reduce((state, event) => this.applyEvent(state, event), this.state);
	}

	// Apply a single event
	applyEvent(state, event) {
		const handler = this[`on${event.type}`];
		if (handler) {
			this.state = handler.call(this, state, event.payload);
		}
		return this.state;
	}
}


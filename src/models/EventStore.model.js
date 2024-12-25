import {Schema, model} from 'mongoose';

const EventStoreSchema = new Schema({
	aggregateId: {
		type: Object,
		required: true,
		description: 'The aggregate id of the event'
	},
	type: {
		type: String,
		required: true,
		description: 'The type of the event'
	},
	data: {
		type: Object,
		required: true,
		decription: 'The payload of the event'
	},
	sequenceId: {
		type: Number,
		required: true,
		decription: 'An artificial sequencer to reduce aggregate level concurrency'
	},
	correlationId: {
		type: String,
		required: true,
		description: 'Similar to a process_id / request_id depending on the source of the command and events'
	},
	causationId: {
		type: String,
		required: true,
		description: 'Event id of the event that produced this event'
	},
	metadata: {
		type: Object
	},
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: false
	},
	versionKey: false,
	minimize: false,
	collection: 'EventStore'
});

/**
 * Defines the model for the Event Store
 */
export const EventStore = model('EventStore', EventStoreSchema);
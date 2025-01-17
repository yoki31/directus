import { StateUpdates, State, HelperFunctions } from '../types';
import { set } from 'lodash';

export function applyChanges(updates: StateUpdates, state: State, helperFn: HelperFunctions) {
	const { hasChanged } = helperFn;

	if (hasChanged('localType')) {
		this.removeSchema(updates, state, helperFn);
		this.setTypeToAlias(updates, state, helperFn);
		this.setSpecialToGroup(updates, state, helperFn);
	}
}

export function removeSchema(updates: StateUpdates) {
	set(updates, 'field.schema', undefined);
}

export function setTypeToAlias(updates: StateUpdates) {
	set(updates, 'field.type', 'alias');
}

export function setSpecialToGroup(updates: StateUpdates) {
	set(updates, 'field.meta.special', ['alias', 'no-data', 'group']);
}

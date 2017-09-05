import { SAVE_SETTINGS } from '../constants/Settings';

export function saveSettings(settings) {
    return {
        type: SAVE_SETTINGS,
        payload: settings
    };
}

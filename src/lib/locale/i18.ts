import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';
import en from '$lib/locale/lang/en.json';
import nl from '$lib/locale/lang/nl.json';

let isLoaded = false;
export function setupLocale() {
	if (isLoaded) return;
	isLoaded = true;

	addMessages('en', en);
	addMessages('nl', nl);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
}

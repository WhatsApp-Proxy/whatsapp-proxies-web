import { addMessages, getLocaleFromNavigator, init, locale } from 'svelte-i18n';
import en from '$lib/locale/lang/en.json';
import nl from '$lib/locale/lang/nl.json';
import fa from '$lib/locale/lang/fa.json';

let isLoaded = false;
export function setupLocale() {
	if (isLoaded) return;
	isLoaded = true;

	addMessages('en', en);
	addMessages('nl', nl);
    addMessages('fa', fa);

	init({
		fallbackLocale: 'fa',
		initialLocale: getLocaleFromNavigator()
	});
}

export function setLocale(newLocale = "en"){
    locale.set(newLocale);
}

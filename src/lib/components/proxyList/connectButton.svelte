<script lang="ts">
	import type { ProxyType } from '$lib/typeDef/proxyType';
	export let proxyEntry: ProxyType;
</script>

<div>
	<button>Connect</button>
</div>

<style>
	button {
		background-color: #000;
		color: #fff;
		border: none;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
	}
</style>

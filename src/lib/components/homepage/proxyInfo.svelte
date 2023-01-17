<script lang="ts">
    	import { goto } from '$app/navigation';
	import { HomeRoute } from '$lib/const/routes';

    	function routeTo(route: string) {
		goto(route);
		return;
	}
</script>

<div class="proxyInfo">
	<hr />
	<div class="proxyInfoText">
		<h2 class="headerText">The benefits of using a WhatsApp proxy in {new Date().getFullYear()}</h2>
        <p1 class="defaultFont">
            Unlock the full potential of WhatsApp with a reliable and secure proxy.
            <br>Whether you're living in a country where access to the popular messaging service is restricted or facing internet shutdowns, a WhatsApp proxy is the solution you need.
            <br>The latest version of WhatsApp comes with proxy support for Android and iOS, allowing you to connect to a server in a country where WhatsApp is accessible.
        </p1>
        <p1 class="defaultFont">
            A WhatsApp proxy is a server located in a country where WhatsApp is accessible. 
            By connecting to this server, you can access WhatsApp from any location in the world, bypassing censorship and internet restrictions. 
</p1>
        <p1 class="defaultFont">
            Our team at <a href={HomeRoute}>WhatsApp-proxy.com</a> has researched and compiled a list of the best WhatsApp proxies available, ensuring that your connection is secure and reliable.
            </p1>
            <p1 class="defaultFont">
                Don't let censorship get in the way of staying in touch with friends and family.
                <br>With our list of secure WhatsApp proxies, you can keep using the messaging service uninterrupted.
                <br>Trust in our expertise and experience to find the perfect proxy for you. Visit <a href={HomeRoute}>WhatsApp-proxy.com</a> today and stay connected with the world.
                <br>As a WhatsApp user, you can connect to any of the ip addresses in the <a href="#proxyTable">table</a> above.
        </p1>
	</div>
	<hr />
</div>

<style>
	hr {
		width: 25%;
		border: 1px solid #000;
		margin-top: 5em;
	}
	.proxyInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.proxyInfoText {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		margin-top: 2rem;
        width: 50%;
        text-overflow: clip;
	}

    p1{
        font-size: 1.25rem;
        font-weight: 500;
        color: #000;
        margin: 0.5rem 0;
        text-align: center;
    }
	.headerText {
		font-size: 2rem;
		font-weight: 900;
		color: #000;
		margin: 0.5rem 0;
	}


    @media only screen and (max-width: 810px) {
		.proxyInfoText{
            width: 90%;
        }
	}

</style>

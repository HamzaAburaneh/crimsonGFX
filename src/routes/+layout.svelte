<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	// import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		Button,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider
	} from 'flowbite-svelte';
	let hover = false;
	let homeActive = false;

	let aboutActive = false;

	let currentRoute;

	// onMount(() => {
	// 	currentRoute = $route.path;
	// 	if ((currentRoute = '/')) homeActive = true;
	// });

	$: clr = hover ? 'zinc-50' : 'rose-500';
	$: visibleFlag = hover ? 'invisible' : '';
	$: borderclr = hover ? 'border-zinc-50' : 'border-red-500';
	$: logotxtclr = hover ? 'text-zinc-50' : 'text-rose-500';
	$: logoimg = hover ? '/favicon2.png' : '/favicon.png';
</script>

<h1>{$page.url.pathname}</h1>
<div
	on:mouseenter={() => {
		hover = true;
	}}
	on:mouseleave={() => {
		hover = false;
	}}
	class="group/nav11 transition ease-in-out duration-700 border-b-[16px] border-[#EA2355] hover:border-zinc-50 shadow-[0_25px_40px_-15px_rgba(0,0,0,0.6)] relative"
>
	<Navbar
		let:hidden
		let:toggle
		class="transition py-8 ease-in-out bg-[#090808] text-zinc-50  duration-700"
		style="caret-color: transparent; align-items:center; "
		color="none"
	>
		<NavBrand href="/" class="py-8">
			<div class="relative h-9 w-[4.5rem]">
				{#key logoimg}
					<img
						src={logoimg}
						transition:scale={{
							duration: 1200,
							delay: 0,
							opacity: 0.3,
							start: 0.5,
							easing: quintOut
						}}
						class="mr-3 h-6 sm:h-9 absolute top-0 left-8"
						alt="Logo"
					/>
				{/key}
			</div>
			<span
				class=" self-center text-[#EA2355] transition ease-in-out duration-700 group-hover/nav11:text-zinc-50 whitespace-nowrap text-xl font-semibold dark:text-white"
			>
				CRIMSONGFX
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden} style=" bottom: -6px;" class="items-center justify">
			<NavLi
				class="css-menu"
				nonActiveClass="text-xl ease-in-out duration-700 text-zinc-500 hover:bg-zinc-50"
				activeClass="text-xl decoration-rose-500 text-rose-500 ease-in-out duration-700 group-hover/nav11:decoration-zinc-50 group-hover/nav11:text-zinc-50 underline underline-offset-[16px]"
				href="/"
				active={$page.url.pathname === '/'}>HOME</NavLi
			>
			<NavLi
				class="css-menu"
				nonActiveClass="text-xl ease-in-out duration-700 text-zinc-500 hover:bg-zinc-50"
				activeClass="text-xl decoration-rose-500 text-rose-500 ease-in-out duration-700 group-hover/nav11:decoration-zinc-50 group-hover/nav11:text-zinc-50 underline underline-offset-[16px]"
				href="/about"
				active={$page.url.pathname === '/about'}>ABOUT</NavLi
			>
			<NavLi
				class="css-menu"
				nonActiveClass="text-xl ease-in-out duration-700 text-zinc-500 hover:bg-zinc-50"
				activeClass="text-xl decoration-rose-500 text-rose-500 ease-in-out duration-700 group-hover/nav11:decoration-zinc-50 group-hover/nav11:text-zinc-50 underline underline-offset-[16px]"
				href="/contact"
				active={$page.url.pathname === '/contact'}>CONTACT</NavLi
			>
			<NavLi
				id="nav-menu-portfolio"
				class="cursor-pointer css-menu"
				nonActiveClass="text-xl ease-in-out duration-700 text-zinc-500 hover:bg-zinc-50"
				><Chevron aligned>PORTOFLIO</Chevron></NavLi
			>
			<Dropdown triggeredBy="#nav-menu-portfolio" class="w-44 z-20">
				<DropdownItem class="hover:bg-gray-700 hover:text-zinc-300">Stream Rebrands</DropdownItem>
				<DropdownItem class="hover:bg-gray-700 hover:text-zinc-300">Animated Screens</DropdownItem>
				<DropdownItem class="hover:bg-gray-700 hover:text-zinc-300">Logos</DropdownItem>
				<DropdownDivider />
				<DropdownItem class="hover:bg-gray-700 hover:text-zinc-300">Sign out</DropdownItem>
			</Dropdown>
			<NavLi
				class="css-menu"
				nonActiveClass="text-xl ease-in-out duration-700 text-zinc-500 hover:bg-zinc-50"
				activeClass="text-xl decoration-rose-500 text-rose-500 ease-in-out duration-700 group-hover/nav11:decoration-zinc-50 group-hover/nav11:text-zinc-50 underline underline-offset-[16px]"
				href="/pricing"
				active={$page.url.pathname === '/pricing'}>PRICING</NavLi
			>
		</NavUl>
	</Navbar>
</div>
<slot />

<style global>
	.biggerNavbar {
		height: 80px;
	}
	.li {
		float: left;
		display: block;
		color: #f2f2f2;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
		border-bottom: 3px solid transparent;
	}
	.css-menu {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
	}
	:global(body) {
		font-family: 'Montserrat', sans-serif;
	}
</style>

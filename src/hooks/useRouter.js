export default function useRouter() {
	const path = window.location.pathname
	const navigate = (data, url) => {
		window.history.pushState(data, '', url)
		const popstate = new PopStateEvent('popstate')
		window.dispatchEvent(popstate)
	}

	return { path, navigate }
}

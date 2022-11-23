import { test } from "@nftag/client-sdk";

export default function Web() {
	const message = test();

	return (
		<div>
			<h1>Web</h1>
			<p>{message}</p>
		</div>
	);
}

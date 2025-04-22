export const CURRENT_VERSION = '1.0.0';

export async function checkAppVersion(version: string = CURRENT_VERSION): Promise<{
	isLatest: boolean;
	currentVersion: string;
	yourVersion: string;
	message: string;
}> {
	const res = await fetch('https://kcu-nutria.duckdns.org/api/version', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ version }),
	});

	if (!res.ok) {
		throw new Error('Version check failed');
	}

	return res.json();
}
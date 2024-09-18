export const getResponse = async (question) => {
	try {
		const res = await fetch(`${process.env.VITE_BOT_API_URL}/qa`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({ question: question }),
		});

		const data = await res.json();

		if (data) {
			return {
				data: data,
				success: true,
			};
		} else {
			return {
				error: true,
			};
		}
	} catch (error) {
		console.log(error);
		return { error: 'Invalid Fields, Please Try Again' };
	}
};

import { getLocalBotResponse } from '../utils/botQuestions';

export const getResponse = async (question) => {
	try {
		const botApiUrl = import.meta.env.VITE_BOT_API_URL;
		
		if (!botApiUrl) {
			// Fallback to high-quality local responses immediately
			const localData = getLocalBotResponse(question);
			return {
				data: {
					question: localData.question,
					answer: localData.answer,
					category: localData.category
				},
				success: true,
			};
		}

		const res = await fetch(`${botApiUrl}/qa`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({ question: question }),
		});

		if (!res.ok) {
			throw new Error('API request failed');
		}

		const data = await res.json();
		if (data) {
			return {
				data: data,
				success: true,
			};
		}
	} catch (error) {
		console.warn('Bot API failed, using local mock fallback:', error);
		// Robust fallback to clean verified local responses
		const localData = getLocalBotResponse(question);
		return {
			data: {
				question: localData.question,
				answer: localData.answer,
				category: localData.category
			},
			success: true,
		};
	}
};

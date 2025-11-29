export default async function handler(req, res) {
    // Yalnız POST sorğularını qəbul edirik
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt, systemInstruction } = req.body;

    // API Key Vercel-in təhlükəsiz mühitindən oxunur
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Serverdə API Key tapılmadı' });
    }

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemInstruction || "" }] }
            })
        });

        const data = await response.json();

        // Google-dan gələn cavabı birbaşa frontend-ə ötürürük
        if (data.error) {
            throw new Error(data.error.message);
        }
        
        // Yalnız mətni qaytarırıq ki, frontend işi asan olsun
        const text = data.candidates[0].content.parts[0].text;
        res.status(200).json({ text: text });

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: 'AI cavab verə bilmədi', details: error.message });
    }
}
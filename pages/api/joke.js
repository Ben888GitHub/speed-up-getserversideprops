export default function handler(req, res) {
	res.status(200).json({ text: String(Math.random()) });
}

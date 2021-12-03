export default async (req, res) => {
  const result = await fetch('https://breakingbadapi.com/api/episodes');
  const json = await result.json();

  res.status(200).json({
    episodes: json
  })
}
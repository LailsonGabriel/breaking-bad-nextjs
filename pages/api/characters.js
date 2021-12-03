export default async (req, res) => {
  const result = await fetch('https://breakingbadapi.com/api/characters');
  const json = await result.json();

  res.status(200).json({
    list: json
  })
}
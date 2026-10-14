import { useState } from 'react';

export default function WallCalculator() {
  const [wallHeight, setWallHeight] = useState('');
  const [wallWidth, setWallWidth] = useState('');
  const [rollWidth, setRollWidth] = useState('53'); // standard wallpaper roll width in cm
  const [rollLength, setRollLength] = useState('1000'); // standard roll length in cm (10m)
  const [patternRepeat, setPatternRepeat] = useState('0'); // pattern repeat in cm, 0 if no repeat
  const [result, setResult] = useState<{
    strips: number;
    totalLength: number;
    rolls: number;
    area: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    const h = parseFloat(wallHeight);
    const w = parseFloat(wallWidth);
    const rw = parseFloat(rollWidth);
    const rl = parseFloat(rollLength);
    const pr = parseFloat(patternRepeat);

    if (
      isNaN(h) ||
      isNaN(w) ||
      isNaN(rw) ||
      isNaN(rl) ||
      isNaN(pr) ||
      h <= 0 ||
      w <= 0 ||
      rw <= 0 ||
      rl <= 0 ||
      pr < 0
    ) {
      setError('Vnesite veljavna števila za vse polja.');
      setResult(null);
      return;
    }

    // Calculate number of strips needed (wall width / roll width, rounded up)
    const strips = Math.ceil(w / rw);
    // Length per strip: wall height + pattern repeat (for each strip after the first, we need to account for repeat)
    // Actually, for pattern repeat, we need to add the repeat for each strip except the first? 
    // Standard formula: length per strip = wall height + pattern repeat
    // Then total length = strips * length per strip
    const lengthPerStrip = h + pr;
    const totalLength = strips * lengthPerStrip;
    // Number of rolls needed (total length / roll length, rounded up)
    const rolls = Math.ceil(totalLength / rl);
    // Area in square meters
    const area = (h * w) / 10000; // convert cm² to m²

    setResult({
      strips,
      totalLength: totalLength / 100, // convert to meters for display
      rolls,
      area,
    });
    setError(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Kalkulator za stenske površine</h2>
      <p className="mb-4 text-gray-600">
        Vnesite visino in širino stene ter parametre rolke za izračun potrebne količiny.
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Višina stene (cm)
          </label>
          <input
            type="number"
            value={wallHeight}
            onChange={(e) => setWallHeight(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            placeholder="Na primer: 250"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Širina stene (cm)
          </label>
          <input
            type="number"
            value={wallWidth}
            onChange={(e) => setWallWidth(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            placeholder="Na primer: 400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Širina rolke (cm)
          </label>
          <input
            type="number"
            value={rollWidth}
            onChange={(e) => setRollWidth(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            placeholder="Na primer: 53"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dolžina rolke (cm)
          </label>
          <input
            type="number"
            value={rollLength}
            onChange={(e) => setRollLength(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            placeholder="Na primer: 1000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ponovitev vzorca (cm)
          </label>
          <input
            type="number"
            value={patternRepeat}
            onChange={(e) => setPatternRepeat(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
            placeholder="Na primer: 0 (brez ponovitve)"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={calculate}
          className="w-full px-4 py-2 bg-terracotta text-white font-medium rounded hover:bg-terracotta/90 transition-colors"
        >
|<|reserved_token_163652|>Izračunaj
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Rezultati</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Število pasov:</span> {result.strips}
              </p>
              <p>
                <span className="font-medium">Skupna dolžina potrebna:</span>{' '}
                {result.totalLength.toFixed(1)} m
              </p>
              <p>
                <span className="font-medium">Število rolk:</span> {result.rolls}
              </p>
              <p>
                <span className="font-medium">Površina stene:</span>{' '}
                {result.area.toFixed(2)} m²
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
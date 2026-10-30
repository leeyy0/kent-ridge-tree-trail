# Kent Ridge Tree Trail

[Open the live mockup](https://kent-ridge-tree-trail.vercel.app/) · [GitHub repository](https://github.com/leeyy0/kent-ridge-tree-trail)

A working mockup of a more interactive **Activity 2: Tree Treasure Hunt**, based on **RVSS CA3 Guided Walk Proposal.pdf**, especially Activity 2, Appendix C2 and the five species in the group's existing Tree Cipher Quiz.

## Open

Node.js 20 or newer is sufficient. There are no packages to install.

```powershell
npm start
```

Open **http://127.0.0.1:4173**. Opening `index.html` directly also works with the bundled files; the local server gives more consistent browser behavior.

## Deploy

```powershell
npm run build
```

This creates `dist/` containing the interface, local assets, tree snapshot and vendor files. The local server, preview page and project documentation are not included. Vercel uses the settings in `vercel.json`; GitHub pushes to the production branch trigger deployment once the repository is connected.

## Presentation demo

1. Show the Kent Ridge map. Small dots are public tree records; large numbered pins are illustrative learning stops.
2. Tap a stop, discuss the photo and identify the species. A wrong answer gives an observation prompt; a correct answer reveals the ecological connection.
3. Switch to **Wet-weather mode**. Progress remains available. Enlarge a photo, describe its features to teammates and try the Street View link.
4. Identify at least 3 of 5 species. Select **Connect the discoveries** to discuss identification evidence, assisted succession and forest connectivity.

The optional 10-minute timer, discoveries and team reflection are saved in this browser on this device. Nothing is submitted to a backend. The question-mark button contains facilitator notes and a reset action.

## Data and limits

- **Real tree layer:** 4,310 records from the historical public NParks / Trees.SG dataset distributed by ExploreTrees.SG. This is not a current field survey or a complete forest census. Tap a small dot for its source record. The girth layer highlights records in the `> 1.5` category.
- **Illustrative stops:** the five numbered markers do not assert that the species occurs at those exact coordinates. Simpoh Air is absent from this saved tree-record subset; its photo challenge remains playable. This concept provides neither walking directions nor GPS tracking.
- **Photos:** reused from the group's existing Tree Cipher Quiz, with NParks Flora & Fauna Web attribution in the supplied proposal. A supporting forest image comes from the group's recce photographs.
- **Street View:** opens the nearest available Google panorama. Coverage and capture dates vary, and matching an individual tree is not guaranteed. The photo task works independently.
- **Planting history:** species and map records cannot establish whether an individual tree was planted. Assisted succession is a discussion topic, not a claim about every displayed specimen.

Before actual field use, verify specimen identities, stop locations and access during a recce. Facilitators choose the indoor venue; the concept does not designate shelters.

## Network and offline use

Leaflet, tree records and clue photos are bundled locally. The quiz, hints, progress and reflections work without external requests. OpenStreetMap tiles, Google Fonts, Street View and species links need internet access. If no basemap tiles load, the original proposal's park reference image appears; continue through the clue list. That image is not a geographic overlay for source points. Fonts fall back to Georgia and system sans-serif.

## Credits

- [ExploreTrees.SG](https://exploretrees.sg/) by [Chee Aun](https://github.com/cheeaun/exploretrees-sg), the map concept and dataset referenced in the original activity.
- [SG Trees Data](https://github.com/cheeaun/sgtreesdata): records from [Trees.SG](https://trees.sg/), copyright National Parks Board. Snapshot endpoints and extent are in `data/sources.json`.
- [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), basemap tiles. The application requests tiles for interactive viewing and includes no bulk downloads or offline tile cache. A dark display filter echoes ExploreTrees.
- [Leaflet 1.9.4](https://leafletjs.com/), BSD 2-Clause; `vendor/LICENSE.txt`.
- NParks Flora & Fauna Web: [Tiup-Tiup](https://www.nparks.gov.sg/florafaunaweb/flora/2/6/2698), [Simpoh Air](https://www.nparks.gov.sg/florafaunaweb/flora/2/8/2847), [Tembusu](https://www.nparks.gov.sg/florafaunaweb/flora/2/8/2895), [Derum](https://www.nparks.gov.sg/florafaunaweb/flora/2/8/2829), [Pink Mempat](https://www.nparks.gov.sg/florafaunaweb/flora/2/8/2830). Summaries are paraphrased. Tembusu's current name is *Cyrtophyllum fragrans*; *Fagraea fragrans* is a synonym.
- Clue photos: [the group's Tree Cipher Quiz](https://rvss1003-tree-activity-delta.vercel.app/), originally attributed to NParks in the CA3 proposal. Original asset names are recorded in `data/sources.json`.
- Offline reference map: Appendix J of the CA3 proposal, crediting [Patnotebook's Kent Ridge Park map](https://www.patnotebook.com/kent-ridge-park/).

## Files

`index.html`, `styles.css` and `app.js` contain the interface. `data/trees.js` contains saved records, `assets/` holds photographs, and `server.mjs` is a read-only static server bound to this computer. `preview/mobile.html` provides a 390 px layout preview.

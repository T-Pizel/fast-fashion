# fast-fashion
website

## Data & Facts page (charts)

The **Data & Facts** page (`frontend/data.html`) uses **embedded data only**: it reads from `data-embedded.js`, so charts work locally and when deployed with no CSV file or extra request.

**Deploy:** Put `data.html` and `data-embedded.js` in the same directory (e.g. deploy the whole `frontend/` folder).

**To update the chart data:**  
1. Add or edit a CSV with the same columns as before (Brand, Country, Year, Carbon_Emissions_tCO2e, etc.).  
2. From `frontend/`, regenerate the embedded file:

   ```bash
   node -e "
   const fs = require('fs');
   const csv = fs.readFileSync('true_cost_fast_fashion.csv', 'utf8');
   const escaped = csv.replace(/\\\\/g, '\\\\\\\\').replace(/\`/g, '\\\\\`');
   fs.writeFileSync('data-embedded.js', 'window.EMBEDDED_CSV = \`' + escaped + '\`;');
   "
   ```

   Then deploy the updated `data-embedded.js` with the site.

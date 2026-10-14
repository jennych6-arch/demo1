# HKMA Stress Testing — Unified Frontend

Next.js + TypeScript + Tailwind UI prototype. No backend is included.

## Run

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Unified exercise workspace

All exercises use **the same Setup, Submissions, Consolidation and History tabs**. A single `Exercise` model tracks exercise-specific configuration, template revisions, approvals, assignments, submissions, reports and activity. The workspace changes capabilities according to its status:

- **Draft**: starts empty; upload configuration, generate templates, record offline approval, publish.
- **Active**: same workspace; repeat configuration/template revisions, collect provider uploads, consolidate T0/Forecast.
- **Completed**: same workspace, read-only historical records.

The **New Exercise** action creates an empty draft, not a copy of the 2026 or historical exercise. Select an exercise on the Exercises page to switch between them. Use the top-right selector to preview Admin or Data Provider.

## Frontend-only limitations

- Data is kept in React memory and resets on refresh.
- Uploads retain filenames only; file bytes are not saved.
- Download buttons produce `.demo.txt` placeholders, **not** real Excel files or ZIP packages.
- No financial calculations, authentication, database, email, or FastAPI integrations.
- Historic exercise records are sample data, not real records.

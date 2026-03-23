# Meridian Partners — Client Document Portal

A static dummy web portal designed to be hosted on **GitHub Pages**.

## Quick Start

1. Open `index.html` in a browser (or serve the folder with any static server).
2. Enter **any** username and password to log in (all non-empty credentials are accepted).
3. Browse the document list, use filters/search, and click any entry to see its details + PDF download.

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages → Source** and select the branch (`main`) and root (`/`).
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Replacing the Placeholder PDF

The download buttons all point to `documents/sample.pdf`.  
Replace that file with your own PDF — no code changes needed.

If you want **different PDFs per document**, edit the `pdfPath` property for each entry in `js/app.js`.

## Project Structure

```
├── index.html          ← Login page
├── dashboard.html      ← Document overview + modal popup
├── css/
│   └── styles.css      ← All styles
├── js/
│   └── app.js          ← Login logic, document data, filtering, modal
├── documents/
│   └── sample.pdf      ← ⬅ REPLACE THIS with your own PDF
└── README.md
```

## Credentials

No real authentication — any non-empty username + password combination is accepted.  
Session state is stored in `sessionStorage` (cleared when the browser tab is closed).

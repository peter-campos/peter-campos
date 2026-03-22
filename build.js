import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';

const md = readFileSync('README.md', 'utf8');
const body = marked(md);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Peter Campos</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #0d1117;
      color: #e6edf3;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      padding: 40px 20px;
    }
    .container {
      max-width: 860px;
      margin: 0 auto;
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 40px;
    }
    h1, h2, h3 { color: #e6edf3; margin: 24px 0 12px; border-bottom: 1px solid #30363d; padding-bottom: 8px; }
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.25em; border-bottom: none; }
    p { margin: 12px 0; color: #c9d1d9; }
    a { color: #58a6ff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    code {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 4px;
      padding: 2px 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875em;
      color: #ff7b72;
    }
    pre {
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 16px;
      overflow-x: auto;
      margin: 16px 0;
    }
    pre code { border: none; padding: 0; color: #e6edf3; background: transparent; }
    ul, ol { padding-left: 24px; margin: 12px 0; color: #c9d1d9; }
    li { margin: 4px 0; }
    blockquote {
      border-left: 4px solid #30363d;
      padding-left: 16px;
      color: #8b949e;
      margin: 16px 0;
    }
    img { max-width: 100%; border-radius: 6px; }
    hr { border: none; border-top: 1px solid #30363d; margin: 24px 0; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th, td { border: 1px solid #30363d; padding: 8px 12px; text-align: left; }
    th { background: #161b22; color: #e6edf3; }
    td { color: #c9d1d9; }
  </style>
</head>
<body>
  <div class="container">
    ${body}
  </div>
</body>
</html>`;

writeFileSync('index.html', html);
console.log('✅ index.html generated');